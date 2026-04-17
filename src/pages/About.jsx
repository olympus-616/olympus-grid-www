import React from 'react'
import SEO from '../components/SEO'

export default function About() {
  return (
    <div className="content">
      <SEO
        title="About"
        description="Olympus-Grid — πλέγμα-Όλυμπος — the sovereign enterprise AI infrastructure platform. The Grid of Olympus."
        path="/about"
      />
      <section className="section" style={{ paddingTop:'9rem' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'5rem', alignItems:'start' }}>
          <div>
            <span className="eyebrow">About</span>
            <h1 style={{ fontFamily:'Cinzel,serif', fontSize:'clamp(1.8rem,3vw,2.8rem)',
                         fontWeight:600, lineHeight:1.2, marginBottom:'1.5rem' }}>
              The Grid of Olympus
            </h1>
            <p style={{ color:'rgba(107,112,133,0.8)', fontWeight:300, lineHeight:1.9,
                        marginBottom:'1rem', fontSize:'1rem' }}>
              <strong style={{ color:'#1E3A6E', fontWeight:500 }}>Olympus-Grid</strong> —
              πλέγμα-Όλυμπος™ — is the sovereign enterprise AI infrastructure platform.
            </p>
            <p style={{ color:'rgba(107,112,133,0.8)', fontWeight:300, lineHeight:1.9,
                        marginBottom:'1rem', fontSize:'1rem' }}>
              The name comes from the Greek: <em style={{ color:'#B8922E' }}>πλέγμα</em> (grid, mesh, weave)
              and <em style={{ color:'#B8922E' }}>Όλυμπος</em> (Olympus, the seat of the gods).
              The Grid of Olympus. A sovereign mesh of intelligence, named for the place
              where the immortals governed from above — but built to run in your hands,
              on your hardware, under your control.
            </p>
            <p style={{ color:'rgba(107,112,133,0.8)', fontWeight:300, lineHeight:1.9,
                        marginBottom:'1rem', fontSize:'1rem' }}>
              The 31-agent service mesh — the Pantheon — is named for the Greek gods.
              Each agent owns a domain. Each speaks to the others through Cosmos-Logos,
              the open sovereign discovery protocol. Together they form a complete AI
              operating system that runs anywhere.
            </p>
            <p style={{ color:'rgba(107,112,133,0.8)', fontWeight:300, lineHeight:1.9,
                        fontSize:'1rem' }}>
              <strong style={{ color:'#1E3A6E', fontWeight:500 }}>TurtleShell.ai</strong> is
              the first application built on Olympus-Grid — a globally-scaled, enterprise-certified
              sovereign AI assistant that proves the infrastructure works at every level of the stack.
              It comes online to select users on <strong style={{ color:'#2E5DAA', fontWeight:500 }}>July 17, 2026</strong>.
            </p>

            <div style={{ marginTop:'2.5rem', display:'flex', gap:'1rem', flexWrap:'wrap' }}>
              <a href="https://app.olympus-grid.com" className="btn btn-primary">Log In →</a>
              <a href="https://investors.olympus-foundation.org" target="_blank"
                 rel="noopener noreferrer" className="btn btn-gold">Investor Portal</a>
            </div>
          </div>

          <div style={{ display:'flex', flexDirection:'column', gap:'1.5rem' }}>
            {[
              { label:'Olympus-616', sub:'Primary sovereign instance · 31-agent mesh' },
              { label:'Cosmos-Logos', sub:'Open-source agent discovery protocol' },
              { label:'Olympus Foundation', sub:'Non-profit · Tithe management · Open source stewardship' },
              { label:'TurtleShell.ai', sub:'Flagship application · iOS · Web · Off-Grid' },
            ].map(r => (
              <div key={r.label} style={{
                background:'rgba(247,248,250,0.95)', border:'1px solid rgba(30,58,110,0.10)',
                borderRadius:3, padding:'1.25rem 1.5rem',
                display:'flex', alignItems:'center', gap:'1rem',
              }}>
                <div style={{ width:6, height:6, borderRadius:'50%', background:'#2E5DAA', flexShrink:0 }}/>
                <div>
                  <div style={{ fontSize:'0.9rem', fontWeight:500, color:'#1E3A6E' }}>{r.label}</div>
                  <div style={{ fontSize:'0.78rem', color:'rgba(55,60,78,0.60)', fontWeight:300 }}>{r.sub}</div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </div>
  )
}
