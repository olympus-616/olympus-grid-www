import React from 'react'
import SEO from '../components/SEO'

function LegalPage({ title, seoTitle, path, children }) {
  return (
    <div className="content">
      <SEO title={seoTitle} description={`Olympus-Grid ${seoTitle} — πλέγμα-Όλυμπος™ by CloudPremise LLC.`} path={path} />
      <section className="section" style={{ paddingTop:'9rem', maxWidth:860 }}>
        <span className="eyebrow">Legal</span>
        <h1 style={{ fontFamily:'Cinzel,serif', fontSize:'clamp(1.8rem,3vw,2.5rem)',
                     fontWeight:600, lineHeight:1.2, marginBottom:'0.75rem' }}>{title}</h1>
        <p style={{ fontSize:'0.8rem', color:'rgba(55,60,78,0.50)', fontWeight:300,
                    marginBottom:'3rem' }}>
          Olympus-Grid™ · πλέγμα-Όλυμπος™ · CloudPremise LLC · Last updated April 2026
        </p>
        <div style={{ display:'flex', flexDirection:'column', gap:'2.5rem' }}>
          {children}
        </div>
      </section>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div>
      <h2 style={{ fontFamily:'Cinzel,serif', fontSize:'1rem', fontWeight:600,
                   color:'#2E5DAA', letterSpacing:'0.1em', textTransform:'uppercase',
                   marginBottom:'1rem', paddingBottom:'0.5rem',
                   borderBottom:'1px solid rgba(30,58,110,0.10)' }}>{title}</h2>
      <div style={{ fontSize:'0.92rem', color:'rgba(107,112,133,0.8)',
                    fontWeight:300, lineHeight:1.9 }}>{children}</div>
    </div>
  )
}

function P({ children }) {
  return <p style={{ marginBottom:'0.85rem' }}>{children}</p>
}

export function Privacy() {
  return (
    <LegalPage title="Privacy Policy" seoTitle="Privacy Policy" path="/privacy">
      <Section title="Overview">
        <P>CloudPremise LLC ("CloudPremise", "we", "us") operates Olympus-Grid (πλέγμα-Όλυμπος™) and TurtleShell.ai. This Privacy Policy describes how we collect, use, and protect your information when you use our platform.</P>
        <P>Olympus-Grid is a sovereign AI infrastructure platform. By design, your data lives in your Salesforce org and your infrastructure — not ours. This policy covers the limited data that does flow through CloudPremise-operated services.</P>
      </Section>
      <Section title="What We Collect">
        <P><strong style={{ color:'#1E3A6E', fontWeight:500 }}>Account information:</strong> When you create an account, we collect your email address and, if you use Apple Sign In, your Apple Subject ID. We store this in a Salesforce Identity__c record in your grid's Salesforce org.</P>
        <P><strong style={{ color:'#1E3A6E', fontWeight:500 }}>Billing information:</strong> Stripe processes all payment information. CloudPremise receives a Stripe Customer ID and subscription status. We do not store full card numbers or banking details.</P>
        <P><strong style={{ color:'#1E3A6E', fontWeight:500 }}>Usage telemetry:</strong> Plutus records shell metering events (chat requests, tool calls, asset generation) to LedgerEntry__c in your Salesforce org. These records are yours — CloudPremise uses aggregate, anonymized telemetry for platform health monitoring only.</P>
        <P><strong style={{ color:'#1E3A6E', fontWeight:500 }}>Conversation data:</strong> We do not collect or store your conversation content. Conversations are stored by Mnemosyne in your sovereign storage backend (your Salesforce org or your local node). LLM API calls are routed to your configured provider under your API key.</P>
      </Section>
      <Section title="How We Use Your Information">
        <P>We use your information to: provide and operate the Olympus-Grid platform; process billing and subscription management; send product communications (waitlist confirmation, approval, billing notifications); provide customer support; and monitor platform health and security.</P>
        <P>We do not sell your personal information. We do not use your data to train AI models. We do not share your data with third parties except as described in this policy (Stripe for billing, your configured LLM provider for AI routing under your API key).</P>
      </Section>
      <Section title="Data Sovereignty">
        <P>Olympus-Grid is built on the principle that your data is yours. Identity, conversations, memory, and ledger records live in your Salesforce org. CloudPremise operates the software layer; we do not have access to your grid data unless you explicitly grant support access.</P>
        <P>Off-grid deployments (Turtle Cave) operate entirely on your hardware. No data leaves your local network unless you configure external LLM providers or cloud sync.</P>
      </Section>
      <Section title="Cookies & Authentication">
        <P>Olympus-Grid uses httpOnly, Secure, SameSite cookies (prefixed __Host-*) for session authentication. These cookies cannot be read by JavaScript and are never transmitted over non-HTTPS connections. We do not use tracking cookies, advertising cookies, or third-party analytics cookies.</P>
      </Section>
      <Section title="Your Rights">
        <P>You may request deletion of your account and all associated data at any time by contacting privacy@olympus-grid.com. We will delete your Identity__c record and associated profile, conversation, and memory data within 30 days. Billing records may be retained as required by law.</P>
        <P>GDPR-resident users may additionally request data export, correction, or restriction of processing. CCPA-resident users may request disclosure of data collected and opt out of any sale (we do not sell data).</P>
      </Section>
      <Section title="Contact">
        <P>For privacy inquiries: <a href="mailto:privacy@olympus-grid.com" style={{ color:'#2E5DAA' }}>privacy@olympus-grid.com</a>. CloudPremise LLC, Colorado, United States.</P>
      </Section>
    </LegalPage>
  )
}

