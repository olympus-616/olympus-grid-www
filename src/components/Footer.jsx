import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(30,58,110,0.10)',
      background: '#0E1535',
      color: 'rgba(240,244,248,0.85)',
      position: 'relative', zIndex: 1,
    }}>
      {/* TOP ROW */}
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '3rem 4rem 2rem',
        display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: '3rem',
      }}>
        {/* BRAND */}
        <div>
          <div style={{ fontFamily:'Cinzel,serif', fontSize:'1.1rem', color:'#B8922E',
                        letterSpacing:'0.06em', marginBottom:'0.4rem' }}>
            πλέγμα-Όλυμπος™
          </div>
          <div style={{ fontFamily:'Jost,sans-serif', fontSize:'0.7rem',
                        letterSpacing:'0.2em', color:'rgba(200,210,230,0.50)',
                        textTransform:'uppercase', marginBottom:'1rem' }}>
            Olympus-Grid™
          </div>
          <p style={{ fontSize:'0.85rem', color:'rgba(200,210,230,0.65)',
                      fontWeight:300, lineHeight:1.7, maxWidth:240 }}>
            Sovereign enterprise AI infrastructure. Your grid. Your rules.
          </p>
          <p style={{ fontSize:'0.72rem', color:'rgba(200,210,230,0.45)',
                      fontWeight:300, marginTop:'1rem', lineHeight:1.6 }}>
            © {new Date().getFullYear()} CloudPremise LLC<br/>
            Olympus-Grid™, πλέγμα-Όλυμπος™, and<br/>
            PLEGMA-OLYMPUS™ are trademarks of<br/>
            CloudPremise LLC. All rights reserved.
          </p>
        </div>

        {/* PLATFORM */}
        <div>
          <div style={{ fontFamily:'Cinzel,serif', fontSize:'0.65rem',
                        letterSpacing:'0.25em', textTransform:'uppercase',
                        color:'rgba(200,210,230,0.60)', marginBottom:'1rem' }}>Platform</div>
          {[
            { label: 'Log In', href: 'https://app.olympus-grid.com', external: true },
            { label: 'TurtleShell.ai', href: 'https://turtleshell.ai', external: true },
            { label: 'AppExchange', href: 'https://appexchange.salesforce.com/appxListingDetail?listingId=aadbbe80-2d4e-42bc-84bd-348ade18a00a', external: true },
            { label: 'Use Cases', to: '/references' },
            { label: 'About', to: '/about' },
          ].map(l => (
            <div key={l.label} style={{ marginBottom:'0.5rem' }}>
              {l.external
                ? <a href={l.href} target="_blank" rel="noopener noreferrer"
                     style={{ fontSize:'0.85rem', color:'rgba(200,210,230,0.70)',
                              fontWeight:300, transition:'color 0.2s' }}
                     onMouseEnter={e=>e.target.style.color='#7BA3E0'}
                     onMouseLeave={e=>e.target.style.color='rgba(200,210,230,0.70)'}>{l.label}</a>
                : <Link to={l.to} style={{ fontSize:'0.85rem', color:'rgba(200,210,230,0.70)', fontWeight:300 }}>{l.label}</Link>
              }
            </div>
          ))}
        </div>

        {/* LEGAL */}
        <div>
          <div style={{ fontFamily:'Cinzel,serif', fontSize:'0.65rem',
                        letterSpacing:'0.25em', textTransform:'uppercase',
                        color:'rgba(200,210,230,0.60)', marginBottom:'1rem' }}>Legal</div>
          {[
            { label: 'Terms of Service', to: '/terms' },
            { label: 'Privacy Policy', to: '/privacy' },
            { label: 'Security', to: '/security' },
          ].map(l => (
            <div key={l.label} style={{ marginBottom:'0.5rem' }}>
              <Link to={l.to} style={{ fontSize:'0.85rem', color:'rgba(200,210,230,0.70)', fontWeight:300 }}>{l.label}</Link>
            </div>
          ))}
        </div>

        {/* COMMUNITY */}
        <div>
          <div style={{ fontFamily:'Cinzel,serif', fontSize:'0.65rem',
                        letterSpacing:'0.25em', textTransform:'uppercase',
                        color:'rgba(212,168,67,0.6)', marginBottom:'1rem' }}>Community</div>
          {[
            { label: 'Investor Portal', href: 'https://investors.olympus-foundation.org', external: true },
            { label: 'Olympus Foundation', href: 'https://github.com/olympus-616/olympus-foundation', external: true },
            { label: 'Cosmos-Logos', href: 'https://github.com/cosmos-logos', external: true },
          ].map(l => (
            <div key={l.label} style={{ marginBottom:'0.5rem' }}>
              <a href={l.href} target="_blank" rel="noopener noreferrer"
                 style={{ fontSize:'0.85rem', color:'rgba(200,210,230,0.70)', fontWeight:300 }}>{l.label}</a>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div style={{
        maxWidth:1200, margin:'0 auto', padding:'1.25rem 4rem',
        borderTop:'1px solid rgba(30,58,110,0.08)',
        display:'flex', justifyContent:'space-between', alignItems:'center',
        flexWrap:'wrap', gap:'1rem',
      }}>
        <p style={{ fontSize:'0.72rem', color:'rgba(200,210,230,0.45)', fontWeight:300 }}>
          Olympus-Grid™, πλέγμα-Όλυμπος™, PLEGMA-OLYMPUS™ — Trademark applications pending.
          Built on Salesforce AppExchange. Powered by Olympus-616.
        </p>
        <span style={{ fontFamily:'Cinzel,serif', fontSize:'0.82rem',
                       color:'rgba(212,168,67,0.3)' }}>Γένοιτο</span>
      </div>

      <style>{`
        @media(max-width:860px){
          footer > div:first-child { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; padding: 2.5rem 1.5rem 1.5rem !important; }
          footer > div:last-child { padding: 1rem 1.5rem !important; flex-direction: column !important; gap: 0.5rem !important; }
        }
      `}</style>
    </footer>
  )
}
