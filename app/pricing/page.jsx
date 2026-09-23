import SiteHeader, { FOUNDER_MAILTO } from '../_components/SiteHeader'
import SiteFooter from '../_components/SiteFooter'

export const metadata = {
  title: 'Pricing — PMWISE.AI',
  description:
    'Readers are free. $5 a month for each person who can change things, or one lifetime payment for five seats. Not on sale yet.',
}

// ⚠️ The source of truth for every number on this page is pmwise-core
// docs/concepts/platform/licensing.md §0, §0b, §3a, §4a and §6a. If a price changes there,
// change it here in the same week — this page drifted for seven weeks once already.
//
// GST: only the $5 seat is quoted INCLUSIVE; lifetime and storage are EXCLUSIVE (licensing.md
// §0b table). PMWISE is not GST-registered today, so the page states the intended basis and
// charges nothing.

const PLANS = [
  {
    name: 'Reader',
    price: 'Free',
    unit: 'always',
    blurb: 'For everyone you invite to see a project.',
    points: [
      'See the live project you were invited to',
      'Read the radars, the plan and the reports',
      'Can be given more access at any time',
      'Never lapses — no card, no seat',
    ],
  },
  {
    name: 'Monthly',
    price: '$5',
    unit: 'per read/write person, per month',
    blurb: 'Pay only for the people who create and change things — you included.',
    points: [
      'The whole method — nothing held back',
      'Add or remove people any time',
      'One billing day, set the day you join',
      '10 GB of document storage',
    ],
    note: 'Tax and card fees included.',
    featured: true,
  },
  {
    name: 'Lifetime',
    price: '$350',
    unit: 'once, plus GST',
    blurb: 'Pay once. Five read/write seats — you and four others — for good.',
    points: [
      'Everything in Monthly, with no monthly bill',
      'Five permanent read/write seats',
      '10 GB of document storage, for life',
      'A sixth person onward is $5 a month each',
    ],
  },
]

const BILLING = [
  {
    title: 'Your billing day is the day you join',
    body: 'Join on the 14th and the 14th is your billing day, every month, from then on. It never moves.',
  },
  {
    title: 'Adding someone mid-month',
    body: 'You pay only the part-month up to your next billing day. After that they are on the ordinary $5 a month, in advance.',
  },
  {
    title: 'Removing someone',
    body: 'They are not billed again. Months are paid in advance, so the part already paid is not refunded — their access simply runs to the end of it.',
  },
  {
    title: 'Needing more storage',
    body: 'Every account starts with 10 GB. More is available in 5 GB blocks at $50 each, plus GST, paid once and kept for life.',
  },
]

const FAQ = [
  {
    q: 'What happens if I stop paying?',
    a: 'You never lose your work. The account becomes read-only: you and everyone on it can still open every project and export your reports — you just cannot change anything until you subscribe again. Sensitive documents stay visible to you, the account holder.',
  },
  {
    q: 'Do the people I invite need to pay?',
    a: 'Not to look. Anyone you invite to read a project does so free. You only pay for a seat when someone needs to create or change things.',
  },
  {
    q: 'Why is it not on sale yet?',
    a: 'Because we would rather do it properly. PMWISE is becoming a registered company, and its terms are going to a lawyer, before anyone is charged a cent. The payment system is built and tested; it stays switched off until then.',
  },
  {
    q: 'Can I work with Barnaby directly?',
    a: 'Yes — professional services with the founder will be available by arrangement once the company is in place. Get in touch to talk about it.',
  },
]

function Check() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-[3px] h-[18px] w-[18px] flex-none">
      <circle cx="10" cy="10" r="10" className="fill-brand-50" />
      <path d="M5.5 10.5l3 3 6-7" fill="none" strokeWidth="2" className="stroke-brand-700" />
    </svg>
  )
}