export function Terms() {
  return (
    <LegalPage title="Terms of Service" seoTitle="Terms of Service" path="/terms">
      <Section title="Acceptance">
        <P>By accessing or using Olympus-Grid (πλέγμα-Όλυμπος™) or TurtleShell.ai, you agree to these Terms of Service. If you do not agree, do not use the platform. These terms apply to all users, including enterprise customers, developers, and end users.</P>
      </Section>
      <Section title="The Platform">
        <P>Olympus-Grid is a sovereign enterprise AI infrastructure platform operated by CloudPremise LLC. The platform includes the Olympus-616 agent mesh, Iris Portal Framework, Cosmos-Logos protocol, TurtleShell.ai consumer application, and associated services.</P>
        <P><strong style={{ color:'#1E3A6E', fontWeight:500 }}>Olympus-Grid™, πλέγμα-Όλυμπος™, and PLEGMA-OLYMPUS™</strong> are trademarks of CloudPremise LLC. Trademark applications are pending. Unauthorized use of these marks is prohibited.</P>
      </Section>
      <Section title="Permitted Use">
        <P>You may use Olympus-Grid for lawful purposes consistent with these terms. You may not: use the platform to generate illegal content; attempt to bypass shell balance enforcement or authentication; reverse engineer, decompile, or extract proprietary components; resell or sublicense the platform without a written enterprise agreement; or use the platform to harm, harass, or deceive others.</P>
      </Section>
      <Section title="Metering & Billing">
        <P>Olympus-Grid is a fully metered platform. Every billable event — LLM turn, tool call, memory operation, database read, API request — is tracked, ledgered, and auditable end to end. Metering provides transactional insight into each layer of the system, enabling precise cost attribution, usage analytics, and capacity planning across the entire agent mesh.</P>
        <P>Subscription tiers and metering allocations are defined by the application built on the grid. Metering balances are non-refundable except as required by law. The Olympus Foundation tithe (7% of all platform transactions) is non-negotiable and applies to all paid tiers. Tithe funds are distributed to verified 501(c) charity partners by the Olympus Foundation.</P>
      </Section>
      <Section title="Intellectual Property">
        <P>CloudPremise LLC retains all rights to the Olympus-Grid platform, Olympus-616 agent mesh, Iris Portal Framework, and associated proprietary software. The Cosmos-Logos protocol and certain infrastructure components are licensed under AGPL. See the GitHub repository for open-source component licensing.</P>
      </Section>
      <Section title="Disclaimer & Limitation of Liability">
        <P>Olympus-Grid is provided "as-is" without warranty of any kind. CloudPremise LLC is not liable for any indirect, incidental, or consequential damages arising from your use of the platform. Our total liability shall not exceed the amounts paid by you in the 12 months preceding the claim.</P>
        <P>AI outputs are not professional advice. Do not rely on AI-generated content for medical, legal, financial, or safety-critical decisions without independent verification.</P>
      </Section>
      <Section title="Governing Law">
        <P>These terms are governed by the laws of the State of Colorado, United States, without regard to conflict of law principles. Disputes shall be resolved in the state or federal courts of Colorado.</P>
      </Section>
      <Section title="Contact">
        <P>For legal inquiries: <a href="mailto:legal@olympus-grid.com" style={{ color:'#2E5DAA' }}>legal@olympus-grid.com</a>. CloudPremise LLC, Colorado, United States.</P>
      </Section>
    </LegalPage>
  )
}
