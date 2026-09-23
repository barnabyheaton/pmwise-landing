import Link from 'next/link'
import SiteHeader, { FOUNDER_MAILTO } from './_components/SiteHeader'
import SiteFooter from './_components/SiteFooter'
import ProductGlimpse from './_components/ProductGlimpse'

export const metadata = {
  title: 'PMWISE.AI — A whole team of trusted advisors, for less than a sushi roll',
  description:
    'PMWISE turns 70 years of project management best practice into an AI that takes you from a problem worth solving to a plan worth funding — with your why at the centre.',
}

// The journey as it is BUILT in pmwise-app, not as it was hoped in August. Keep the status
// column honest: "Built" means a person can do it in the app today; "Next" means designed and
// not built. When Do→Done ships, change its status here in the same breath.
const JOURNEY = [
  {
    title: 'Name the problem',
    body: 'Say what hurts, in your own words. PMWISE helps you pin down where you are and where you would rather be — before anyone mentions money.',
    status: 'Built',
  },
  {
    title: 'Find the why',
    body: 'Choose a way forward and say what it is worth: the benefits you will be able to point to when it is done.',
    status: 'Built',
  },
  {
    title: 'Walk the radars',
    body: 'Scope, deliverables, quality, risk, resources and time. The Black Box drafts each one from what you have told it — you decide what stays.',
    status: 'Built',
  },
  {
    title: 'One plan, traced',
    body: 'Everything lands in a single plan where every piece traces back to the benefit it serves. Export it to share.',
    status: 'Built',
  },
  {
    title: 'From doing to done',
    body: 'Carry the plan through to the finish, with the why still in view at every step.',
    status: 'Next',
  },
]

const PEOPLE = [
  {
    title: 'Bring your people — free',
    body: 'Anyone you invite can see the live project at no cost. Only the people who change things need a paid seat.',
  },
  {
    title: 'You decide who sees what',
    body: 'Access is set project by project. Sensitive documents stay with the people you trust with them.',
  },
  {
    title: 'A shared report opens a door',
    body: 'Send someone a report and they can ask to see the project behind it. You say yes or no — nobody gets in just by asking.',
  },
]

