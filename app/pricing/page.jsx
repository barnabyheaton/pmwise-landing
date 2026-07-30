import Link from 'next/link'

export const metadata = {
  title: 'Pricing — PMWISE.AI',
  description:
    'Simple, honest pricing: $5 per read/write member per month, GST and card fees included. Read-only teammates are free.',
}

const valueItems = [
  {
    title: 'The whole method',
    body: '70 years of best practice distilled into one guided path — from problem to plan, from doing to done.',
  },
  {
    title: 'Your team of trusted advisors, available 24/7',
    body: 'Analyst, planner, quality lead, risk manager — the trusted advisors a project needs, in the palm of your hand.',
  },
  {
    title: 'Your why, kept honest',
    body: 'An ethical, philosophical engine that keeps purpose at the centre and refuses to fake certainty.',
  },
  {
    title: 'Enterprise-grade security',
    body: 'Private, isolated, encrypted in transit and at rest — built to government standards by design.',
  },
]

const billingSteps = [
  {
    num: '1',
    title: 'You only pay for read/write members',
    body: 'Every teammate who can view your work does so for free. You are only ever charged $5 per person who can create and change things — the people actually doing the work.',
  },
  {
    num: '2',
    title: 'Signing up sets your billing day',
    body: 'The day you subscribe becomes your billing date — say the 14th. From then on, that is the day your subscription renews each month.',
  },
  {
    num: '3',
    title: 'New members are prorated, then monthly',
    body: 'Add a read/write member mid-cycle and you pay only the part-month up to your next billing day. After that, they roll into the flat $5/month, billed in advance.',
  },
  {
    num: '4',
    title: 'Paid monthly, in advance',
    body: 'Each billing day we charge the coming month for every current read/write member. You always know the number before it happens: members × $5.',
  },
  {
    num: '5',
    title: 'Remove access any time — no refunds',
    body: 'Drop a member and you will not be billed for them next cycle. Because months are paid in advance, part-months already paid are not refunded — so the access simply runs to the end of the paid period.',
  },
]

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-[1080px] px-6 py-10">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl bg-brand-dark px-8 py-16 sm:px-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 82% 20%, rgba(236,0,63,0.18), transparent 55%)',
          }}
        />
        <div className="absolute left-0 top-0 bottom-0 w-4 bg-brand-primary" />
        <div className="relative grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div
              className="mb-6 inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-[13px] font-semibold"
              style={{
                color: '#FF8FA3',
                background: 'rgba(236,0,63,0.10)',
                border: '1px solid rgba(255,143,163,0.35)',
              }}
            >
              <span className="h-2 w-2 rounded-full" style={{ background: '#EC003F' }} />
              Coming soon · Simple, honest pricing
            </div>
            <h1 className="max-w-[15ch] font-display text-[clamp(38px,5vw,52px)] font-bold leading-[1.0] tracking-tight text-white [text-wrap:balance]">
              A whole team of trusted advisors, for the price of a sushi roll.
            </h1>
            <p className="mt-6 max-w-[46ch] text-[20px] leading-[1.5] text-[#E5E7EB]">
              Seventy years of project best practice, in the palm of your hand —
              for less than you&rsquo;d spend on lunch.
            </p>
          </div>
          <div className="text-center">
            <div className="relative inline-flex items-start justify-center gap-1.5 text-white">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-[460px] w-[460px] -translate-x-1/2 -translate-y-1/2"
              >
                <div
                  className="absolute inset-0 rounded-full"
                  style={{ border: '1px solid rgba(255,143,163,0.14)' }}
                />
                <div
                  className="absolute inset-[20%] rounded-full"
                  style={{ border: '1px solid rgba(255,143,163,0.12)' }}
                />
                <div
                  className="absolute inset-[40%] rounded-full"
                  style={{ border: '1px solid rgba(255,143,163,0.10)' }}
                />
                <div
                  className="absolute inset-0 rounded-full motion-safe:animate-[radarSweep_9s_linear_infinite]"
                  style={{
                    background:
                      'conic-gradient(from 0deg, rgba(236,0,63,0.30), rgba(236,0,63,0) 55%)',
                  }}
                />
              </div>
              <span className="relative mt-[30px] font-display text-[76px] font-bold leading-none">
                $
              </span>
              <span className="relative font-display text-[260px] font-extrabold leading-[0.8] tracking-[-0.05em]">
                5
              </span>
            </div>
            <div
              className="relative mt-[18px] text-[18px] font-semibold uppercase tracking-[0.06em]"
              style={{ color: '#FF8FA3' }}
            >
              per read/write member · per month
            </div>
            <div className="relative mt-1.5 text-[15px] text-white/60">
              GST &amp; card fees already in · read-only is free
            </div>
          </div>
        </div>
      </section>

      {/* VALUE RECAP */}
      <section className="px-1 pt-16 pb-6">
        <p className="mb-3.5 text-[14px] font-semibold uppercase tracking-[0.1em] text-brand-600">
          What your $5 actually buys
        </p>
        <h2 className="mb-9 max-w-[22ch] font-display text-[36px] font-bold leading-[1.08] tracking-tight">
          Not a lighter plan. The whole thing.
        </h2>
        <div className="grid gap-4.5 sm:grid-cols-2">
          {valueItems.map((v) => (
            <div
              key={v.title}
              className="grid grid-cols-[auto_1fr] items-start gap-4 rounded-[18px] border border-brand-dark/10 bg-white p-7"
            >
              <span className="mt-[7px] h-3 w-3 rounded-full bg-brand-primary" />
              <div>
                <div className="mb-1.5 font-display text-[19px] font-bold tracking-tight">
                  {v.title}
                </div>
                <p className="text-[16.5px] leading-[1.5] text-[#4B5563]">
                  {v.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BILLING TRANSPARENCY */}
      <section className="px-1 pt-14 pb-6">
        <p className="mb-3.5 text-[14px] font-semibold uppercase tracking-[0.1em] text-brand-600">
          How billing works · no surprises
        </p>
        <h2 className="mb-3 max-w-[22ch] font-display text-[36px] font-bold leading-[1.08] tracking-tight">
          Everything, in plain words.
        </h2>
        <p className="mb-9 max-w-[60ch] text-[18.5px] leading-[1.6] text-[#374151]">
          We price the way we build — honestly. Here&rsquo;s exactly how it works
          before you ever pay a cent.
        </p>
        <ol className="grid list-none gap-4">
          {billingSteps.map((s) => (
            <li
              key={s.num}
              className="grid grid-cols-[auto_1fr] items-start gap-5 rounded-[18px] border border-brand-dark/10 p-7"
            >
              <span className="flex h-[34px] w-[34px] items-center justify-center rounded-full bg-brand-600 text-[15px] font-bold text-white">
                {s.num}
              </span>
              <div>
                <div className="mb-1.5 font-display text-[20px] font-bold tracking-tight">
                  {s.title}
                </div>
                <p className="text-[17px] leading-[1.55] text-[#4B5563]">
                  {s.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-5 grid grid-cols-[auto_1fr] items-center gap-[18px] rounded-[18px] bg-brand-dark p-7">
          <span className="h-9 w-9 rounded-full bg-brand-primary" aria-hidden="true" />
          <p className="text-[17px] leading-[1.55] text-[#E5E7EB]">
            The headline is the whole story:{' '}
            <strong className="font-semibold text-white">$5.00</strong> per
            read/write member, per month, GST and card fees already inside.
            Read-only access is free, forever. No tiers, no seats you have to buy
            in blocks, no annual lock-in.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-1 pt-6 pb-4">
        <div className="rounded-[28px] bg-brand-primary px-8 py-16 text-center">
          <h2 className="mx-auto mb-4 max-w-[20ch] font-display text-[clamp(34px,4.5vw,46px)] font-extrabold leading-[1.0] tracking-tight text-white [text-wrap:balance]">
            We&rsquo;re not live yet — but you can be first.
          </h2>
          <p className="mx-auto mb-8 max-w-[46ch] text-[20px] leading-[1.5] text-white/90">
            PMWISE is still being built in the open. Join the waitlist to lock in
            early access — or talk to the founder directly.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <a
              href="mailto:info@pmwise.ai?subject=Waitlist%20%E2%80%94%20PMWise%20%245%20plan"
              className="inline-flex min-h-[56px] items-center rounded-full bg-brand-800 px-9 text-[18px] font-bold text-white"
            >
              Join the waitlist
            </a>
            <a
              href="mailto:info@pmwise.ai?subject=Chat%20about%20pricing%20%E2%80%94%20PMWise"
              className="inline-flex min-h-[56px] items-center rounded-full border-[1.5px] border-white/50 px-8 text-[18px] font-bold text-white"
            >
              Speak to our founder
            </a>
          </div>
        </div>
        <p className="mt-6 text-center text-[15px]">
          <Link href="/" className="text-brand-600 underline-offset-2 hover:text-brand-800">
            ← Back home
          </Link>
        </p>
      </section>
    </main>
  )
}
