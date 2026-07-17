import pmwiseIcon from '../pmwise_icon_color.png'

export const metadata = {
  title: 'Security at PMWISE.AI — our open Security Radar',
  description:
    'Our open, living register of how PMWISE.AI stays secure — what is live, what we are building, and where the gaps are. Published openly, gaps and all.',
}

const YOU_ITEMS = [
  ['Every document is private to your profile and isolated from every other client', 'Live'],
  ['Files are stored in private storage — no public, guessable links; downloads use short-lived signed links', 'Live'],
  ['Uploaded documents are scanned for malware and validated before they can be used or read by our AI', 'Live'],
  ['Data is encrypted in transit and at rest', 'Live'],
  ['Client-held encryption keys (BYOK) — so only you can unlock your document content', 'In design'],
  ['A confidential-computing enclave (TEE) so even we cannot read your documents during analysis', 'In design'],
  ['A tamper-evident log of every access to your content, visible to you', 'In design'],
  ['One-click export of everything you have put in, to take elsewhere', 'Planned'],
]

const PLATFORM_ITEMS = [
  ['Untrusted document content is treated as data, never instructions — it cannot hijack our AI', 'Live'],
  ['Secrets and keys are server-side only and never reach your browser', 'Live'],
  ['Database access is locked down and mediated only through our server', 'Live'],
  ['An ethics layer governs every AI action', 'Live'],
  ['Every code change is security-reviewed before it ships', 'In design'],
  ['Automated dependency, secret and configuration scanning', 'In design'],
  ['Sign-in with multi-factor authentication for team accounts', 'Planned'],
  ['A written incident-response plan and responsible-disclosure programme', 'Planned'],
]

function tagClasses(label) {
  if (label === 'Live') return 'bg-brand-50 text-brand-700'
  if (label === 'In design') return 'bg-brand-100 text-brand-800'
  return 'bg-brand-dark/5 text-brand-dark/70'
}

