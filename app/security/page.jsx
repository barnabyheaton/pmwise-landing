import SiteHeader from '../_components/SiteHeader'
import SiteFooter from '../_components/SiteFooter'

export const metadata = {
  title: 'Security at PMWISE.AI — our open Security Radar',
  description:
    'Our open, living register of how PMWISE.AI stays secure — what is live, what we are building, and where the gaps are. Published openly, gaps and all.',
}

// Every status here must match pmwise-app as it is TODAY — this register is only worth publishing
// if it is true. Last reconciled against pmwise-core docs/workflow/NOW.md on 23 September 2026.
//   Live        — built and in effect in the app
//   Ready       — built and tested, switched on when PMWISE goes on sale
//   In design   — designed, build to follow
//   Planned     — committed, not yet designed in detail
//   Not planned — considered and deliberately not being built; said out loud rather than dropped
const YOU_ITEMS = [
  ['Each client\u2019s information is walled off from every other client\u2019s — enforced by the database itself, not just by our code', 'Live'],
  ['You decide who sees each project: people you invite can read for free, and only people you choose can change anything', 'Live'],
  ['Sensitive documents are visible only to the people you trust with them, project by project', 'Ready'],
  ['Files are stored privately — no public or guessable links; downloads use short-lived signed links', 'Live'],
  ['Uploads are checked before our AI will read them: file type verified from the contents, executables and known test malware refused', 'Live'],
  ['A full antivirus engine on every upload', 'Ready'],
  ['Data is encrypted in transit and at rest', 'Live'],
  ['A permanent record of every change to who can access what', 'Live'],
  ['Export your plans and reports to take elsewhere — and you keep that even if you stop paying', 'Live'],
  ['Client-held encryption keys (BYOK) — so only you can unlock your document content', 'In design'],
  ['A confidential-computing enclave (TEE) so even we cannot read your documents during analysis', 'In design'],
  ['A log of every access to your content, visible to you', 'In design'],
]

const PLATFORM_ITEMS = [
  ['Untrusted document content is treated as data, never instructions — it cannot hijack our AI', 'Live'],
  ['Secrets and keys are server-side only and never reach your browser', 'Live'],
  ['Every read and write is checked by the database against who you are — the master key is kept for a short, audited list of jobs', 'Live'],
  ['An ethics layer governs every AI action', 'Live'],
  ['Payments handled entirely by Stripe — your card details never touch PMWISE', 'Ready'],
  ['Every code change is security-reviewed before it ships', 'In design'],
  ['Automated dependency, secret and configuration scanning', 'In design'],
  ['A written incident-response plan and responsible-disclosure programme', 'Planned'],
  ['Multi-factor sign-in — a password signs you in and a reset comes only by emailed link; we chose simplicity here and will revisit it for enterprise clients', 'Not planned'],
]

