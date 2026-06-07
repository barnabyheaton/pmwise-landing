import pmwiseIcon from './pmwise_icon_color.png'

export const metadata = {
  title: 'PMWise.AI - Guaranteed Traceable Benefit Realisation',
}

export default function Home() {
  return (
    <html>
      <body style={{ fontFamily: 'system-ui', margin: 0, padding: 0, background: 'white', color: '#1f2937' }}>
        <nav style={{ borderBottom: '1px solid #e5e7eb', padding: '1rem 0' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#58cc03' }}>PMWISE.AI</div>
            <a href="mailto:info@pmwise.ai" style={{ color: '#374151', textDecoration: 'none' }}>Contact</a>
          </div>
        </nav>

        <section style={{ maxWidth: '1280px', margin: '0 auto', paddingLeft: '1.5rem', paddingRight: '1.5rem', paddingTop: '6rem', paddingBottom: '6rem', textAlign: 'center' }}>
          <img src={pmwiseIcon.src} alt="PMWISE.AI logo" width={96} height={96} style={{ display: 'block', margin: '0 auto 1.5rem', width: '96px', height: '96px' }} />
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', color: '#111827', marginBottom: '1rem' }}>PMWISE.AI</h1>
          <h2 style={{ fontSize: '24px', color: '#4b5563', marginBottom: '3rem', fontWeight: '600' }}>Guaranteed Traceable Benefit Realisation</h2>
          
          <div style={{ maxWidth: '768px', margin: '0 auto', textAlign: 'left', marginBottom: '3rem', lineHeight: '1.75' }}>
            <p style={{ color: '#374151' }}>Despite 70 years of modern project management practice, 70% of projects still fail—a multi-trillion-dollar loss annually.</p>
            <p style={{ color: '#374151' }}>The root cause: Projects measure scope, budget, and timeline. They ignore why the project exists in the first place.</p>
            <p style={{ color: '#374151' }}><strong>PMWISE.AI inverts this.</strong> We place your project's purpose—the benefit you're trying to realise—at the centre of everything. Using AI-powered analysis, we help you identify your highest-impact opportunities, then deliver real-time, fully traceable benefit realisation throughout execution.</p>
            <p style={{ color: '#374151' }}>The difference is stark: Most project managers avoid high-risk areas because they believe there's little to gain. We know the opposite is true. The Stoics had it right: <em>"The obstacle is the way."</em> Your greatest opportunities hide in the problems you'd rather avoid.</p>
          </div>

          <div style={{ background: '#f0fdf4', borderRadius: '8px', padding: '2rem', marginBottom: '3rem', maxWidth: '768px', margin: '0 auto 3rem', textAlign: 'left' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827', marginBottom: '1.5rem' }}>What We Do</h3>
            <ol style={{ margin: 0, paddingLeft: '1.5rem' }}>
              <li style={{ marginBottom: '1rem', color: '#374151' }}>Identify your most impactful opportunities (the risks others avoid)</li>
              <li style={{ marginBottom: '1rem', color: '#374151' }}>Define them precisely using our SMAAART framework</li>
              <li style={{ marginBottom: '1rem', color: '#374151' }}>Invert them into concrete, measurable benefits</li>
              <li style={{ color: '#374151' }}>Execute with full traceability—every decision auditable, every outcome proven</li>
            </ol>
            <p style={{ color: '#111827', fontWeight: '600', marginTop: '1.5rem' }}>The result: Projects that deliver what they promised.</p>
          </div>

          <div style={{ marginBottom: '3rem' }}>
            <p style={{ fontSize: '18px', color: '#374151', marginBottom: '1.5rem' }}>Early adopters in ANZ and APAC are already using PMWISE.AI.</p>
            <p style={{ fontSize: '20px', fontWeight: '600', color: '#111827', marginBottom: '2rem' }}>Join the movement. Get early access:</p>
            <p style={{ color: '#6b7280' }}>Email: <a href="mailto:info@pmwise.ai" style={{ color: '#58cc03', fontWeight: '600', textDecoration: 'none' }}>info@pmwise.ai</a></p>
          </div>
        </section>

        <footer style={{ borderTop: '1px solid #e5e7eb', background: '#f9fafb', paddingTop: '2rem', paddingBottom: '2rem', textAlign: 'center', color: '#4b5563' }}>
          <p>© 2026 PMWISE.AI. All rights reserved.</p>
          <p style={{ fontSize: '14px', marginTop: '0.5rem' }}>
            <a href="mailto:info@pmwise.ai" style={{ color: '#58cc03', textDecoration: 'none' }}>info@pmwise.ai</a>
          </p>
        </footer>
      </body>
    </html>
  )
}
