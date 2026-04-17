# olympus-grid.com — Marketing Site

**πλέγμα-Όλυμπος™ · Olympus-Grid™**  
React + Vite SPA with SSG pre-rendering via react-snap.

---

## Stack

- React 18 + React Router 6
- Vite 5
- react-helmet-async (SEO meta tags per page)
- react-snap (post-build HTML pre-rendering for SEO crawlers)
- Netlify deployment (_redirects for SPA routing)

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
# react-snap runs automatically via postbuild
# Generates pre-rendered HTML for /, /about, /references, /security, /privacy, /terms
```

## Deploy to Netlify

1. Connect the repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`
4. The `public/_redirects` file handles SPA routing

**Or drag-and-drop the `dist/` folder to Netlify Drop.**

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
