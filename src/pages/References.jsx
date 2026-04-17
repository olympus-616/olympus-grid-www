import React from 'react'
import SEO from '../components/SEO'

const CASES = [
  {
    sector: 'Financial Services',
    emoji: '🏦',
    title: 'Sovereign Financial Intelligence Portal',
    description: 'Custom Olympus-Grid deployment for a regional financial institution. Athena routes compliance queries across internal document stores, regulatory databases, and market data feeds — all within a sovereign infrastructure that never leaves the institution\'s control.',
    capabilities: ['Document intelligence across regulatory filings', 'Real-time compliance query routing', 'Audit-trail ledger for every AI interaction', 'Salesforce CRM integration via Proteus ORM'],
    status: 'deployed',
  },
  {
    sector: 'Healthcare',
    emoji: '🏥',
    title: 'Healthcare Intelligence & Patient Navigation',
    description: 'HIPAA-aligned sovereign AI deployment for patient communication, clinical documentation assistance, and care pathway navigation. All data remains on-premises. Athena routes provider queries to specialized medical knowledge agents without exposing PHI to third-party LLM APIs.',
    capabilities: ['On-premises LLM routing via Ollama', 'PHI-safe patient communication layer', 'Clinical documentation agent (Iris embedded)', 'Zero third-party data egress architecture'],
    status: 'deployed',
  },
  {
    sector: 'Social Media & Analytics',
    emoji: '📊',
    title: 'Social Intelligence & Trend Analytics Platform',
    description: 'Real-time social signal intelligence built on Olympus-Grid. Poseidon MCP tools connect to social APIs, Athena synthesizes multi-source trend data, and the Iris portal surfaces insight dashboards to enterprise marketing teams — all on sovereign infrastructure.',
    capabilities: ['Multi-platform social signal aggregation', 'Real-time trend synthesis via Athena', 'Custom analytics dashboard via Iris Portal', 'Salesforce Marketing Cloud integration'],
    status: 'deployed',
  },
  {
    sector: 'Marketing Analytics',
    emoji: '📈',
    title: 'Marketing Attribution & Campaign Intelligence',
    description: 'Enterprise marketing analytics mesh for a Fortune 500 brand. The Olympus-Grid connects campaign data, attribution models, and customer journey signals into a single Athena-routed intelligence layer — replacing six disconnected point solutions.',
    capabilities: ['Multi-touch attribution modeling', 'Campaign performance synthesis', 'Customer journey intelligence via Athena', 'Salesforce Pardot / Marketing Cloud bridge'],
    status: 'reference',
  },
  {
    sector: 'Legal & Compliance',
    emoji: '⚖️',
    title: 'Contract Intelligence & Compliance Monitoring',
    description: 'Sovereign contract review and compliance monitoring for an enterprise legal team. Document ingestion, clause extraction, regulatory change monitoring, and risk flagging — all routed through Athena with zero data leaving the sovereign perimeter.',
    capabilities: ['Contract clause extraction and tagging', 'Regulatory change monitoring agents', 'Risk scoring with full audit trail in Salesforce', 'Matter management integration via Proteus'],
    status: 'reference',
  },
  {
    sector: 'TurtleShell.ai',
    emoji: '🐢',
    title: 'Global Consumer Sovereign AI — TurtleShell.ai',
    description: 'The flagship proof of concept. TurtleShell.ai is a globally-scaled, enterprise-certified sovereign AI assistant built entirely on Olympus-Grid. iOS app, web app, and Salesforce embedded viewer — all powered by the same 31-agent mesh available to every enterprise customer.',
    capabilities: ['31-agent Olympus-616 mesh', 'Apple Sign In + Stripe payments live', 'iOS App Store · Web · Salesforce Iris Portal', 'Off-grid fleet launching 7/17/2026'],
    status: 'live',
    link: 'https://turtleshell.ai',
  },
]

const statusStyle = {
  live:      { bg:'rgba(30,58,110,0.06)',  border:'rgba(30,58,110,0.15)',  color:'#2E5DAA', label:'Live' },
  deployed:  { bg:'rgba(61,219,132,0.1)', border:'rgba(61,219,132,0.25)', color:'#3DDB84', label:'Deployed' },
  reference: { bg:'rgba(212,168,67,0.1)', border:'rgba(212,168,67,0.25)', color:'#B8922E', label:'Reference' },
}

