// og.config.js
//
// Olympus-Grid deployment metadata for this site. Source of truth for the
// build + deploy pipeline. AWS values stay <<TBD>> until Track A (S3 +
// CloudFront provisioning) lands; the deploy script reads this file and
// validates the placeholders are filled before running aws CLI commands.
//
// This config is per-deployment, mirrored by a Plugin__mdt record in the
// alpha-org olympus-grid managed package (see Plugin.deploy_marketing_www
// — added in a separate olympus-grid PR once AWS values are real).

export default {
  // Logical name for this deployment. Becomes the S3 prefix and the
  // Plugin__mdt DeveloperPluginName__c on the olympus-grid side.
  deploymentName: 'marketing-www',

  // Production domain that this deployment serves. Used by CloudFront's
  // viewer-host check and by olympus-grid's PortalSettingsCtrl router for
  // domain → bundle resolution (when SF Site is in path; not for this
  // deployment, but kept here for symmetry with future deployments).
  domain: 'www.olympus-grid.com',

  // Pre-rendered routes — must match react-snap's `include` in
  // package.json. react-snap walks these post-build and emits per-route
  // index.html files crawlers see.
  prerenderRoutes: [
    '/',
    '/about',
    '/security',
    '/privacy',
    '/terms',
    '/references',
  ],

  // AWS infrastructure — TEST / throwaway POC resources. Provisioned
  // 2026-04-28 in account 842485730943 (us-east-1) to validate the Iris
  // MVP architecture against pre-prod URLs before any DNS cuts. Production
  // CDN architecture is a separate design — these resources will be
  // deleted once the proof completes (see scripts/teardown-test-cdn.sh).
  aws: {
    region: 'us-east-1',
    bucketName: 'test-og-iris-bundle',
    distributionId: 'E29U6MZUQ6DP0U',
    distributionDomain: 'dt47y7dxlllrx.cloudfront.net',
    // CloudFront origin path is /marketing-www, so S3 sync target is
    // s3://test-og-iris-bundle/marketing-www/ and CloudFront strips that
    // prefix when fetching from origin. Browser sees clean URLs:
    //   https://dt47y7dxlllrx.cloudfront.net/about → s3://.../marketing-www/about/index.html
    originAccessControlId: 'E1MUAQSUFJWK33',
    cloudFrontFunction: 'test-og-iris-rewrite',
  },

  // Cache policy applied during S3 sync. Hashed bundle assets are
  // immutable (bundle hash changes on every build). HTML is short-lived
  // because routes can change without a hash change.
  cachePolicy: {
    immutable: {
      // Vite emits hashed filenames into /assets/. Anything under there
      // can be cached forever — the URL changes when the content changes.
      pathPatterns: ['/assets/*'],
      headers: 'public, max-age=31536000, immutable',
    },
    short: {
      pathPatterns: ['/index.html', '/*/index.html', '/llms*.txt', '/sitemap.xml', '/robots.txt'],
      headers: 'public, max-age=3600, must-revalidate',
    },
  },

  // CloudFront paths to invalidate after each deploy. Hashed assets are
  // self-cache-busting so we don't waste invalidation quota on them.
  invalidationPaths: [
    '/',
    '/index.html',
    '/*/index.html',
    '/llms*.txt',
    '/sitemap.xml',
    '/robots.txt',
  ],
}