export default function Home() {
  return (
    <div className="overflow-x-hidden font-body text-brand-dark">
      <SiteHeader current="/" />

      <main id="main">
        {/* ============ HERO ============ */}
        <section className="relative overflow-hidden pb-16 pt-12 sm:pt-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-1/2 top-[40%] mr-[-760px] h-[1000px] w-[1000px] -translate-y-1/2"
          >
            <div className="absolute inset-0 rounded-full" style={{ border: '1px solid rgba(236,0,63,0.14)' }} />
            <div className="absolute inset-[16%] rounded-full" style={{ border: '1px solid rgba(236,0,63,0.11)' }} />
            <div className="absolute inset-[33%] rounded-full" style={{ border: '1px solid rgba(236,0,63,0.09)' }} />
            <div
              className="absolute inset-0 rounded-full motion-safe:animate-[radarSweep_8s_linear_infinite]"
              style={{ background: 'conic-gradient(from 0deg, rgba(236,0,63,0.08), rgba(236,0,63,0) 45%)' }}
            />
          </div>
          <div className="relative mx-auto grid max-w-[1120px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="mb-6 inline-flex flex-wrap items-center gap-x-2.5 gap-y-1 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 font-display text-[13.5px] font-semibold tracking-wide text-brand-800">
                <span className="h-2 w-2 flex-none rounded-full bg-brand-600" aria-hidden="true" />
                Built in the open · Problem → Plan is working today
              </p>

              <h1 className="max-w-[16ch] font-display text-[clamp(38px,5.6vw,68px)] font-bold leading-[1] tracking-[-0.03em] text-brand-dark [text-wrap:balance]">
                A whole team of trusted advisors, for less than a sushi roll.
              </h1>

              <p className="mt-6 max-w-[44ch] text-[clamp(18px,2vw,22px)] leading-[1.5] text-brand-dark/80 [text-wrap:pretty]">
                PMWISE turns{' '}
                <strong className="font-semibold text-brand-dark">
                  70 years of project management best practice
                </strong>{' '}
                into an AI that takes you from a problem worth solving to a plan worth funding —
                and keeps your <em className="italic">why</em> at the centre the whole way.
              </p>

              <div className="mt-9 flex flex-wrap gap-3.5">
                <a
                  href={FOUNDER_MAILTO}
                  className="inline-flex min-h-[52px] items-center whitespace-nowrap rounded-full bg-brand-700 px-[28px] font-display text-[17px] font-semibold text-white shadow-sm transition hover:bg-brand-800"
                >
                  Ask for early access
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex min-h-[52px] items-center whitespace-nowrap rounded-full border-[1.5px] border-brand-dark/55 bg-white px-[26px] font-display text-[17px] font-semibold text-brand-dark transition hover:border-brand-700 hover:text-brand-800"
                >
                  See how it works
                </a>
              </div>
              <p className="mt-4 text-[15px] text-brand-dark/70">
                Early access is a conversation, not a sign-up — it opens an email to Barnaby.
              </p>
            </div>

            <ProductGlimpse />
          </div>
        </section>

        {/* ============ STAT BAND ============ */}
        <section aria-labelledby="stat-h" className="on-dark mx-auto max-w-[1120px] px-4 sm:px-6">
          <div className="grid grid-cols-1 items-center gap-8 rounded-3xl bg-brand-dark p-8 sm:p-12 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p
                id="stat-h"
                className="font-display text-[clamp(80px,12vw,140px)] font-extrabold leading-[0.85] tracking-[-0.04em] text-white"
              >
                7<span className="text-brand-300"> in </span>10
              </p>
              <p className="mt-4 font-display text-[15px] font-semibold uppercase tracking-[0.08em] text-brand-200">
                projects miss what they set out to do
              </p>
            </div>
            <div>
              <p className="text-[clamp(19px,2.1vw,23px)] leading-[1.5] text-white/95 [text-wrap:pretty]">
                Seventy years of method, and the research keeps hitting the same ceiling. Projects
                that fixate on <em className="italic text-brand-200">how much</em> and{' '}
                <em className="italic text-brand-200">how long</em> fall short most of the time —
                and even when they land, the{' '}
                <strong className="font-semibold text-white">&lsquo;why&rsquo;</strong> gets lost
                in the noise.
              </p>
              <p className="mt-4 text-[15px] text-white/75">
                Source: Standish Group, CHAOS Report 2020 — roughly 31% of projects fully succeed.
              </p>
            </div>
          </div>
        </section>

        {/* ============ HOW IT WORKS ============ */}
        <section
          id="how-it-works"
          aria-labelledby="how-h"
          className="mx-auto max-w-[1120px] scroll-mt-[88px] px-4 pb-6 pt-[88px] sm:px-6"
        >
          <p className="mb-3.5 font-display text-sm font-semibold uppercase tracking-[0.1em] text-brand-700">
            How it works
          </p>
          <h2
            id="how-h"
            className="max-w-[22ch] font-display text-[clamp(30px,4.2vw,48px)] font-bold leading-[1.05] tracking-[-0.02em] text-brand-dark"
          >
            Why first. Time and money last.
          </h2>
          <p className="mt-[18px] max-w-[58ch] text-[19px] leading-[1.55] text-brand-dark/75 [text-wrap:pretty]">
            Think of every renovation show you have ever watched: the script is always{' '}
            <em className="italic">how long and how much</em>. Fix those first and you try to
            shoe-horn everything else between two rigid bookends. PMWISE turns the order around.
          </p>

          <ol className="mt-11 grid list-none grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {JOURNEY.map((step, i) => {
              const next = step.status === 'Next'
              return (
                <li
                  key={step.title}
                  className={`flex flex-col rounded-[18px] border p-6 ${
                    next ? 'border-dashed border-brand-dark/30 bg-white' : 'border-brand-dark/10 bg-white'
                  }`}
                >
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <span className="font-display text-[15px] font-bold text-brand-700" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-1 font-display text-[11.5px] font-bold uppercase tracking-[0.06em] ${
                        next ? 'bg-brand-dark/[0.06] text-brand-dark/80' : 'bg-brand-50 text-brand-700'
                      }`}
                    >
                      {next ? 'Next' : '✓ Built'}
                    </span>
                  </div>
                  <h3 className="mb-2 font-display text-xl font-bold tracking-tight text-brand-dark">
                    {step.title}
                  </h3>
                  <p className="text-base leading-[1.5] text-brand-dark/75">{step.body}</p>
                </li>
              )
            })}
          </ol>
        </section>

        {/* ============ PEOPLE ============ */}
        <section aria-labelledby="people-h" className="mx-auto max-w-[1120px] px-4 pb-6 pt-[72px] sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-3.5 font-display text-sm font-semibold uppercase tracking-[0.1em] text-brand-700">
                Projects are people
              </p>
              <h2
                id="people-h"
                className="max-w-[16ch] font-display text-[clamp(28px,3.8vw,42px)] font-bold leading-[1.08] tracking-[-0.02em] text-brand-dark"
              >
                Everyone can see. You decide who can change.
              </h2>
              <p className="mt-5 max-w-[44ch] text-[18px] leading-[1.55] text-brand-dark/75 [text-wrap:pretty]">
                A plan kept in one person&rsquo;s head, or one person&rsquo;s spreadsheet, is a plan
                nobody else can hold you to. PMWISE is built to be shared.
              </p>
            </div>
            <ul className="grid list-none gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {PEOPLE.map((p) => (
                <li key={p.title} className="rounded-[18px] border border-brand-dark/10 bg-white p-6">
                  <h3 className="mb-2 font-display text-[19px] font-bold tracking-tight text-brand-dark">
                    {p.title}
                  </h3>
                  <p className="text-[16px] leading-[1.5] text-brand-dark/75">{p.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ============ TAGLINE ============ */}
        <section aria-labelledby="two-h" className="mx-auto max-w-[1120px] px-4 pb-6 pt-[88px] sm:px-6">
          <h2
            id="two-h"
            className="mb-10 max-w-[22ch] font-display text-[clamp(30px,4.2vw,48px)] font-bold leading-[1.05] tracking-[-0.02em] text-brand-dark"
          >
            Enterprise capable. Individual accessible.
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="rounded-[22px] border border-brand-dark/10 bg-white p-8 sm:p-10">
              <p className="mb-[18px] font-display text-[13px] font-bold uppercase tracking-[0.1em] text-brand-700">
                Enterprise capable
              </p>
              <p className="mb-4 font-display text-[clamp(22px,2.6vw,28px)] font-semibold leading-[1.2] tracking-tight text-brand-dark">
                The rigour of a full delivery team, without the jargon.
              </p>
              <p className="text-[17.5px] leading-[1.55] text-brand-dark/75 [text-wrap:pretty]">
                Seventy years of methods have piled layer on layer, and the results have not
                moved. PMWISE started from a blank sheet, kept the hard-won lessons that work, and
                put your &lsquo;why&rsquo; first.
              </p>
            </div>
            <div className="on-dark rounded-[22px] bg-brand-dark p-8 sm:p-10">
              <p className="mb-[18px] font-display text-[13px] font-bold uppercase tracking-[0.1em] text-brand-300">
                Individual accessible
              </p>
              <p className="mb-4 font-display text-[clamp(22px,2.6vw,28px)] font-semibold leading-[1.2] tracking-tight text-white">
                Shaped to your project, at your pace — solo or a whole team.
              </p>
              <p className="text-[17.5px] leading-[1.55] text-white/85 [text-wrap:pretty]">
                The same method fits a personal change and an enterprise programme, because it
                distils good practice rather than one industry&rsquo;s habits. It travels at your
                pace and scales from one person to many.
              </p>
            </div>
          </div>
        </section>

        {/* ============ STORY / FOUNDER ============ */}
        <section
          id="story"
          aria-labelledby="story-h"
          className="mt-[88px] scroll-mt-[88px] border-y border-brand-dark/[0.08] bg-brand-50"
        >
          <div className="mx-auto max-w-[720px] px-4 py-[80px] sm:px-6">
            <p className="mb-3.5 font-display text-sm font-semibold uppercase tracking-[0.1em] text-brand-700">
              Why I am building this
            </p>
            <h2
              id="story-h"
              className="mb-8 max-w-[18ch] font-display text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-[-0.02em] text-brand-dark"
            >
              Twenty years to build a better PM mousetrap.
            </h2>

            <div className="text-[20px] leading-[1.62] text-brand-dark/85">
              <p className="mb-6 [text-wrap:pretty]">
                When I first discovered project management 20-odd years ago, I just got it. Prince2
                made sense, and I have been digging deeper ever since. Yet no matter how many
                frameworks exist, most projects still fall short. That is the puzzle I have been
                trying to solve.
              </p>
              <p className="mb-6 [text-wrap:pretty]">
                Accessible AI finally makes a{' '}
                <strong className="font-semibold text-brand-800">clean-sheet approach</strong>{' '}
                possible: keep the best of what I have seen, drop what never worked, put the horse
                back in front of the cart — and build, test and release it in the open.
              </p>
              <p className="[text-wrap:pretty]">
                From problem to plan. From doing to done. From why to why not.
              </p>
              <p className="mt-6 font-display text-[17px] font-semibold text-brand-dark">
                — Barnaby, founder
              </p>
            </div>
          </div>
        </section>

        {/* ============ PHILOSOPHY + SECURITY ============ */}
        <section aria-label="What sits underneath" className="mx-auto grid max-w-[1120px] gap-5 px-4 pt-[88px] sm:px-6 lg:grid-cols-2">
          <div className="on-dark relative overflow-hidden rounded-3xl bg-brand-dark p-8 sm:p-10">
            <p className="mb-5 font-display text-[13px] font-bold uppercase tracking-[0.1em] text-brand-300">
              Philosophy
            </p>
            <h2 className="mb-4 max-w-[20ch] font-display text-[clamp(24px,3vw,32px)] font-bold leading-[1.12] tracking-[-0.02em] text-white">
              PMWISE has a moral and ethical compass. Spreadsheets don&rsquo;t.
            </h2>
            <p className="mb-7 max-w-[52ch] text-[17px] leading-[1.55] text-white/90 [text-wrap:pretty]">
              Purpose and ethics sit in the foundations — anchored in Australia&rsquo;s AI Ethics
              Framework and shaped by thinkers from Aristotle to the Toyota Production System.
            </p>
            <Link
              href="/philosophy"
              className="inline-flex min-h-[48px] items-center whitespace-nowrap rounded-full bg-white px-[24px] font-display text-[16px] font-semibold text-brand-dark transition-colors hover:bg-brand-50"
            >
              See inside the black box →
            </Link>
          </div>
          <div className="rounded-3xl border border-brand-200 bg-brand-50 p-8 sm:p-10">
            <p className="mb-5 font-display text-[13px] font-bold uppercase tracking-[0.1em] text-brand-700">
              Security
            </p>
            <h2 className="mb-4 max-w-[20ch] font-display text-[clamp(24px,3vw,32px)] font-bold leading-[1.12] tracking-[-0.02em] text-brand-dark">
              Every client walled off from every other — by the database itself.
            </h2>
            <p className="mb-7 max-w-[52ch] text-[17px] leading-[1.55] text-brand-dark/80 [text-wrap:pretty]">
              We publish one open register of what is live, what is still being built, and where
              the gaps are. We are not certified yet, and we say so plainly.
            </p>
            <Link
              href="/security"
              className="inline-flex min-h-[48px] items-center whitespace-nowrap rounded-full bg-brand-700 px-[24px] font-display text-[16px] font-semibold text-white transition-colors hover:bg-brand-800"
            >
              Read the Security Radar →
            </Link>
          </div>
        </section>

        {/* ============ PRICING TEASER ============ */}
        <section aria-labelledby="price-h" className="mx-auto max-w-[1120px] px-4 pt-[88px] sm:px-6">
          <div className="grid gap-8 rounded-3xl border border-brand-dark/10 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-3.5 font-display text-sm font-semibold uppercase tracking-[0.1em] text-brand-700">
                Pricing · not on sale yet
              </p>
              <h2
                id="price-h"
                className="max-w-[24ch] font-display text-[clamp(26px,3.4vw,38px)] font-bold leading-[1.1] tracking-[-0.02em] text-brand-dark"
              >
                Readers are free. People who change things are $5 a month.
              </h2>
              <p className="mt-4 max-w-[58ch] text-[17px] leading-[1.55] text-brand-dark/75">
                Or one lifetime payment for five seats. Nobody is charged until PMWISE is a
                registered company with lawyer-reviewed terms.
              </p>
            </div>
            <Link
              href="/pricing"
              className="inline-flex min-h-[52px] items-center justify-self-start whitespace-nowrap rounded-full bg-brand-700 px-[26px] font-display text-[17px] font-semibold text-white transition-colors hover:bg-brand-800"
            >
              See pricing in full
            </Link>
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section aria-labelledby="cta-h" className="on-dark mx-auto max-w-[1120px] px-4 py-[88px] sm:px-6">
          <div className="overflow-hidden rounded-[28px] bg-brand-dark px-6 py-16 text-center sm:px-8">
            <h2
              id="cta-h"
              className="mx-auto mb-5 max-w-[18ch] font-display text-[clamp(32px,5vw,56px)] font-extrabold leading-none tracking-[-0.03em] text-white [text-wrap:balance]"
            >
              Got a change you want to manage like a pro?
            </h2>
            <p className="mx-auto mb-9 max-w-[46ch] text-[clamp(18px,2vw,21px)] leading-[1.5] text-white/85 [text-wrap:pretty]">
              We are still building, and early conversations shape what comes next. Tell us about
              your project.
            </p>
            <a
              href={FOUNDER_MAILTO}
              className="inline-flex min-h-[56px] items-center whitespace-nowrap rounded-full bg-brand-500 px-9 font-display text-[18px] font-bold text-white shadow-md transition hover:bg-brand-600"
            >
              Talk to Barnaby
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