function Checklist({ items }) {
  return (
    <div>
      {items.map(([text, label]) => (
        <div
          key={text}
          className="grid grid-cols-[1fr_auto] items-baseline gap-4 border-b border-brand-dark/10 py-[18px]"
        >
          <p className="text-[17px] leading-[1.5] text-brand-dark">{text}</p>
          <span
            className={`flex-none whitespace-nowrap rounded-full px-3.5 py-1.5 font-display text-[12px] font-bold uppercase tracking-[0.06em] ${tagClasses(label)}`}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function Security() {
  return (
    <div className="overflow-x-hidden font-body text-brand-dark">
      <a
        href="#main"
        className="sr-only rounded-br-lg bg-brand-dark px-5 py-3 font-display font-semibold text-white focus:not-sr-only focus:absolute focus:left-0 focus:top-0 focus:z-[100]"
      >
        Skip to content
      </a>

      {/* ============ HEADER ============ */}
      <header className="sticky top-0 z-50 border-b border-brand-dark/10 bg-white/85 backdrop-blur-md backdrop-saturate-150">
        <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-4 px-6 py-3.5">
          <a href="/" className="flex items-center gap-2.5 text-brand-dark no-underline">
            <img src={pmwiseIcon.src} alt="" width={30} height={30} className="h-[30px] w-[30px]" />
            <span className="font-display text-xl font-bold tracking-tight">
              PMWISE<span className="text-brand-700">.AI</span>
            </span>
          </a>
          <nav aria-label="Primary" className="flex items-center gap-2">
            <a
              href="/"
              className="inline-flex min-h-[44px] items-center px-3.5 font-display text-[15px] font-medium text-brand-dark no-underline"
            >
              ← Back to PMWISE.AI
            </a>
            <a
              href="mailto:info@pmwise.ai?subject=Early%20access%20%E2%80%94%20PMWise"
              className="inline-flex min-h-[44px] items-center whitespace-nowrap rounded-full bg-brand-700 px-[18px] font-display text-[15px] font-semibold text-white transition-colors hover:bg-brand-800"
            >
              Speak to our founder
            </a>
          </nav>
        </div>
      </header>

      <main id="main">
        {/* ============ HERO ============ */}
        <section className="mx-auto max-w-[900px] px-6 pb-10 pt-[72px]">
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 font-display text-[13.5px] font-semibold tracking-wide text-brand-800">
            <span className="h-2 w-2 flex-none rounded-full bg-brand-600" aria-hidden="true" />
            Security Radar · Work in progress — published openly
          </div>
          <h1 className="max-w-[16ch] font-display text-[clamp(38px,6.5vw,64px)] font-bold leading-[1.02] tracking-[-0.03em] text-brand-dark [text-wrap:balance]">
            Security at PMWISE.AI
          </h1>
          <p className="mt-6 max-w-[56ch] text-[clamp(19px,2.1vw,23px)] leading-[1.55] text-brand-dark/80 [text-wrap:pretty]">
            Security is not a feature we bolted on — it is the first thing we designed. This page is
            our open, living register of what we do to stay secure. We publish it, gaps and all,
            because a promise you can examine is the only honest basis for trust. It is a work in
            progress and we will keep it current as we build.
          </p>
        </section>

        {/* ============ TWO LANES ============ */}
        <section className="mx-auto max-w-[900px] px-6 pb-6 pt-10">
          <p className="mb-8 max-w-[60ch] text-[18px] leading-[1.55] text-brand-dark/80 [text-wrap:pretty]">
            Everything we do falls into one of two lanes — or, for the strongest controls, both. We
            keep one list across both so nothing falls between the cracks.
          </p>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="rounded-[20px] border border-brand-200 bg-brand-50 p-8">
              <div className="mb-3.5 font-display text-[13px] font-bold uppercase tracking-[0.1em] text-brand-700">
                Protecting you
              </div>
              <p className="text-[16.5px] leading-[1.55] text-brand-dark">
                Your data is yours. We are built so we cannot read what we should not, cannot lose
                what we hold, and cannot let one client&rsquo;s world touch another&rsquo;s.
              </p>
            </div>
            <div className="rounded-[20px] bg-brand-dark p-8">
              <div className="mb-3.5 font-display text-[13px] font-bold uppercase tracking-[0.1em] text-brand-400">
                Protecting the platform
              </div>
              <p className="text-[16.5px] leading-[1.55] text-white/90">
                The service itself must not be the weak link — a problem in our systems must never
                become a problem for you.
              </p>
            </div>
          </div>
        </section>

        {/* ============ PROTECTING YOU ============ */}
        <section aria-labelledby="you-h" className="mx-auto max-w-[900px] px-6 pb-6 pt-[72px]">
          <h2
            id="you-h"
            className="mb-7 font-display text-[clamp(28px,3.8vw,38px)] font-bold leading-[1.1] tracking-[-0.02em] text-brand-dark"
          >
            Protecting you
          </h2>
          <Checklist items={YOU_ITEMS} />
        </section>

        {/* ============ PROTECTING THE PLATFORM ============ */}
        <section aria-labelledby="platform-h" className="mx-auto max-w-[900px] px-6 pb-6 pt-14">
          <h2
            id="platform-h"
            className="mb-7 font-display text-[clamp(28px,3.8vw,38px)] font-bold leading-[1.1] tracking-[-0.02em] text-brand-dark"
          >
            Protecting the platform
          </h2>
          <Checklist items={PLATFORM_ITEMS} />
        </section>

        {/* ============ CONTINUOUS ============ */}
        <section className="mx-auto max-w-[900px] px-6 pb-6 pt-[72px]">
          <div className="rounded-[22px] border border-brand-dark/10 bg-white p-10">
            <h2 className="mb-3.5 font-display text-[clamp(24px,3vw,30px)] font-bold tracking-tight text-brand-dark">
              Continuous, not one-time
            </h2>
            <p className="text-[17px] leading-[1.6] text-brand-dark/80 [text-wrap:pretty]">
              Being secure at launch means little; being <em className="italic">still</em> secure
              today is what counts. We are building automated checks that run continuously —
              confirming our controls still hold, and scanning for new kinds of threat to add to this
              list.{' '}
              <span className="ml-1.5 whitespace-nowrap rounded-full bg-brand-50 px-3.5 py-1.5 font-display text-[12px] font-bold uppercase tracking-[0.06em] text-brand-700">
                In design
              </span>
            </p>
          </div>
        </section>

        {/* ============ CERTIFICATION ============ */}
        <section className="mx-auto max-w-[900px] px-6 py-6">
          <div className="rounded-[22px] bg-brand-dark p-10">
            <h2 className="mb-3.5 font-display text-[clamp(24px,3vw,30px)] font-bold tracking-tight text-white">
              Certification when you need it
            </h2>
            <p className="text-[17px] leading-[1.6] text-white/85 [text-wrap:pretty]">
              We build to 80%+ of what IRAP, the Essential Eight and SOC 2 require by design, and
              keep the evidence ready. We take the final certifying step — independent penetration
              testing and formal audit — when an enterprise or government client requires it.{' '}
              <strong className="font-semibold text-brand-200">
                We are not certified yet, and we say so plainly.
              </strong>
            </p>
          </div>
        </section>

        {/* ============ TRANSPARENCY ============ */}
        <section className="mx-auto max-w-[900px] px-6 pb-24 pt-6">
          <div className="rounded-[22px] border border-brand-200 bg-brand-50 p-10">
            <h2 className="mb-3.5 font-display text-[clamp(24px,3vw,30px)] font-bold tracking-tight text-brand-dark">
              Radical transparency
            </h2>
            <p className="text-[17px] leading-[1.6] text-brand-dark [text-wrap:pretty]">
              We show what is live, what we are building, and where the gaps are — because pretending
              gaps do not exist is itself a security risk. If you are a security researcher and you
              find a flaw, we want to hear from you.
            </p>
            <p className="mt-4 text-[15px] leading-[1.6] text-brand-800">
              Responsible disclosure contact: coming soon.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 font-display text-[13px] text-brand-dark/70">
            <span className="font-bold">Legend:</span>
            <span>
              <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-brand-700" />
              Live — built and in effect
            </span>
            <span>
              <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-brand-300" />
              In design — designed and committed, build to follow
            </span>
            <span>
              <span className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-brand-dark/30" />
              Planned — committed, not yet designed in detail
            </span>
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section className="mx-auto max-w-[1120px] px-6 pb-24">
          <div className="rounded-[28px] bg-brand-500 px-8 py-[72px] text-center">
            <h2 className="mx-auto mb-5 max-w-[22ch] font-display text-[clamp(30px,4.5vw,48px)] font-extrabold leading-[1.05] tracking-[-0.03em] text-white [text-wrap:balance]">
              Questions about how we handle your data?
            </h2>
            <p className="mx-auto mb-8 max-w-[44ch] text-[clamp(17px,1.8vw,20px)] leading-[1.5] text-white/90 [text-wrap:pretty]">
              Enterprise buyer or curious individual — ask us anything. We&rsquo;d rather you know
              before you sign up.
            </p>
            <a
              href="mailto:support@pmwise.ai?subject=Security%20question%20%E2%80%94%20PMWise"
              className="inline-flex min-h-[56px] items-center whitespace-nowrap rounded-full bg-brand-800 px-9 font-display text-[18px] font-bold text-white shadow-md transition hover:-translate-y-px hover:bg-[#3A0311]"
            >
              Ask about security
            </a>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-brand-dark/10">
        <div className="mx-auto flex max-w-[1120px] flex-wrap items-center justify-between gap-5 px-6 py-10">
          <div className="flex items-center gap-2.5">
            <img src={pmwiseIcon.src} alt="" width={26} height={26} className="h-[26px] w-[26px]" />
            <span className="font-display text-[17px] font-bold text-brand-dark">
              PMWISE<span className="text-brand-700">.AI</span>
            </span>
          </div>
          <p className="text-[15px] text-brand-dark/70">© 2026 PMWISE.AI · Huon Valley, Tasmania</p>
          <div className="flex items-center gap-5">
            <a
              href="https://www.linkedin.com/company/pmwise-ai/"
              className="inline-flex min-h-[44px] items-center font-display text-[15px] font-medium text-brand-700 underline underline-offset-[3px]"
            >
              LinkedIn
            </a>
            <a
              href="mailto:support@pmwise.ai?subject=Contact%20%E2%80%94%20PMWise"
              className="inline-flex min-h-[44px] items-center font-display text-[15px] font-medium text-brand-700 underline underline-offset-[3px]"
            >
              support@pmwise.ai
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

