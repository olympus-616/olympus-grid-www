import React from 'react'
import { Helmet } from 'react-helmet-async'

export default function SEO({ title, description, path = '' }) {
  const fullTitle = title
    ? `${title} | Olympus-Grid πλέγμα-Όλυμπος™`
    : 'Olympus-Grid | πλέγμα-Όλυμπος™ — Sovereign Enterprise AI Infrastructure'
  const url = `https://www.olympus-grid.com${path}`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
