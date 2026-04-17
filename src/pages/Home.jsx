import React from 'react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

const AGENTS = [
  { emoji:'🧠', name:'Athena LLM',       role:'Multi-LLM router. Selects the optimal model per request across OpenAI, Claude, Gemini, Grok, and Ollama.' },
  { emoji:'🌊', name:'Poseidon MCP',     role:'MCP integration layer. Connects enterprise tools via namespaced, credential-sealed tool calls.' },
  { emoji:'⚡', name:'Hermes API',       role:'CORS proxy and API gateway. JWT entitlements, path-based routing, and inter-service auth.' },
  { emoji:'🔮', name:'Iris Portal',         role:'Universal portal framework. The enterprise UI surface deployed to Salesforce Experience Cloud.' },
  { emoji:'🛡',  name:'Oracle IdP', role:'Identity provider. Identity__c on Salesforce is the canonical anchor for the entire grid.' },
  { emoji:'🔗', name:'Proteus ORM',      role:'Salesforce, AWS Dynamo, Azure Cosmos, Google Firestore, and more. Your data — secure and accessible.' },
  { emoji:'🐚', name:'Plutus G/L',       role:'Transactional metering service. Tracks every turn, database read, memory write, and tool call. End to end visibility.' },
  { emoji:'🌐', name:'Cosmos-Logos', role:'Open agent discovery and verification protocol. Sealed-envelope identity handshake for every agent call.' },
]

const STACK = [
  { label:'Salesforce', sub:'Managed Package · AppExchange Certified', royal:true },
  { label:'AWS Fargate', sub:'Pantheon Container Fleet · ECS Deploy', royal:true },
  { label:'Off-Grid Fleet', sub:'Mac Mini · Raspberry Pi 5 · Custom ARM', royal:true },
  { label:'Azure', sub:'Enterprise Hybrid Deployment', royal:false },
]

