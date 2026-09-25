import SiteHeader, { FOUNDER_MAILTO } from '../_components/SiteHeader'
import SiteFooter from '../_components/SiteFooter'

export const metadata = {
  title: 'About Barnaby — PMWISE.AI',
  description:
    'In twenty years, nobody asked Barnaby Heaton how a project should be run. GKB is the method he would have used; PMWISE is the tool he wished he had.',
}

// Facts on this page come from Barnaby's own résumé and LinkedIn (September 2026), and his
// instructions of 24 September 2026:
//   - NO reference to any current employment or other work he does in parallel.
//   - CPSPM was ACHIEVED; he has since left the AIPM, so it is stated in the past tense and
//     no post-nominal membership (MAIPM) is claimed.
//   - The 2016 Project of the Year is NOT named (it was for a forestry company).
// Keep every claim here checkable against those sources before changing it.

const CAREER = [
  { where: 'Federal, state and local government', what: 'Whole-of-government programs across eight Tasmanian agencies, a council-wide business transformation, and national-scale modernisation work.' },
  { where: 'Education, Northern Territory', what: 'Technology delivery for a 26,000-user education network, from dark-fibre city sites to satellite-linked remote communities.' },
  { where: 'Banking', what: 'IT projects in a regulated environment, where every change answers to the prudential regulator and the auditors.' },
  { where: 'Technology vendors', what: 'Cloud migrations, architecture reviews and portfolio software — seeing projects from the supplier’s side of the table.' },
]

const CREDENTIALS = [
  'Master of Business Administration and Master of Project Management — University of Southern Queensland',
  'Bachelor of Information and Communication Technology — University of the Sunshine Coast',
  'Certified Practising Senior Project Manager (CPSPM), achieved through the Australian Institute of Project Management',
  'Led the 2016 AIPM Tasmanian Project of the Year',
]