// Status is carried by the WORD in each pill, never by colour alone (WCAG 1.4.1).
function tagClasses(label) {
  if (label === 'Live') return 'bg-brand-50 text-brand-700'
  if (label === 'Ready') return 'bg-brand-50 text-brand-800 ring-1 ring-inset ring-brand-300'
  if (label === 'In design') return 'bg-brand-100 text-brand-800'
  return 'bg-brand-dark/5 text-brand-dark/80'
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
      <SiteHeader current="/security" />

      <main id="main">
        {/* ============ HERO ============ */}
        <section className="on-dark relative overflow-hidden bg-brand-dark">
          <div aria-hidden="true" className="pointer-events-none absolute top-1/2 right-[-180px] -translate-y-1/2 h-[620px] w-[620px]">
            <div className="absolute inset-0 rounded-full" style={{ border: '1px solid rgba(255,143,163,0.14)' }} />
            <div className="absolute inset-[15%] rounded-full" style={{ border: '1px solid rgba(255,143,163,0.12)' }} />
            <div className="absolute inset-[30%] rounded-full" style={{ border: '1px solid rgba(255,143,163,0.10)' }} />
            <div className="absolute inset-[45%] rounded-full" style={{ border: '1px solid rgba(255,143,163,0.08)' }} />
            <div className="absolute inset-0 rounded-full" style={{ background: 'conic-gradient(from 0deg, rgba(236,0,63,0.30), rgba(236,0,63,0) 55%)', animation: 'radarSweep 8s linear infinite', transformOrigin: 'center' }} />
            <div className="absolute left-0 top-1/2 h-px w-full" style={{ background: 'rgba(255,143,163,0.10)' }} />
            <div className="absolute top-0 left-1/2 h-full w-px" style={{ background: 'rgba(255,143,163,0.10)' }} />
          </div>
          <div className="relative mx-auto max-w-[900px] px-6 pb-20 pt-[88px]">
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full px-4 py-2 font-display text-[13.5px] font-semibold tracking-wide" style={{ border: '1px solid rgba(255,143,163,0.35)', background: 'rgba(236,0,63,0.10)', color: '#FF8FA3' }}>
              <span className="h-2 w-2 flex-none rounded-full bg-brand-500" aria-hidden="true" />
              Security Radar · Work in progress — published openly
            </div>
            <h1 className="max-w-[16ch] font-display text-[clamp(38px,6.5vw,64px)] font-bold leading-[1.02] tracking-[-0.03em] text-white [text-wrap:balance]">
              Security at PMWISE.AI
            </h1>
            <p className="mt-6 max-w-[56ch] text-[clamp(19px,2.1vw,23px)] leading-[1.55] text-white/90 [text-wrap:pretty]">
              Security is not a feature we bolted on — it is the first thing we designed. This page is
              our open, living register of what we do to stay secure. We publish it, gaps and all,
              because a promise you can examine is the only honest basis for trust. It is a work in
              progress and we will keep it current as we build.
            </p>
          </div>
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
            <div className="on-dark rounded-[20px] bg-brand-dark p-8">
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
          <div className="on-dark relative overflow-hidden rounded-[22px] bg-brand-dark p-10">
            <div aria-hidden="true" className="pointer-events-none absolute top-1/2 right-[-120px] -translate-y-1/2 h-[360px] w-[360px]">
              <div className="absolute inset-0 rounded-full" style={{ border: '1px solid rgba(255,143,163,0.14)' }} />
              <div className="absolute inset-[22%] rounded-full" style={{ border: '1px solid rgba(255,143,163,0.11)' }} />
              <div className="absolute inset-[44%] rounded-full" style={{ border: '1px solid rgba(255,143,163,0.09)' }} />
              <div className="absolute inset-0 rounded-full" style={{ background: 'conic-gradient(from 0deg, rgba(236,0,63,0.28), rgba(236,0,63,0) 55%)', animation: 'radarSweep 8s linear infinite', transformOrigin: 'center' }} />
            </div>
            <div className="relative">
              <h2 className="mb-3.5 font-display text-[clamp(24px,3vw,30px)] font-bold tracking-tight text-white">
                Certification when you need it
              </h2>
              <p className="max-w-[60ch] text-[17px] leading-[1.6] text-white/85 [text-wrap:pretty]">
                We build to 80%+ of what IRAP, the Essential Eight and SOC 2 require by design, and
                keep the evidence ready. We take the final certifying step — independent penetration
                testing and formal audit — when an enterprise or government client requires it.{' '}
                <strong className="font-semibold text-brand-200">
                  We are not certified yet, and we say so plainly.
                </strong>
              </p>
            </div>
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

          <div className="mt-8 flex flex-wrap items-center gap-6 font-display text-[14px] text-brand-dark/80">
            <span className="font-bold">Legend:</span>
            <span>Live — built and in effect</span>
            <span>Ready — built and tested, switched on at launch</span>
            <span>In design — designed, build to follow</span>
            <span>Planned — committed, not yet designed</span>
            <span>Not planned — a deliberate choice, stated openly</span>
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section className="mx-auto max-w-[1120px] px-6 pb-24">
          <div className="on-dark rounded-[28px] bg-brand-500 px-8 py-[72px] text-center">
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

      <SiteFooter />
    </div>
  )
}
