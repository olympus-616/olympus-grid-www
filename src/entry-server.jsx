// entry-server.jsx
//
// Server-side entry for build-time pre-rendering. Vite's SSR build
// (`vite build --ssr src/entry-server.jsx`) compiles this into a Node-
// runnable ESM bundle that scripts/prerender.js imports and calls per
// route.
//
// Mirrors src/main.jsx (the client entry) but uses StaticRouter +
// renderToString so each route can be rendered to HTML at build time.
// Crawlers (Googlebot, ClaudeBot, etc.) see the rendered output; real
// users see the same HTML and then React hydrates from src/main.jsx in
// the browser, taking over for interactive features.

import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'

/**
 * Render a single route to HTML and harvest helmet-driven head tags.
 *
 * @param {string} url - Route path to render (e.g. '/', '/about').
 * @returns {{ html: string, helmet: object }}
 *   html — innerHTML for the <div id="root"> placeholder
 *   helmet — react-helmet-async context with title/meta/link/script tags
 *           that the prerender script injects into <head>
 */
export function render(url) {
  const helmetContext = {}
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  )
  return { html, helmet: helmetContext.helmet }
}
