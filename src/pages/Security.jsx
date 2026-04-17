import React from 'react'
import SEO from '../components/SEO'

const SECTIONS = [
  {
    title: 'Architecture & Sovereignty',
    items: [
      { q: 'What does "sovereign AI" mean?', a: 'Sovereign AI means your data, your models, your infrastructure. Olympus-Grid is designed so no data leaves your sovereign perimeter without explicit configuration. The grid runs on your Salesforce org, your AWS account, or your own physical hardware. No shared compute, no shared storage, no shared identity.' },
      { q: 'How is Olympus-Grid deployed?', a: 'Three deployment models: (1) Salesforce managed package + AWS Fargate Pantheon container fleet, (2) Hybrid cloud with your existing AWS infrastructure, (3) Fully off-grid on a fleet of Mac Minis or Raspberry Pi 5 nodes. All three models use the same Olympus-616 agent mesh. Azure and GCP (Google Cloud Platform) deployments are available upon request.' },
      { q: 'Who has access to my data?', a: 'Nobody but you. Identity, conversations, memory, and ledger records live in your Salesforce org and your AWS account — never on shared infrastructure. Olympus-616 is the managed agent configuration operated by CloudPremise LLC under enterprise-grade controls: SOC 2 Type II certification in progress, annual penetration testing, encrypted at rest and in transit, and zero standing access to customer data. We operate the software layer. You own the data layer. The two never cross without your explicit consent.' },
    ],
  },
  {
    title: 'Identity & Authentication',
    items: [
      { q: 'How does authentication work?', a: 'Olympus-Grid supports Apple Sign In (SIWA), email magic-link, and enterprise SSO. All authentication tokens are stored in httpOnly __Host-* cookies — never in localStorage or sessionStorage. Tokens are never logged or transmitted outside your sovereign perimeter.' },
      { q: 'What is Identity__c?', a: 'Identity__c is the canonical Salesforce SObject that anchors every user in the grid. Email, Apple Subject ID, OAuth tokens, and all linked identities are stored on a single Identity__c record per user. There is no external identity database — Salesforce is the source of truth.' },
      { q: 'How does Cosmos-Logos handle agent identity?', a: 'Cosmos-Logos uses Ed25519 signing and X25519 key exchange for sealed-envelope inter-agent communication. Every agent call is signed. Every response is verified. There is no unauthenticated agent-to-agent communication on the grid.' },
    ],
  },
  {
    title: 'Data & Privacy',
    items: [
      { q: 'Where is conversation data stored?', a: 'Conversation history is stored in Mnemosyne — the sovereign memory layer. In the default configuration, conversations are stored as files on your sovereign node, indexed in Salesforce Conversation__c records. You can configure alternative storage backends via Proteus.' },
      { q: 'Is my data used to train models?', a: 'No. Olympus-Grid does not use your data to train any model. LLM calls are routed via Athena to your configured provider (OpenAI, Anthropic, Gemini, Grok, or your local Ollama instance). Your data flows to your chosen provider under your own API key. CloudPremise has no visibility into these calls.' },
      { q: 'What data does CloudPremise collect?', a: 'CloudPremise collects billing data (via Stripe), product usage telemetry (shell metering events via Plutus), and support communications. We do not collect conversation content, uploaded files, or agent outputs. The LedgerEntry__c audit trail lives in your Salesforce org.' },
    ],
  },
  {
    title: 'Compliance & Certifications',
    items: [
      { q: 'What compliance frameworks does Olympus-Grid support?', a: 'Olympus-Grid is designed for deployment in regulated industries. The Salesforce-backed architecture inherits Salesforce\'s SOC 2 Type II, ISO 27001, HIPAA BAA, GDPR, and CCPA compliance postures. Off-grid deployments require customer-managed compliance controls.' },
      { q: 'Is Olympus-Grid HIPAA-compliant?', a: 'Olympus-Grid can be deployed in a HIPAA-aligned configuration using on-premises Ollama LLM routing (no PHI leaves your perimeter) and Salesforce as the data store (BAA available from Salesforce). CloudPremise can execute a BAA for grid operations. Contact us for enterprise compliance discussions.' },
      { q: 'What is the AppExchange security review status?', a: 'The Olympus-Grid managed package is listed on the Salesforce AppExchange. Salesforce AppExchange packages undergo security review by Salesforce\'s security team before listing. See the AppExchange listing for current certification status.' },
    ],
  },
  {
    title: 'LLM & AI Safety',
    items: [
      { q: 'Which LLMs does Olympus-Grid support?', a: 'Athena routes to any configured LLM provider: OpenAI (GPT-4o, o1), Anthropic (Claude), Google (Gemini), xAI (Grok), and local Ollama models. You configure your own API keys. CloudPremise never holds your LLM provider credentials.' },
      { q: 'How is shell balance enforced?', a: 'Shell balance is enforced server-side by Ares before any chat request is forwarded to Athena. Client-side balance checks are supplementary. Ares validates balance against Plutus on every request — a depleted balance cannot be bypassed by modifying client state.' },
      { q: 'What happens if the grid goes offline?', a: 'Olympus-Grid is designed for graceful degradation. The off-grid Turtle Cave fleet operates independently of cloud connectivity. Athena fails gracefully with a user-facing error when all configured LLM providers are unreachable. No data is lost during outages.' },
    ],
  },
]