export default function References() {
  return (
    <div className="content">
      <SEO
        title="Use Cases"
        description="Olympus-Grid enterprise deployments across financial services, healthcare, social analytics, marketing, and legal. Sovereign AI infrastructure at scale."
        path="/references"
      />

      <section className="section" style={{ paddingTop:'9rem' }}>
        <div className="sec-head center">
          <span className="eyebrow">Use Cases at Scale</span>
          <h2>Sovereign AI Deployed<br/>Across Industries</h2>
          <p className="sec-desc">
            Olympus-Grid powers sovereign AI infrastructure across financial services, healthcare,
            analytics, and more. Every deployment shares the same architecture — your data stays yours.
          </p>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.5rem' }}>
          {CASES.map(c => {
            const s = statusStyle[c.status]
            return (
              <div key={c.title} style={{
                background:'rgba(247,248,250,0.95)', border:'1px solid rgba(30,58,110,0.10)',
                borderRadius:3, padding:'2.5rem',
                ...(c.status === 'live' ? { borderColor:'rgba(30,58,110,0.20)' } : {}),
              }}>
                <div style={{ display:'flex', justifyContent:'space-between',
                              alignItems:'flex-start', marginBottom:'1.25rem' }}>
                  <div>
                    <div style={{ fontSize:'0.7rem', letterSpacing:'0.2em',
                                  textTransform:'uppercase', color:'rgba(55,60,78,0.55)',
                                  fontWeight:300, marginBottom:'0.4rem' }}>{c.emoji} {c.sector}</div>
                    <h3 style={{ fontFamily:'Cinzel,serif', fontSize:'1.05rem', fontWeight:600,
                                 color:'#1E3A6E', letterSpacing:'0.04em', lineHeight:1.3 }}>{c.title}</h3>
                  </div>
                  <div style={{ fontSize:'0.62rem', fontWeight:700, letterSpacing:'0.15em',
                                textTransform:'uppercase', padding:'0.25rem 0.75rem',
                                borderRadius:2, whiteSpace:'nowrap', marginLeft:'1rem',
                                background:s.bg, border:`1px solid ${s.border}`, color:s.color }}>
                    {s.label}
                  </div>
                </div>

                <p style={{ fontSize:'0.88rem', color:'rgba(107,112,133,0.8)',
                            fontWeight:300, lineHeight:1.8, marginBottom:'1.5rem' }}>
                  {c.description}
                </p>

                <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:'0.4rem' }}>
                  {c.capabilities.map(cap => (
                    <li key={cap} style={{ display:'flex', gap:'0.6rem', alignItems:'flex-start',
                                          fontSize:'0.82rem', color:'rgba(55,60,78,0.65)',
                                          fontWeight:300 }}>
                      <span style={{ color:'#2E5DAA', flexShrink:0, marginTop:'0.15rem' }}>—</span>
                      {cap}
                    </li>
                  ))}
                </ul>

                {c.link && (
                  <a href={c.link} target="_blank" rel="noopener noreferrer"
                     style={{ display:'inline-block', marginTop:'1.5rem',
                              color:'#2E5DAA', fontSize:'0.82rem',
                              fontWeight:500, letterSpacing:'0.08em',
                              textTransform:'uppercase' }}>
                    Visit TurtleShell.ai →
                  </a>
                )}
              </div>
            )
          })}
        </div>

        <div style={{
          marginTop:'4rem', background:'rgba(30,58,110,0.06)',
          border:'1px solid rgba(184,146,46,0.15)', borderRadius:3, padding:'3rem',
          textAlign:'center',
        }}>
          <span className="eyebrow gold" style={{ display:'block', marginBottom:'1rem' }}>Build on Olympus-Grid</span>
          <h3 style={{ fontFamily:'Cinzel,serif', fontSize:'1.6rem', fontWeight:600,
                       marginBottom:'1rem', letterSpacing:'0.04em' }}>
            Your Industry. Your Sovereign Grid.
          </h3>
          <p style={{ color:'rgba(55,60,78,0.70)', fontWeight:300, maxWidth:520,
                      margin:'0 auto 2rem', lineHeight:1.85, fontSize:'0.98rem' }}>
            Olympus-Grid is infrastructure. Any application can be built on it.
            Contact us to discuss a deployment for your organization.
          </p>
          <a href="https://app.olympus-grid.com" className="btn btn-primary">Log In →</a>
        </div>
      </section>
    </div>
  )
}