export default function PricingPage() {
  return (
    <div className="overflow-x-hidden font-body text-brand-dark">
      <SiteHeader current="/pricing" />

      <main id="main">
        {/* ============ HERO ============ */}
        <section className="mx-auto max-w-[1120px] px-4 pb-4 pt-14 text-center sm:px-6">
          <p className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.1em] text-brand-700">
            Pricing
          </p>
          <h1 className="mx-auto max-w-[18ch] font-display text-[clamp(36px,5.4vw,60px)] font-bold leading-[1.02] tracking-[-0.03em] text-brand-dark [text-wrap:balance]">
            A whole team of trusted advisors, for less than a sushi roll.
          </h1>
          <p className="mx-auto mt-5 max-w-[50ch] text-[clamp(18px,2vw,21px)] leading-[1.5] text-brand-dark/75 [text-wrap:pretty]">
            Readers are free. You pay only for the people who change things.
          </p>

          <div
            role="note"
            aria-label="Not on sale yet"
            className="mx-auto mt-8 flex max-w-[720px] items-start gap-3 rounded-2xl border-[1.5px] border-brand-dark/25 bg-white p-5 text-left"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="mt-0.5 h-6 w-6 flex-none">
              <circle cx="12" cy="12" r="10" fill="none" strokeWidth="2" className="stroke-brand-dark" />
              <path d="M12 7v6M12 16.5v.5" strokeWidth="2.2" strokeLinecap="round" className="stroke-brand-dark" />
            </svg>
            <p className="text-[16.5px] leading-[1.5] text-brand-dark">
              <strong className="font-semibold">Not on sale yet.</strong> These are the prices we
              intend to charge. Nobody pays anything until PMWISE is a registered company with
              terms reviewed by a lawyer.
            </p>
          </div>
        </section>

        {/* ============ PLANS ============ */}
        <section aria-label="Plans" className="mx-auto max-w-[1120px] px-4 pt-10 sm:px-6">
          <ul className="grid list-none gap-5 lg:grid-cols-3">
            {PLANS.map((p) => (
              <li
                key={p.name}
                className={`relative flex flex-col rounded-[22px] p-8 ${
                  p.featured
                    ? 'on-dark bg-brand-dark text-white'
                    : 'border border-brand-dark/15 bg-white'
                }`}
              >
                {p.featured && (
                  <p className="absolute -top-3.5 left-8 rounded-full bg-brand-500 px-3 py-1 font-display text-[12px] font-bold uppercase tracking-[0.06em] text-white">
                    Most people start here
                  </p>
                )}
                <h2 className={`font-display text-[15px] font-bold uppercase tracking-[0.1em] ${p.featured ? 'text-brand-300' : 'text-brand-700'}`}>
                  {p.name}
                </h2>
                <p className="mt-4 flex flex-wrap items-baseline gap-x-2">
                  <span className="font-display text-[56px] font-extrabold leading-none tracking-[-0.04em]">
                    {p.price}
                  </span>
                  <span className={`text-[16px] ${p.featured ? 'text-white/80' : 'text-brand-dark/75'}`}>
                    {p.unit}
                  </span>
                </p>
                <p className={`mt-4 text-[17px] leading-[1.45] ${p.featured ? 'text-white/90' : 'text-brand-dark/80'}`}>
                  {p.blurb}
                </p>
                <ul className="mt-6 grid list-none gap-3">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-[16px] leading-[1.45]">
                      <Check />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                {p.note && (
                  <p className="mt-6 text-[14.5px] text-white/75">{p.note}</p>
                )}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-[15px] text-brand-dark/75">
            Prices in Australian dollars. The same method in every plan — you never buy a lighter
            version of PMWISE.
          </p>
        </section>

        {/* ============ BILLING ============ */}
        <section aria-labelledby="billing-h" className="mx-auto max-w-[1120px] px-4 pt-[88px] sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3.5 font-display text-sm font-semibold uppercase tracking-[0.1em] text-brand-700">
                How billing works
              </p>
              <h2
                id="billing-h"
                className="max-w-[16ch] font-display text-[clamp(28px,3.6vw,40px)] font-bold leading-[1.08] tracking-[-0.02em]"
              >
                Everything, in plain words.
              </h2>
              <p className="mt-5 max-w-[44ch] text-[18px] leading-[1.55] text-brand-dark/75">
                Your bill is always the number of read/write people times $5. You will know it
                before it happens.
              </p>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2">
              {BILLING.map((b) => (
                <div key={b.title} className="rounded-[18px] border border-brand-dark/10 p-6">
                  <dt className="mb-2 font-display text-[18px] font-bold tracking-tight">{b.title}</dt>
                  <dd className="text-[16px] leading-[1.5] text-brand-dark/75">{b.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section aria-labelledby="faq-h" className="mx-auto max-w-[820px] px-4 pt-[88px] sm:px-6">
          <h2
            id="faq-h"
            className="mb-6 font-display text-[clamp(28px,3.6vw,40px)] font-bold leading-[1.08] tracking-[-0.02em]"
          >
            Questions people ask
          </h2>
          <div className="border-t border-brand-dark/15">
            {FAQ.map((f) => (
              <details key={f.q} className="group border-b border-brand-dark/15">
                <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-[18px] font-semibold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span
                    aria-hidden="true"
                    className="flex h-7 w-7 flex-none items-center justify-center rounded-full border-[1.5px] border-brand-dark/40 text-[18px] leading-none transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="pb-5 pr-10 text-[17px] leading-[1.55] text-brand-dark/80">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section aria-labelledby="cta-h" className="on-dark mx-auto max-w-[1120px] px-4 py-[88px] sm:px-6">
          <div className="rounded-[28px] bg-brand-dark px-6 py-14 text-center sm:px-8">
            <h2
              id="cta-h"
              className="mx-auto mb-4 max-w-[20ch] font-display text-[clamp(30px,4.5vw,46px)] font-extrabold leading-[1.02] tracking-tight text-white [text-wrap:balance]"
            >
              Want to be first when the doors open?
            </h2>
            <p className="mx-auto mb-8 max-w-[46ch] text-[19px] leading-[1.5] text-white/85">
              Tell us about your project and we will let you know the day PMWISE goes on sale.
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
