import SiteHeader, { FOUNDER_MAILTO } from '../_components/SiteHeader'
import SiteFooter from '../_components/SiteFooter'

export const metadata = {
  title: 'About Barnaby — PMWISE.AI',
  description:
    'Barnaby Heaton has spent twenty years inheriting projects whose trouble started before they began. PMWISE is his answer: good foundations, for anyone.',
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
            Twenty years of arriving after the important decisions.
          </h1>
          <p className="mt-6 text-[clamp(19px,2.1vw,22px)] leading-[1.6] text-brand-dark/85 [text-wrap:pretty]">
            I&rsquo;m Barnaby Heaton. For more than twenty years I&rsquo;ve run projects in
            banking, technology, education and government — from a 26,000-user education network
            stretching across the Northern Territory to whole-of-government programs here in
            Tasmania.
          </p>
        </section>

        {/* ============ THE PATTERN ============ */}
        <section aria-labelledby="pattern-h" className="mx-auto max-w-[760px] px-4 pt-10 sm:px-6">
          <h2 id="pattern-h" className="mb-5 font-display text-[clamp(26px,3.4vw,34px)] font-bold leading-[1.1] tracking-[-0.02em]">
            The pattern
          </h2>
          <div className="text-[20px] leading-[1.65] text-brand-dark/85">
            <p className="mb-6 [text-wrap:pretty]">
              Along the way I noticed something. I was usually brought in after the important
              decisions had been made: the business case written, the product chosen, the budget
              set. My job was to make it work.
            </p>
            <p className="[text-wrap:pretty]">
              Sometimes it did. Often the trouble had been baked in long before I arrived — a
              product that was cheaper because it wasn&rsquo;t finished, a plan funded before
              anyone had designed it, benefits nobody pinned down until the money was already
              spent.
            </p>
          </div>
        </section>

        {/* ============ PULL QUOTE ============ */}
        <section aria-label="The lesson" className="mx-auto max-w-[1120px] px-4 py-14 sm:px-6">
          <figure className="on-dark rounded-3xl bg-brand-dark px-8 py-12 sm:px-14 sm:py-16">
            <blockquote className="max-w-[22ch] font-display text-[clamp(30px,4.6vw,52px)] font-bold leading-[1.05] tracking-[-0.025em] text-white [text-wrap:balance]">
              Projects rarely fail in delivery. They fail at the start.
            </blockquote>
            <figcaption className="mt-6 max-w-[56ch] text-[18px] leading-[1.55] text-white/85">
              When nobody asks <em className="italic text-brand-200">why</em> clearly enough — or
              checks whether the answer holds up.
            </figcaption>
          </figure>
        </section>

        {/* ============ FOUNDATIONS ============ */}
        <section aria-labelledby="found-h" className="mx-auto max-w-[760px] px-4 sm:px-6">
          <h2 id="found-h" className="mb-5 font-display text-[clamp(26px,3.4vw,34px)] font-bold leading-[1.1] tracking-[-0.02em]">
            A failure of foundations
          </h2>
          <div className="text-[20px] leading-[1.65] text-brand-dark/85">
            <p className="mb-6 [text-wrap:pretty]">
              I watched the Queensland Health payroll failure unfold while I was studying project
              management, and it has stayed with me. It was as much a failure of foundations as of
              technology: the decisions that doomed it were made long before anyone switched it on.
            </p>
            <p className="mb-8 [text-wrap:pretty]">
              That is why PMWISE puts the why first. The questions I learned to ask the hard way
              are built into every step — and you get to ask them before anything is set in stone,
              not after.
            </p>
          </div>
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
        </section>

        {/* ============ FOR ANYONE ============ */}
        <section aria-labelledby="anyone-h" className="mx-auto max-w-[760px] px-4 pt-14 sm:px-6">
          <h2 id="anyone-h" className="mb-5 font-display text-[clamp(26px,3.4vw,34px)] font-bold leading-[1.1] tracking-[-0.02em]">
            Good foundations, for anyone
          </h2>
          <p className="text-[20px] leading-[1.65] text-brand-dark/85 [text-wrap:pretty]">
            Good foundations shouldn&rsquo;t only be available to programs that can afford a room
            full of consultants. PMWISE is my attempt to give them to anyone — whether that&rsquo;s
            a community group planning a garden or a team planning a major program.
          </p>
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
