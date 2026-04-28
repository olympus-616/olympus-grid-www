# olympus-grid.com — Marketing Site

**πλέγμα-Όλυμπος™ · Olympus-Grid™**
React + Vite SPA with build-time SSG pre-rendering, deployed to S3 + CloudFront under the [Iris Deployment](../iris/docs/IRIS_MVP_ARCHITECTURE.md) MVP architecture.

---

## Stack

- React 18 + React Router 6
- Vite 5 (client build + SSR build for pre-rendering)
- react-helmet-async (SEO meta tags per page)
- Custom prerender script (`scripts/prerender.js`) — uses Vite SSR build + `renderToString` + `StaticRouter` to emit per-route static HTML. No headless browser, no puppeteer.
- AWS S3 + CloudFront delivery (Iris Deployment MVP — see ADR + IRIS_MVP_ARCHITECTURE.md)

---

## Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Home | Full landing — mark, narrative, pantheon, AppExchange, Cosmos-Logos, TurtleShell proof |
| `/about` | About | Company story, founding quote, org structure |
| `/references` | Use Cases | Industry deployments — financial, healthcare, analytics, marketing, legal, TurtleShell |
| `/security` | Security | CISO FAQ — architecture, identity, compliance, LLM safety |
| `/privacy` | Privacy | Privacy policy — data sovereignty model, GDPR/CCPA |
| `/terms` | Terms | Terms of service — trademarks, billing, IP |

---

## Development

```bash
npm install
npm run dev
```

## Build + Pre-render

```bash
npm run build
# Runs three steps in sequence:
#   1. vite build                                          → client bundle in dist/
#   2. vite build --ssr src/entry-server.jsx --outDir dist-ssr  → SSR bundle
#   3. node scripts/prerender.js                            → per-route HTML in dist/
#
# Output: dist/index.html, dist/about/index.html, dist/security/index.html, ...
# Each contains the fully-rendered page body inside <div id="root"> with
# per-route <title>, <meta name="description">, OG tags, etc. (driven by
# react-helmet-async). Crawlers see real content; React hydrates in the
# browser for interactive features.
```

For staged builds (debugging):

```bash
npm run build:client     # just vite build
npm run build:ssr        # just vite build --ssr
npm run build:prerender  # just node scripts/prerender.js (requires the two above)
```

## Deploy

```bash
# Configure once:
#   Edit og.config.js and fill in aws.bucketName, aws.distributionId, aws.distributionDomain
#   (placeholders are <<TBD>> until Track A provisions S3 + CloudFront)

npm run deploy:dry-run   # build + preview the aws CLI commands without executing
npm run deploy           # build + s3 sync + CloudFront invalidate
```

The deploy script (`scripts/deploy.js`) reads `og.config.js`, validates that no AWS placeholders remain, then runs:
1. `aws s3 sync dist/ s3://{bucket}/{deploymentName}/ --include "assets/*" --cache-control "max-age=31536000, immutable"` — hashed assets first, long-lived cache
2. `aws s3 sync dist/ s3://{bucket}/{deploymentName}/ --exclude "assets/*" --cache-control "max-age=3600"` — HTML and short-lived files second
3. `aws cloudfront create-invalidation --paths "/" "/index.html" "/*/index.html" "/llms*.txt" "/sitemap.xml" "/robots.txt"`

Hashed asset URLs are self-cache-busting; only HTML and sitemap-class files need invalidation.

---

## SEO Architecture

- `index.html` — global structured data (Organization + SoftwareApplication JSON-LD)
- Per-page `<Helmet>` via react-helmet-async — unique title, description, canonical, og:*, twitter:*
- `public/sitemap.xml` — all 6 routes, lastmod, priority
- `public/robots.txt` — Allow all, Sitemap reference
- react-snap pre-renders all 6 routes to static HTML at build time — crawlers see full content
- Keyword-rich content naturally incorporates: Olympus-Grid, πλέγμα-Όλυμπος, PLEGMA-OLYMPUS, sovereign AI, enterprise AI infrastructure, Olympus-616, Salesforce AI, CloudPremise, TurtleShell

---

## Trademark Notices

All pages and the footer carry:

> Olympus-Grid™, πλέγμα-Όλυμπος™, and PLEGMA-OLYMPUS™ are trademarks of CloudPremise LLC. Trademark applications pending.

The Terms of Service page explicitly establishes commercial use of all three marks.

---

## Environment

No environment variables required for the marketing site.  
The site links to `https://app.olympus-grid.com` for the app login.

---

## File Structure

```
olympus-grid-site/
├── index.html                    # Root HTML + global SEO + JSON-LD
├── vite.config.js
├── package.json
├── public/
│   ├── favicon.svg               # Metatron mark favicon
│   ├── robots.txt
│   ├── sitemap.xml
│   └── _redirects                # Netlify SPA routing
└── src/
    ├── main.jsx                  # React root + react-snap hydration
    ├── App.jsx                   # Router
    ├── styles/
    │   └── global.css            # Design tokens + shared styles
    ├── components/
    │   ├── Nav.jsx               # Fixed nav with scroll behavior
    │   ├── Footer.jsx            # Full footer with trademark notices
    │   ├── SEO.jsx               # Per-page Helmet wrapper
    │   └── MetatronMark.jsx      # SVG Metatron's Cube mark component
    └── pages/
        ├── Home.jsx              # Full landing page
        ├── About.jsx             # Company/story page
        ├── References.jsx        # Use cases / deployments
        ├── Security.jsx          # CISO FAQ
        ├── Legal.jsx             # Privacy + Terms (shared component)
        ├── Privacy.jsx           # Re-export
        └── Terms.jsx             # Re-export
```
