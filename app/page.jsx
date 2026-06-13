import pmwiseIcon from './pmwise_icon_color.png'

export const metadata = {
  title: 'PMWise.AI - Guaranteed Traceable Benefit Realisation',
  description: 'Identify and deliver your highest-impact opportunities',
}

export default function Home() {
  return (
    <>
      <header className="border-b border-brand-dark/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <span className="flex items-center gap-2 text-2xl font-bold text-brand-dark">
            <img src={pmwiseIcon.src} alt="" width={32} height={32} className="h-8 w-8" />
            PMWISE.AI
          </span>
          <a
            href="mailto:info@pmwise.ai"
            className="inline-flex min-h-[44px] items-center px-2 font-medium text-brand-700 underline-offset-4 hover:underline"
          >
            Contact
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-6 py-24 text-center">
          <img
            src={pmwiseIcon.src}
            alt=""
            width={96}
            height={96}
            className="mx-auto mb-6 h-24 w-24"
          />
          <h1 className="mb-4 text-5xl font-bold text-brand-dark">PMWISE.AI</h1>
          <p className="mb-12 text-2xl font-semibold text-brand-dark">
            Guaranteed Traceable Benefit Realisation
          </p>

          <div className="mx-auto mb-12 max-w-3xl space-y-4 text-left text-lg leading-relaxed text-brand-dark">
            <p>
              Despite 70 years of modern project management practice, 70% of projects still
              fail—a multi-trillion-dollar loss annually.
            </p>
            <p>
              The root cause: Projects measure scope, budget, and timeline. They ignore why the
              project exists in the first place.
            </p>
            <p>
              <strong>PMWISE.AI inverts this.</strong> We place your project&apos;s purpose—the
              benefit you&apos;re trying to realise—at the centre of everything. Using AI-powered
              analysis, we help you identify your highest-impact opportunities, then deliver
              real-time, fully traceable benefit realisation throughout execution.
            </p>
            <p>
              The difference is stark: Most project managers avoid high-risk areas because they
              believe there&apos;s little to gain. We know the opposite is true. The Stoics had it
              right: <em>&ldquo;The obstacle is the way.&rdquo;</em> Your greatest opportunities
              hide in the problems you&apos;d rather avoid.
            </p>
          </div>

          <div className="mx-auto mb-12 max-w-3xl rounded-lg bg-brand-100 p-8 text-left">
            <h2 className="mb-6 text-xl font-bold text-brand-dark">What We Do</h2>
            <ol className="list-decimal space-y-4 pl-6 text-brand-dark">
              <li>Identify your most impactful opportunities (the risks others avoid)</li>
              <li>Define them precisely using our SMAAART framework</li>
              <li>Invert them into concrete, measurable benefits</li>
              <li>
                Execute with full traceability—every decision auditable, every outcome proven
              </li>
            </ol>
            <p className="mt-6 font-semibold text-brand-dark">
              The result: Projects that deliver what they promised.
            </p>
          </div>

          <div>
            <p className="mb-6 text-lg text-brand-dark">
              Early adopters in ANZ and APAC are already using PMWISE.AI.
            </p>
            <p className="mb-8 text-xl font-semibold text-brand-dark">
              Join the movement. Get early access:
            </p>
            <a
              href="mailto:info@pmwise.ai"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-brand-700 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-brand-800"
            >
              Get early access
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-brand-dark/10 bg-brand-100/40 py-8 text-center text-brand-dark">
        <p>&copy; 2026 PMWISE.AI. All rights reserved.</p>
        <p className="mt-2 text-sm">
          <a
            href="mailto:info@pmwise.ai"
            className="text-brand-700 underline-offset-4 hover:underline"
          >
            info@pmwise.ai
          </a>
        </p>
      </footer>
    </>
  )
}