export default function Home() {
  return (
    <div className="content">
      <SEO
        description="Olympus-Grid (πλέγμα-Όλυμπος) is the sovereign enterprise AI infrastructure platform. Deploy the 31-agent Olympus-616 mesh on Salesforce, AWS, or your own off-grid fleet."
        path="/"
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section style={{
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        textAlign: 'center',
        padding: '9rem 2rem 5rem',
        position: 'relative', overflow: 'hidden',
      }}>
        {/* orbs */}
        {[
          { w:700, h:700, bg:'rgba(30,58,110,0.04)', top:'-250px', left:'-200px' },
          { w:600, h:600, bg:'rgba(212,168,67,0.04)', bottom:'10%', right:'-180px' },
        ].map((o, i) => (
          <div key={i} style={{
            position:'absolute', borderRadius:'50%', filter:'blur(120px)',
            pointerEvents:'none', zIndex:0,
            width:o.w, height:o.h, background:o.bg,
            top:o.top, left:o.left, bottom:o.bottom, right:o.right,
          }}/>
        ))}

        <div style={{ position:'relative', zIndex:1, maxWidth:900 }}>
          {/* GREEK NAME */}
          <div style={{ marginBottom:'0.4rem' }}>
            <h1 style={{
              fontFamily:'Cinzel,serif', fontSize:'clamp(2rem,5vw,3.8rem)',
              fontWeight:600, letterSpacing:'0.04em', color:'#B8922E',
              lineHeight:1.1,
            }}>
              πλέγμα-Όλυμπος<sup style={{ fontSize:'0.4em', verticalAlign:'super', opacity:0.7 }}>™</sup>
            </h1>
            <h2 style={{
              fontFamily:'Cinzel,serif', fontSize:'clamp(0.9rem,2vw,1.3rem)',
              fontWeight:400, letterSpacing:'0.35em',
              color:'rgba(55,60,78,0.60)', textTransform:'uppercase',
              marginTop:'0.4rem',
            }}>
              Olympus-Grid<sup style={{ fontSize:'0.5em', verticalAlign:'super', opacity:0.6 }}>™</sup>
            </h2>
          </div>

          <div style={{ height:'1px', background:'linear-gradient(90deg,transparent,rgba(212,168,67,0.3),transparent)', margin:'2rem auto', maxWidth:400 }}/>

          <p style={{
            fontSize:'clamp(1rem,2vw,1.2rem)', color:'rgba(107,112,133,0.8)',
            fontWeight:300, lineHeight:1.85, maxWidth:640, margin:'0 auto 2.5rem',
          }}>
            The globally sustainable, enterprise certified, off-grid capable
            AI infrastructure platform. Run your application
            on our agent mesh on Salesforce and AWS. Run your AI off-grid on your own
            local nodes. Design and deploy your own sovereign fleet.
            Your apps, your data, your grid, your rules.
          </p>

          <div style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap' }}>
            <a href="https://app.olympus-grid.com" className="btn btn-primary">
              Log In →
            </a>
            <Link to="/references" className="btn btn-outline">
              See Use Cases
            </Link>
            <a href="https://turtleshell.ai" target="_blank" rel="noopener noreferrer"
               className="btn btn-gold">
              TurtleShell.ai ↗
            </a>
          </div>

          {/* trademark notice */}
          <p style={{ marginTop:'2.5rem', fontSize:'0.7rem',
                      color:'rgba(55,60,78,0.40)', letterSpacing:'0.06em' }}>
            Olympus-Grid™ · πλέγμα-Όλυμπος™ · PLEGMA-OLYMPUS™ — Trademark applications pending.
            © {new Date().getFullYear()} CloudPremise LLC
          </p>
        </div>
      </section>

      {/* ── NARRATIVE ────────────────────────────────────────── */}
      <div style={{ background:'#0E1535', color:'#F0F4F8' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'6rem 4rem' }}>
          <div className="divider" style={{ marginBottom:'3.5rem' }}><div className="divider-g">⬡</div></div>
          <div style={{ textAlign:'center', marginBottom:'3.5rem' }}>
            <span style={{ fontFamily:'Cinzel,serif', fontSize:'0.68rem', letterSpacing:'0.35em',
                           textTransform:'uppercase', color:'#7BA3E0', display:'block', marginBottom:'0.85rem' }}>
              The Architecture
            </span>
            <h2 style={{ fontFamily:'Cinzel,serif', fontSize:'clamp(1.6rem,2.8vw,2.6rem)',
                         fontWeight:600, lineHeight:1.2, marginBottom:'1rem', color:'#F0F4F8' }}>
              Three Layers. One Sovereign Stack.
            </h2>
            <p style={{ color:'rgba(200,210,230,0.65)', maxWidth:620, margin:'0 auto',
                        fontWeight:300, fontSize:'1rem', lineHeight:1.85 }}>
              Olympus-Grid is infrastructure. Olympus-616 is the sovereign AI operating system
              that runs on it. TurtleShell.ai is proof that a globally-scaled application
              can be built on top in weeks — not years.
            </p>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1.5rem' }}>
            {[
              {
                emoji:'🏛', color:'#B8922E', border:'rgba(184,146,46,0.30)',
                title:'Olympus-Grid',
                sub:'The Infrastructure Layer',
                body:`The enterprise-grade platform that every sovereign AI instance runs on. Salesforce-backed, AWS-deployable, off-grid capable. The grid provides Identity, Metering, Ledger, Agent Mesh, and Tenant isolation. Certified on the Salesforce AppExchange.`,
              },
              {
                emoji:'⚙️', color:'#7BA3E0', border:'rgba(74,122,219,0.30)',
                title:'Olympus-616',
                sub:'The Sovereign AI Instance',
                body:`The primary sovereign deployment of the 31-agent mesh named for the Greek pantheon. Any organization can stand up their own Olympus-616 instance. Athena routes your LLM calls. Poseidon connects your tools. Proteus owns your data layer. You own everything.`,
              },
              {
                emoji:'🐢', color:'#5DC98A', border:'rgba(93,201,138,0.25)',
                title:'TurtleShell.ai',
                sub:'The Example Application',
                body:`Built entirely on Olympus-Grid. A globally-scaled sovereign AI assistant — iOS app, web app, Salesforce embedded viewer — all powered by the same grid. TurtleShell.ai proves that a world-class consumer AI product can be built and scaled on sovereign infrastructure.`,
              },
            ].map(c => (
              <div key={c.title} style={{
                background:'rgba(14,24,64,0.6)', border:`1px solid ${c.border}`,
                borderRadius:3, padding:'2.5rem 2rem',
              }}>
                <div style={{ fontSize:'2rem', marginBottom:'1.25rem' }}>{c.emoji}</div>
                <h3 style={{ fontFamily:'Cinzel,serif', fontSize:'1.1rem', fontWeight:600,
                             color:c.color, marginBottom:'0.3rem', letterSpacing:'0.06em' }}>{c.title}</h3>
                <p style={{ fontSize:'0.72rem', color:'rgba(200,210,230,0.45)',
                            textTransform:'uppercase', letterSpacing:'0.15em',
                            marginBottom:'1rem', fontWeight:300 }}>{c.sub}</p>
                <p style={{ fontSize:'0.9rem', color:'rgba(200,210,230,0.65)',
                            fontWeight:300, lineHeight:1.8 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── PANTHEON ─────────────────────────────────────────── */}
      <div className="section-alt">
        <div className="section-alt-inner">
          <div className="sec-head center">
            <span className="eyebrow">The Pantheon</span>
            <h2>31 Agents. One Mesh.</h2>
            <p className="sec-desc">
              Every service in Olympus-616 is named for a Greek deity and owns a sovereign domain.
              Together they form a complete AI operating system.
            </p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'1rem' }}>
            {AGENTS.map(a => (
              <div key={a.name} className="card" style={{ padding:'1.5rem', textAlign:'center' }}>
                <div style={{ fontSize:'1.5rem', marginBottom:'0.9rem' }}>{a.emoji}</div>
                <div style={{ fontFamily:'Cinzel,serif', fontSize:'0.78rem',
                              letterSpacing:'0.12em', textTransform:'uppercase',
                              color:'#2E5DAA', marginBottom:'0.5rem' }}>{a.name}</div>
                <p style={{ fontSize:'0.8rem', color:'rgba(55,60,78,0.70)',
                            fontWeight:300, lineHeight:1.6 }}>{a.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── APPEXCHANGE + MESH VISUAL ────────────────────────── */}
      <div style={{ background:'#0E1535', color:'#F0F4F8' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', padding:'6rem 4rem' }}>
          <div style={{ textAlign:'center', marginBottom:'3.5rem' }}>
            <span style={{ fontFamily:'Cinzel,serif', fontSize:'0.68rem', letterSpacing:'0.35em',
                           textTransform:'uppercase', color:'#B8922E', display:'block', marginBottom:'0.85rem' }}>
              Olympus-Grid
            </span>
            <h2 style={{ fontFamily:'Cinzel,serif', fontSize:'clamp(1.6rem,2.8vw,2.6rem)',
                         fontWeight:600, lineHeight:1.2, marginBottom:'1rem', color:'#F0F4F8' }}>
              Enterprise-Grade Sovereign AI.<br/>
              <span style={{ color:'#B8922E' }}>Certified on Salesforce AppExchange.</span>
            </h2>
            <p style={{ color:'rgba(200,210,230,0.70)', fontWeight:300, fontSize:'1rem',
                        lineHeight:1.85, maxWidth:620, margin:'0 auto' }}>
              Salesforce is the reliable infrastructure that maintains Grid SLA.
              Olympus-Grid brings sovereign AI into the enterprise — running within
              your own walls, on your own rules.
            </p>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'center' }}>
            {/* Concentric circles mesh diagram */}
            <div style={{ position:'relative', height:360 }}>
              <style>{`
                @keyframes og-pulse {
                  0% { opacity:1; transform:translate(-50%,-50%) scale(0.8); }
                  100% { opacity:0; transform:translate(-50%,-50%) scale(1); }
                }
              `}</style>
              {[80,160,260].map((s,i) => (
                <div key={i} style={{
                  position:'absolute', left:'50%', top:'50%',
                  transform:'translate(-50%,-50%)',
                  width:s, height:s, borderRadius:'50%',
                  border:'1px solid rgba(74,122,219,0.18)',
                  animation:`og-pulse 3s ease-out ${i}s infinite`,
                }}/>
              ))}
              <div style={{
                position:'absolute', left:'50%', top:'50%', transform:'translate(-50%,-50%)',
                border:'1px solid rgba(74,122,219,0.6)', background:'rgba(74,122,219,0.12)',
                borderRadius:3, padding:'1rem 1.5rem', textAlign:'center', whiteSpace:'nowrap',
                fontFamily:'Cinzel,serif', fontSize:'0.82rem', letterSpacing:'0.12em',
                textTransform:'uppercase', color:'#F0F4F8',
              }}>
                Olympus-616<br/>
                <span style={{ fontSize:'0.6rem', color:'rgba(140,170,220,0.7)', letterSpacing:'0.1em' }}>31-Agent Mesh</span>
              </div>
              {[
                { label:'Athena · LLM', top:'8%', left:'5%' },
                { label:'Hermes · API', top:'8%', right:'5%' },
                { label:'Proteus · ORM', bottom:'8%', left:'5%' },
                { label:'Iris · Portal', bottom:'8%', right:'5%' },
              ].map(n => (
                <div key={n.label} style={{
                  position:'absolute', ...n,
                  border:'1px solid rgba(74,122,219,0.20)', borderRadius:3,
                  padding:'0.6rem 1rem', fontFamily:'Cinzel,serif', fontSize:'0.65rem',
                  letterSpacing:'0.15em', textTransform:'uppercase', color:'#7BA3E0',
                  background:'rgba(74,122,219,0.05)', whiteSpace:'nowrap',
                }}>{n.label}</div>
              ))}
              {[
                { label:'Poseidon · MCP', top:'50%', left:'0%', transform:'translateY(-50%)' },
                { label:'Oracle · Identity', top:'50%', right:'0%', transform:'translateY(-50%)' },
              ].map(n => (
                <div key={n.label} style={{
                  position:'absolute', top:n.top, left:n.left, right:n.right, transform:n.transform,
                  border:'1px solid rgba(184,146,46,0.30)', borderRadius:3,
                  padding:'0.6rem 1rem', fontFamily:'Cinzel,serif', fontSize:'0.65rem',
                  letterSpacing:'0.15em', textTransform:'uppercase', color:'#B8922E',
                  background:'rgba(184,146,46,0.05)', whiteSpace:'nowrap',
                }}>{n.label}</div>
              ))}
            </div>

            {/* Text */}
            <div>
              <h3 style={{ fontFamily:'Cinzel,serif', fontSize:'1.8rem', fontWeight:600,
                           marginBottom:'1rem', letterSpacing:'0.04em', color:'#F0F4F8' }}>
                The Grid SLA.
              </h3>
              <p style={{ color:'rgba(200,210,230,0.65)', fontWeight:300, fontSize:'1rem',
                          lineHeight:1.8, marginBottom:'1rem' }}>
                Olympus-Grid is a <strong style={{ color:'#F0F4F8', fontWeight:500 }}>31-agent sovereign mesh</strong> named
                for the Greek pantheon — each agent a specialist, each conversation sovereign.
                Athena routes your prompt to the best available model. Poseidon connects your
                enterprise tools via MCP. Proteus bridges Salesforce to AWS. Iris surfaces the
                interface anywhere.
              </p>
              <p style={{ color:'rgba(200,210,230,0.65)', fontWeight:300, fontSize:'1rem',
                          lineHeight:1.8, marginBottom:'1.5rem' }}>
                The enterprise layer is <strong style={{ color:'#F0F4F8', fontWeight:500 }}>live on the Salesforce AppExchange</strong>.
                Olympus-Grid delivers the reliability guarantees your enterprise requires — with
                the sovereignty your users deserve.
              </p>
              <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
                <a href="https://appexchange.salesforce.com/appxListingDetail?listingId=aadbbe80-2d4e-42bc-84bd-348ade18a00a"
                   target="_blank" rel="noopener noreferrer"
                   style={{
                     display:'inline-flex', alignItems:'center', gap:'0.75rem',
                     border:'1px solid rgba(184,146,46,0.30)', borderRadius:3,
                     padding:'0.75rem 1.25rem', color:'#B8922E', fontSize:'0.82rem',
                     fontWeight:500, letterSpacing:'0.08em', textTransform:'uppercase',
                     transition:'background 0.2s', textDecoration:'none',
                   }}>
                  <span style={{ width:8, height:8, borderRadius:'50%', background:'#B8922E' }}/>
                  View on AppExchange
                </a>
                <a href="mailto:hello@olympus-grid.com" className="btn btn-outline"
                   style={{ borderColor:'rgba(200,210,230,0.2)', color:'rgba(200,210,230,0.8)' }}>
                  Enterprise Inquiry
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── COSMOS-LOGOS ─────────────────────────────────────── */}
      <div className="section-alt">
        <div className="section-alt-inner">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'4rem', alignItems:'center' }}>
            <div>
              <span className="eyebrow">Open Protocol</span>
              <h2 style={{ fontFamily:'Cinzel,serif', fontSize:'clamp(1.6rem,2.5vw,2.4rem)',
                           fontWeight:600, lineHeight:1.2, marginBottom:'1rem' }}>
                Cosmos-Logos.<br/>Agent Discovery for the Open Grid.
              </h2>
              <p style={{ color:'rgba(107,112,133,0.8)', fontWeight:300, lineHeight:1.85,
                          marginBottom:'1rem', fontSize:'0.98rem' }}>
                Cosmos-Logos is the <strong style={{ color:'#1E3A6E', fontWeight:500 }}>open-source sovereign agent discovery protocol</strong> at
                the heart of Olympus-Grid. Any agent can live anywhere and be found — without
                a central registry, without vendor lock-in.
              </p>
              <p style={{ color:'rgba(107,112,133,0.8)', fontWeight:300,
                          lineHeight:1.85, marginBottom:'1.5rem', fontSize:'0.98rem' }}>
                Every agent handshake uses Ed25519/X25519 sealed-envelope cryptography.
                Sovereignty is not a configuration option — it is the protocol itself.
              </p>
              <a href="https://github.com/cosmos-logos" target="_blank" rel="noopener noreferrer"
                 className="btn btn-outline">
                Open Source on GitHub ↗
              </a>
            </div>
            <div style={{
              background:'rgba(6,9,26,0.8)', border:'1px solid rgba(74,122,219,0.18)',
              borderRadius:3, padding:'2rem', fontFamily:'monospace', fontSize:'0.82rem',
              color:'rgba(74,122,219,0.8)', lineHeight:2,
            }}>
              <div style={{ color:'rgba(212,168,67,0.7)', marginBottom:'0.5rem' }}># Cosmos-Logos Agent Registration</div>
              <div><span style={{ color:'rgba(55,60,78,0.60)' }}>agent:</span> Athena</div>
              <div><span style={{ color:'rgba(55,60,78,0.60)' }}>location:</span> aws.fargate.us-east-1</div>
              <div><span style={{ color:'rgba(55,60,78,0.60)' }}>identity:</span> Ed25519 sealed</div>
              <div><span style={{ color:'rgba(55,60,78,0.60)' }}>discovery:</span> sovereign-mesh</div>
              <div><span style={{ color:'rgba(55,60,78,0.60)' }}>trust:</span> verified ✓</div>
              <div style={{ marginTop:'0.5rem', color:'rgba(212,168,67,0.7)' }}># Any agent. Any location.</div>
              <div style={{ color:'rgba(55,60,78,0.60)' }}># No central registry required.</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── TURTLESHELL PROOF ────────────────────────────────── */}
      <section className="section">
        <div className="sec-head center">
          <span className="eyebrow">Proof of Concept</span>
          <h2>TurtleShell.ai —<br/>Built Entirely on Olympus-Grid.</h2>
          <p className="sec-desc">
            We eat our own cooking. TurtleShell.ai is a globally-scaled, enterprise-certified
            sovereign AI assistant built from scratch on the same Olympus-Grid infrastructure
            available to every customer.
          </p>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:'1.25rem' }}>
          {[
            { label:'Apple, Google, Microsoft, and Email Login', sub:'Your Identity, Your Trusted Providers', status:'live' },
            { label:'Stripe, Apple IAP, Google Play', sub:'Fully metered and auditable transactions', status:'live' },
            { label:'Salesforce as Truth', sub:'SLAs, Reliability, Trust. Full Audit Trail.', status:'live' },
            { label:'iOS, Android, Web', sub:'Any surface', status:'live' },
            { label:'Agent Memory', sub:'Normalized, Cache, and Vector Solutions', status:'live' },
            { label:'Turtle Cave Off-Grid', sub:'Mac Mini · Pi 5 · Solar fleet', status:'7/17' },
          ].map(f => (
            <div key={f.label} style={{
              background:'rgba(247,248,250,0.90)', border:'1px solid rgba(30,58,110,0.10)',
              borderRadius:3, padding:'1.5rem',
              display:'flex', alignItems:'center', gap:'1rem',
            }}>
              <div style={{ flex:1 }}>
                <div style={{ fontSize:'0.9rem', fontWeight:500, color:'#1E3A6E' }}>{f.label}</div>
                <div style={{ fontSize:'0.78rem', color:'rgba(55,60,78,0.65)', fontWeight:300 }}>{f.sub}</div>
              </div>
              <div style={{
                fontSize:'0.62rem', fontWeight:700, letterSpacing:'0.15em', textTransform:'uppercase',
                padding:'0.2rem 0.6rem', borderRadius:2,
                background: f.status === 'live' ? 'rgba(30,58,110,0.06)' : 'rgba(212,168,67,0.1)',
                border: `1px solid ${f.status === 'live' ? 'rgba(30,58,110,0.15)' : 'rgba(212,168,67,0.25)'}`,
                color: f.status === 'live' ? '#2E5DAA' : '#B8922E',
              }}>
                {f.status === 'live' ? 'Live' : f.status}
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign:'center', marginTop:'2.5rem' }}>
          <a href="https://turtleshell.ai" target="_blank" rel="noopener noreferrer"
             className="btn btn-outline">
            Visit TurtleShell.ai ↗
          </a>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <div style={{
        background:'#0E1535', borderTop:'1px solid rgba(30,58,110,0.15)',
        borderBottom:'1px solid rgba(30,58,110,0.15)',
        padding:'6rem 4rem', textAlign:'center', position:'relative', overflow:'hidden',
      }}>
        <div style={{
          position:'absolute', top:'50%', left:'50%',
          transform:'translate(-50%,-50%)',
          width:600, height:300, borderRadius:'50%',
          background:'radial-gradient(ellipse, rgba(74,122,219,0.08) 0%, transparent 70%)',
          pointerEvents:'none',
        }}/>
        <div style={{ position:'relative', zIndex:1 }}>
          <span style={{ fontFamily:'Cinzel,serif', fontSize:'0.68rem', letterSpacing:'0.35em',
                         textTransform:'uppercase', color:'rgba(140,170,220,0.7)',
                         display:'block', marginBottom:'1rem' }}>
            Enterprise Inquiry
          </span>
          <h2 style={{ fontFamily:'Cinzel,serif', fontSize:'clamp(1.8rem,3.5vw,3rem)',
                       fontWeight:600, letterSpacing:'0.03em', lineHeight:1.2,
                       marginBottom:'1.25rem', color:'#F0F4F8' }}>
            Deploy Your Sovereign Grid
          </h2>
          <p style={{ color:'rgba(200,210,230,0.75)', fontSize:'1rem', fontWeight:300,
                      maxWidth:500, margin:'0 auto 2.5rem', lineHeight:1.85 }}>
            Ready to bring sovereign AI infrastructure to your organization?
            Launch the portal to get started or contact us for enterprise deployment.
          </p>
          <div style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap' }}>
            <a href="https://app.olympus-grid.com" className="btn btn-primary">Log In →</a>
            <a href="https://turtleshell.ai/waitlist" target="_blank" rel="noopener noreferrer"
               className="btn btn-gold">Enterprise Inquiry</a>
            <a href="https://investors.olympus-foundation.org" target="_blank" rel="noopener noreferrer"
               className="btn btn-outline">Investor Portal</a>
          </div>
        </div>
      </div>
    </div>
  )
}