export default function Security() {
  return (
    <div className="content">
      <SEO
        title="Security"
        description="Olympus-Grid security architecture, sovereign data model, compliance posture, and trust framework. Enterprise-grade security for sovereign AI infrastructure."
        path="/security"
      />
      <section className="section" style={{ paddingTop:'9rem' }}>
        <div className="sec-head">
          <span className="eyebrow">Security & Trust</span>
          <h1 style={{ fontFamily:'Cinzel,serif', fontSize:'clamp(1.8rem,3vw,2.8rem)',
                       fontWeight:600, lineHeight:1.2, marginBottom:'0.75rem' }}>
            Security Architecture
          </h1>
          <p className="sec-desc">
            Sovereign AI means your security posture is yours. This document covers
            the Olympus-Grid architecture, identity model, data handling, compliance posture,
            and trust framework for CISOs, CIOs, and security architects.
          </p>
        </div>

        <div style={{ display:'flex', flexDirection:'column', gap:'3rem' }}>
          {SECTIONS.map(s => (
            <div key={s.title}>
              <h2 style={{ fontFamily:'Cinzel,serif', fontSize:'1.1rem', fontWeight:600,
                           color:'#2E5DAA', letterSpacing:'0.08em', textTransform:'uppercase',
                           marginBottom:'1.5rem', paddingBottom:'0.75rem',
                           borderBottom:'1px solid rgba(30,58,110,0.10)' }}>
                {s.title}
              </h2>
              <div style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}>
                {s.items.map(item => (
                  <div key={item.q} style={{
                    background:'rgba(247,248,250,0.90)', border:'1px solid rgba(30,58,110,0.10)',
                    borderRadius:3, padding:'1.5rem 2rem',
                  }}>
                    <h3 style={{ fontSize:'0.95rem', fontWeight:500, color:'#1E3A6E',
                                 marginBottom:'0.6rem' }}>{item.q}</h3>
                    <p style={{ fontSize:'0.9rem', color:'rgba(107,112,133,0.8)',
                                fontWeight:300, lineHeight:1.8 }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop:'4rem', background:'rgba(30,58,110,0.06)',
          border:'1px solid rgba(184,146,46,0.15)', borderRadius:3, padding:'2.5rem',
          textAlign:'center',
        }}>
          <p style={{ fontSize:'0.85rem', color:'rgba(55,60,78,0.60)', fontWeight:300,
                      lineHeight:1.8, maxWidth:600, margin:'0 auto' }}>
            For security disclosures, enterprise compliance discussions, or to report a vulnerability,
            contact <a href="mailto:security@olympus-grid.com"
                       style={{ color:'#2E5DAA' }}>security@olympus-grid.com</a>.
            Olympus-Grid is provided as-is under the AGPL license for open-source components.
            Enterprise licensing available.
          </p>
        </div>
      </section>
    </div>
  )
}