const QUESTIONS = [
  'What problem are we really solving?',
  'What will be better, and how will we know?',
  'What could go wrong — and what is the upside of that same uncertainty?',
]

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden font-body text-brand-dark">
      <SiteHeader current="/about" />

      <main id="main">
        {/* ============ HERO ============ */}
        <section className="mx-auto max-w-[760px] px-4 pb-6 pt-14 sm:px-6">
          <p className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.1em] text-brand-700">
            About Barnaby
          </p>
          <h1 className="max-w-[18ch] font-display text-[clamp(36px,5.4vw,58px)] font-bold leading-[1.02] tracking-[-0.03em] [text-wrap:balance]">
            The method I would have used. The tool I wished I had.
          </h1>
          <p className="mt-6 text-[clamp(19px,2.1vw,22px)] leading-[1.6] text-brand-dark/85 [text-wrap:pretty]">
            I&rsquo;m Barnaby Heaton. For more than twenty years I&rsquo;ve run projects in
            banking, technology, education and government — from a 26,000-user education network
            stretching across the Northern Territory to whole-of-government programs here in
            Tasmania.
          </p>
        </section>

        {/* ============ NOBODY ASKED ============ */}
        <section aria-labelledby="asked-h" className="mx-auto max-w-[760px] px-4 pt-10 sm:px-6">
          <h2 id="asked-h" className="mb-5 font-display text-[clamp(26px,3.4vw,34px)] font-bold leading-[1.1] tracking-[-0.02em]">
            Nobody asked
          </h2>
          <div className="text-[20px] leading-[1.65] text-brand-dark/85">
            <p className="mb-6 [text-wrap:pretty]">
              In all that time, I can&rsquo;t remember anyone asking a project manager how the
              project should be run. By the time I arrived, the business case was written, the
              product chosen and the budget set. My job was to make somebody else&rsquo;s decisions
              work.
            </p>
            <p className="[text-wrap:pretty]">
              Sometimes they did. Often the trouble had been baked in long before I got there — a
              product that was cheaper because it wasn&rsquo;t finished, a plan funded before anyone
              had designed it, benefits nobody pinned down until the money was spent.
            </p>
          </div>
        </section>

        {/* ============ PULL QUOTE ============ */}
        <section aria-label="The lesson" className="mx-auto max-w-[1120px] px-4 py-14 sm:px-6">
          <figure className="on-dark rounded-3xl bg-brand-dark px-8 py-12 sm:px-14 sm:py-16">
            <blockquote className="max-w-[22ch] font-display text-[clamp(30px,4.6vw,52px)] font-bold leading-[1.05] tracking-[-0.025em] text-white [text-wrap:balance]">
              Projects rarely fail in delivery. They fail at the start.
            </blockquote>
          </figure>
        </section>

        {/* ============ IF ANYONE HAD ASKED ============ */}
        <section aria-labelledby="method-h" className="mx-auto max-w-[760px] px-4 sm:px-6">
          <h2 id="method-h" className="mb-5 font-display text-[clamp(26px,3.4vw,34px)] font-bold leading-[1.1] tracking-[-0.02em]">
            If anyone had asked
          </h2>
          <p className="mb-8 text-[20px] leading-[1.65] text-brand-dark/85 [text-wrap:pretty]">
            I would have told them to start with the why — and to keep coming back to it:
          </p>
          <ol className="grid list-none gap-3">
            {QUESTIONS.map((q, i) => (
              <li key={q} className="flex items-start gap-4 rounded-[16px] border border-brand-dark/10 bg-white p-5">
                <span aria-hidden="true" className="font-display text-[15px] font-bold text-brand-700">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-[19px] font-semibold leading-[1.35]">{q}</span>
              </li>
            ))}
          </ol>
          <div className="mt-8 text-[20px] leading-[1.65] text-brand-dark/85">
            <p className="mb-6 [text-wrap:pretty]">
              Then I would have kept every piece of work tied to the benefit it was meant to
              deliver, from the first idea to the day it is done. That method has a name now:{' '}
              <strong className="font-semibold text-brand-dark">GKB</strong>. It is how I would
              have run every one of those projects, if anyone had let me start at the start.
            </p>
          </div>
          <aside
            aria-label="What GKB means"
            className="rounded-[18px] border-l-[5px] border-brand-700 bg-brand-50 px-6 py-5"
          >
            <p className="text-[17.5px] leading-[1.55] text-brand-dark [text-wrap:pretty]">
              <strong className="font-display font-semibold">GKB</strong>, short for{' '}
              <strong className="font-display font-semibold">GANKANBAN</strong>, joins the plan and
              the day-to-day work into one picture, so you can always see what has been delivered
              against what was promised. Its shape is settled, and it is being built into PMWISE
              now.
            </p>
          </aside>
        </section>

        {/* ============ THE TOOL ============ */}
        <section aria-labelledby="tool-h" className="mx-auto max-w-[760px] px-4 pt-14 sm:px-6">
          <h2 id="tool-h" className="mb-5 font-display text-[clamp(26px,3.4vw,34px)] font-bold leading-[1.1] tracking-[-0.02em]">
            The tool I wished I had
          </h2>
          <div className="text-[20px] leading-[1.65] text-brand-dark/85">
            <p className="mb-6 [text-wrap:pretty]">
              Knowing the method was never the hard part. Doing it properly takes a room full of
              specialists — analysts, planners, quality and risk people. Most projects cannot afford
              that room, and most people never get near one.
            </p>
            <p className="[text-wrap:pretty]">
              PMWISE is that room. It is the tool I wished I had for twenty years — and now anyone
              can have it, whether that is a community group planning a garden or a team planning a
              major program.
            </p>
          </div>
        </section>

        {/* ============ CAREER + CREDENTIALS ============ */}
        <section aria-labelledby="career-h" className="mx-auto max-w-[1120px] px-4 pt-[88px] sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 id="career-h" className="mb-6 font-display text-[clamp(26px,3.4vw,34px)] font-bold leading-[1.1] tracking-[-0.02em]">
                Where the lessons came from
              </h2>
              <dl className="grid gap-4 sm:grid-cols-2">
                {CAREER.map((c) => (
                  <div key={c.where} className="rounded-[18px] border border-brand-dark/10 p-6">
                    <dt className="mb-2 font-display text-[17px] font-bold tracking-tight">{c.where}</dt>
                    <dd className="text-[16px] leading-[1.5] text-brand-dark/75">{c.what}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="rounded-[22px] bg-brand-50 p-8">
              <h2 className="mb-5 font-display text-[22px] font-bold tracking-tight">
                Qualifications and recognition
              </h2>
              <ul className="grid list-none gap-3.5">
                {CREDENTIALS.map((c) => (
                  <li key={c} className="flex gap-3 text-[16.5px] leading-[1.45]">
                    <span aria-hidden="true" className="mt-[9px] h-2 w-2 flex-none rounded-full bg-brand-700" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ============ COUNTRY ============ */}
        <section aria-labelledby="country-h" className="mx-auto max-w-[760px] px-4 pt-[88px] sm:px-6">
          <h2 id="country-h" className="mb-4 font-display text-[clamp(22px,2.8vw,28px)] font-bold tracking-[-0.02em]">
            Where PMWISE is made
          </h2>
          <p className="text-[19px] leading-[1.65] text-brand-dark/85 [text-wrap:pretty]">
            PMWISE is made in Cygnet, in the Huon Valley, on the land of the Melukerdee people, one
            of the palawa nations of lutruwita/Tasmania. I acknowledge them as the Traditional
            Owners and Custodians of this Country, and pay my respects to Elders past and present.
          </p>
        </section>

        {/* ============ CTA ============ */}
        <section aria-labelledby="cta-h" className="on-dark mx-auto max-w-[1120px] px-4 py-[88px] sm:px-6">
          <div className="rounded-[28px] bg-brand-dark px-6 py-14 text-center sm:px-8">
            <h2 id="cta-h" className="mx-auto mb-4 max-w-[20ch] font-display text-[clamp(30px,4.5vw,46px)] font-extrabold leading-[1.02] tracking-tight text-white [text-wrap:balance]">
              Starting something that matters?
            </h2>
            <p className="mx-auto mb-8 max-w-[46ch] text-[19px] leading-[1.5] text-white/85">
              I would love to hear what you are trying to change, and why.
            </p>
            <a
              href={FOUNDER_MAILTO}
              className="inline-flex min-h-[56px] items-center rounded-full bg-brand-500 px-9 font-display text-[18px] font-bold text-white transition hover:bg-brand-600"
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
