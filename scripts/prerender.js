#!/usr/bin/env node
// scripts/prerender.js
//
// Build-time SSG: imports the SSR bundle (compiled by `vite build --ssr`)
// and walks each route in og.config.js, rendering React to HTML and
// writing per-route index.html files alongside the client bundle in
// dist/. The CDN serves these directly to crawlers and real users; the
// client bundle then hydrates onto the rendered HTML for interactive
// features.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import config from '../og.config.js'

const ROOT = fileURLToPath(new URL('..', import.meta.url))
const DIST = join(ROOT, 'dist')
const SSR_BUNDLE = join(ROOT, 'dist-ssr', 'entry-server.js')
const TEMPLATE = join(DIST, 'index.html')

function log(msg) { console.log(`[prerender] ${msg}`) }
function fail(msg) { console.error(`[prerender] ERROR: ${msg}`); process.exit(1) }

if (!existsSync(SSR_BUNDLE)) {
  fail(`SSR bundle missing at ${SSR_BUNDLE}. Run \`vite build --ssr src/entry-server.jsx --outDir dist-ssr\` first.`)
}
if (!existsSync(TEMPLATE)) {
  fail(`Client template missing at ${TEMPLATE}. Run \`vite build\` first.`)
}

const { render } = await import(SSR_BUNDLE)
const template = readFileSync(TEMPLATE, 'utf-8')

/**
 * Build the head fragment from a react-helmet-async helmet context.
 * Each property exposes a `.toString()` that emits ready-to-inject HTML.
 */
function helmetHead(helmet) {
  if (!helmet) return ''
  return [
    helmet.title?.toString() || '',
    helmet.meta?.toString() || '',
    helmet.link?.toString() || '',
    helmet.script?.toString() || '',
  ].filter(Boolean).join('\n  ')
}

/**
 * Replace the static <title>/<meta description> from the template with
 * the per-route helmet output. We strip the template's own title +
 * description so per-route values win; OG tags, JSON-LD, and other
 * <head> contents from the template are preserved (they're page-level
 * defaults; per-route helmet may add to them).
 */
function injectHead(templateHtml, helmetFragment) {
  if (!helmetFragment.trim()) return templateHtml
  let out = templateHtml.replace(/<title>[\s\S]*?<\/title>\s*/, '')
  out = out.replace(/<meta\s+name="description"[^>]*>\s*/i, '')
  return out.replace('</head>', `  ${helmetFragment}\n</head>`)
}

function injectBody(html, rootHtml) {
  return html.replace('<div id="root"></div>', `<div id="root">${rootHtml}</div>`)
}

function pageOutPath(route) {
  if (route === '/') return join(DIST, 'index.html')
  return join(DIST, route.replace(/^\//, ''), 'index.html')
}

let success = 0
const failures = []

for (const route of config.prerenderRoutes) {
  try {
    const { html, helmet } = render(route)
    const headFragment = helmetHead(helmet)
    let pageHtml = injectHead(template, headFragment)
    pageHtml = injectBody(pageHtml, html)

    const out = pageOutPath(route)
    mkdirSync(dirname(out), { recursive: true })
    writeFileSync(out, pageHtml, 'utf-8')

    const bytes = pageHtml.length
    log(`✓ ${route.padEnd(14)} → ${out.replace(ROOT + '/', '')} (${(bytes / 1024).toFixed(1)} KB)`)
    success++
  } catch (e) {
    failures.push({ route, error: e.message })
    log(`✗ ${route} — ${e.message}`)
  }
}

log('')
if (failures.length > 0) {
  log(`Pre-render finished with ${failures.length} failure(s):`)
  for (const f of failures) log(`  - ${f.route}: ${f.error}`)
  process.exit(1)
}
log(`Pre-render complete: ${success}/${config.prerenderRoutes.length} routes.`)
