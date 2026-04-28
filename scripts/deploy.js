#!/usr/bin/env node
// scripts/deploy.js
//
// Deploy a built `dist/` directory to S3 + invalidate CloudFront.
//
// Reads og.config.js for deployment metadata. Refuses to run if any AWS
// value is still `<<TBD>>` — Track A must provision the bucket and
// distribution and fill those in first.
//
// Usage:
//   node scripts/deploy.js              # full deploy
//   node scripts/deploy.js --dry-run    # print commands without executing
//
// Assumes:
//   - aws CLI v2 installed and on PATH
//   - AWS credentials available via env / profile / instance role
//   - `npm run build` has produced dist/ with vite + react-snap output

import { execSync } from 'node:child_process'
import { existsSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import config from '../og.config.js'

const DRY_RUN = process.argv.includes('--dry-run')
const ROOT = fileURLToPath(new URL('..', import.meta.url))
const DIST = join(ROOT, 'dist')

function log(msg) {
  console.log(`[deploy] ${msg}`)
}

function fail(msg) {
  console.error(`[deploy] ERROR: ${msg}`)
  process.exit(1)
}

function run(cmd) {
  log(`$ ${cmd}`)
  if (DRY_RUN) return ''
  return execSync(cmd, { stdio: 'inherit', cwd: ROOT })
}

function validateConfig() {
  const placeholders = []
  for (const [k, v] of Object.entries(config.aws)) {
    if (typeof v === 'string' && v.includes('<<TBD>>')) placeholders.push(`aws.${k}`)
  }
  if (placeholders.length > 0) {
    fail(
      `og.config.js still has placeholder values: ${placeholders.join(', ')}\n` +
      `Fill them in once Track A (S3 bucket + CloudFront distribution) is provisioned.`
    )
  }
}

function validateBuild() {
  if (!existsSync(DIST)) fail(`dist/ not found. Run \`npm run build\` first.`)
  // Check that react-snap actually wrote per-route HTML
  const expectedHtml = config.prerenderRoutes
    .map(r => r === '/' ? 'index.html' : `${r.replace(/^\//, '')}/index.html`)
    .map(p => join(DIST, p))
  const missing = expectedHtml.filter(p => !existsSync(p))
  if (missing.length > 0) {
    fail(
      `Pre-rendered HTML missing for ${missing.length} route(s):\n` +
      missing.map(p => `  - ${p}`).join('\n') +
      `\nVerify react-snap ran during postbuild.`
    )
  }
  log(`Pre-rendered HTML verified for ${config.prerenderRoutes.length} routes.`)
}

function sizeOf(path) {
  let total = 0
  function walk(p) {
    const s = statSync(p)
    if (s.isDirectory()) for (const f of readdirSync(p)) walk(join(p, f))
    else total += s.size
  }
  walk(path)
  return total
}

function syncImmutable() {
  // Hashed assets: long-lived cache, immutable. Vite emits these to /assets/.
  // Sync first to avoid race where index.html references an asset that's
  // not yet uploaded.
  const dest = `s3://${config.aws.bucketName}/${config.deploymentName}/`
  log(`Sync immutable assets → ${dest}`)
  run(
    `aws s3 sync ${DIST}/ ${dest} ` +
    `--region ${config.aws.region} ` +
    `--cache-control "${config.cachePolicy.immutable.headers}" ` +
    `--exclude "*" ` +
    `--include "assets/*"`
  )
}

function syncShortLived() {
  // HTML, llms.txt, sitemap, robots — short-lived, revalidate. Synced
  // second so they reference assets that already exist on S3.
  const dest = `s3://${config.aws.bucketName}/${config.deploymentName}/`
  log(`Sync short-lived files → ${dest}`)
  run(
    `aws s3 sync ${DIST}/ ${dest} ` +
    `--region ${config.aws.region} ` +
    `--cache-control "${config.cachePolicy.short.headers}" ` +
    `--exclude "assets/*"`
  )
}

function invalidate() {
  // Hashed assets are self-cache-busting; only HTML / sitemaps need
  // CloudFront invalidation.
  const paths = config.invalidationPaths.map(p => `"${p}"`).join(' ')
  log(`Invalidate CloudFront paths`)
  run(
    `aws cloudfront create-invalidation ` +
    `--distribution-id ${config.aws.distributionId} ` +
    `--paths ${paths}`
  )
}

function main() {
  log(`Deployment: ${config.deploymentName}`)
  log(`Domain:     ${config.domain}`)
  log(`Mode:       ${DRY_RUN ? 'DRY RUN' : 'LIVE'}`)

  validateConfig()
  validateBuild()

  const distSize = (sizeOf(DIST) / 1024 / 1024).toFixed(2)
  log(`dist/ size: ${distSize} MB`)

  syncImmutable()
  syncShortLived()
  invalidate()

  log(`Deploy complete. Verify at https://${config.domain}/`)
}

main()
