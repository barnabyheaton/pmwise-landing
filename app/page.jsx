import pmwiseIcon from './pmwise_icon_color.png'

export const metadata = {
  title: 'PMWISE.AI — Life is a project',
  description:
    'Enterprise capable, individually crafted, traceable benefit realisation. PMWISE learns 70 years of project best practice, innovates with AI, and puts the results in the hands of its clients.',
}

export default function Home() {
  return (
    <div className="overflow-x-hidden font-body text-brand-dark">
      {/* Skip link */}
      <a
        href="#main"
        className="sr-only rounded-br-lg bg-brand-dark px-5 py-3 font-display font-semibold text-white focus:not-sr-only focus:absolute focus:left-0 focus:top-0 focus:z-[100]"
      >
        Skip to content
      </a>

      {/* ============ HEADER ============ */}
      <header className="sticky top-0 z-50 border-b border-brand-dark/10 bg-white/85 backdrop-blur-md backdrop-saturate-150">
        <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-4 px-6 py-3.5">
          <a href="#top" className="flex items-center gap-2.5 text-brand-dark no-underline">
            <img src={pmwiseIcon.src} alt="" width={30} height={30} className="h-[30px] w-[30px]" />
            <span className="font-display text-xl font-bold tracking-tight">
              PMWISE<span className="text-brand-700">.AI</span>
            </span>
          </a>
          <nav aria-label="Primary" className="flex items-center gap-2">
            <a
              href="mailto:info@pmwise.ai?subject=Early%20access%20%E2%80%94%20PMWise"
              className="inline-flex min-h-[44px] items-center whitespace-nowrap rounded-full bg-brand-700 px-[18px] font-display text-[15px] font-semibold text-white transition-colors hover:bg-brand-800"
            >
              Speak to our founder
            </a>
          </nav>
        </div>
      </header>

      <span id="top" />
      <main id="main">
        {/* ============ HERO ============ */}
        <section className="mx-auto max-w-[1120px] px-6 pb-10 pt-[72px]">
          <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-brand-50 px-4 py-2 font-display text-[13.5px] font-semibold tracking-wide text-brand-800">
            <span className="h-2 w-2 flex-none rounded-full bg-brand-600" aria-hidden="true" />
            Enterprise capable · Individually crafted · Traceable Benefit Realisation
          </div>

          <h1 className="max-w-[14ch] font-display text-[clamp(44px,8vw,92px)] font-bold leading-[0.98] tracking-[-0.03em] text-brand-dark [text-wrap:balance]">
            &ldquo;Life is a project.&rdquo;
          </h1>

          <p className="mt-6 max-w-[40ch] text-[clamp(20px,2.4vw,27px)] leading-[1.45] text-brand-dark/80 [text-wrap:pretty]">
            Change is life&rsquo;s only certainty. You can choose to try and steer the changes
            happening in your life and your business — or you can sit back and hope everything works
            out somehow. PMWISE learns the lesson of{' '}
            <strong className="font-semibold text-brand-dark">70 years of project management best
            practice</strong>, innovates with the power of AI and then puts the results in the hands
            of its clients.
          </p>

          <div className="mt-9 flex flex-wrap gap-3.5">
            <a
              href="mailto:info@pmwise.ai?subject=Early%20access%20%E2%80%94%20PMWise"
              className="inline-flex min-h-[52px] items-center whitespace-nowrap rounded-full bg-brand-700 px-[30px] font-display text-[17px] font-semibold text-white shadow-sm transition hover:-translate-y-px hover:bg-brand-800"
            >
              Contact our founder to learn more
            </a>
            <a
              href="#story"
              className="inline-flex min-h-[52px] items-center whitespace-nowrap rounded-full border-[1.5px] border-brand-200 bg-white px-[26px] font-display text-[17px] font-semibold text-brand-800 transition hover:border-brand-600 hover:bg-brand-50"
            >
              Read our story →
            </a>
          </div>
        </section>

        {/* ============ STAT BAND ============ */}
        <section aria-label="The research" className="mx-auto mt-10 max-w-[1120px] px-6">
          <div className="grid grid-cols-1 items-center gap-10 rounded-3xl bg-brand-dark p-8 sm:p-12 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="font-display text-[clamp(88px,13vw,150px)] font-extrabold leading-[0.85] tracking-[-0.04em] text-brand-500">
                70%
              </div>
              <div className="mt-4 font-display text-[15px] font-semibold uppercase tracking-[0.08em] text-brand-200">
                of the time, they miss
              </div>
            </div>
            <p className="text-[clamp(19px,2.1vw,24px)] leading-[1.5] text-white/95 [text-wrap:pretty]">
              Seventy years of project management, and the research keeps hitting the same ceiling:
              projects that fixate on <em className="italic text-brand-300">how much</em> and{' '}
              <em className="italic text-brand-300">how long</em> miss what they set out to do about
              seven times in ten. And even for the projects which do hit the mark, more often than
              not the <strong className="font-semibold text-white">&lsquo;why&rsquo;</strong> gets
              lost in the noise.
            </p>
          </div>
        </section>

        {/* ============ THE PROCESS ============ */}
        <section aria-labelledby="process-h" className="mx-auto max-w-[1120px] px-6 pb-6 pt-[88px]">
          <p className="mb-3.5 font-display text-sm font-semibold uppercase tracking-[0.1em] text-brand-700">
            Strip it all away
          </p>
          <h2
            id="process-h"
            className="max-w-[22ch] font-display text-[clamp(30px,4.2vw,48px)] font-bold leading-[1.05] tracking-[-0.02em] text-brand-dark"
          >
            Every change runs on the same simple loop.
          </h2>
          <p className="mt-[18px] max-w-[52ch] text-[19px] leading-[1.5] text-brand-dark/70 [text-wrap:pretty]">
            A person, a team, an organisation — the shape underneath is identical. The trouble has
            always been what happens <em className="italic">after</em> step four.
          </p>

          <ol className="mt-11 grid list-none grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <li className="rounded-[18px] border border-brand-dark/10 bg-white p-7">
              <div className="mb-5 font-display text-[15px] font-bold text-brand-700" aria-hidden="true">01</div>
              <h3 className="mb-2 font-display text-xl font-bold tracking-tight text-brand-dark">Feel the pain</h3>
              <p className="text-base leading-[1.45] text-brand-dark/70">Something isn&rsquo;t right. It needs to change.</p>
            </li>
            <li className="rounded-[18px] border border-brand-dark/10 bg-white p-7">
              <div className="mb-5 font-display text-[15px] font-bold text-brand-700" aria-hidden="true">02</div>
              <h3 className="mb-2 font-display text-xl font-bold tracking-tight text-brand-dark">Picture better</h3>
              <p className="text-base leading-[1.45] text-brand-dark/70">You imagine a place you&rsquo;d rather be.</p>
            </li>
            <li className="rounded-[18px] border border-brand-dark/10 bg-white p-7">
              <div className="mb-5 font-display text-[15px] font-bold text-brand-700" aria-hidden="true">03</div>
              <h3 className="mb-2 font-display text-xl font-bold tracking-tight text-brand-dark">Build a plan</h3>
              <p className="text-base leading-[1.45] text-brand-dark/70">A way to get from here to there.</p>
            </li>
            <li className="rounded-[18px] border border-brand-300 bg-brand-100 p-7">
              <div className="mb-5 font-display text-[15px] font-bold text-brand-800" aria-hidden="true">04</div>
              <h3 className="mb-2 font-display text-xl font-bold tracking-tight text-brand-dark">Put it in motion</h3>
              <p className="text-base leading-[1.45] text-brand-800">And this is where it usually breaks 70% of the time. Why?</p>
            </li>
          </ol>

          <div className="mt-5 grid grid-cols-[auto_1fr] items-center gap-6 rounded-[18px] border border-brand-200 bg-brand-50 px-9 py-8">
            <div className="whitespace-nowrap font-display text-[clamp(40px,6vw,64px)] font-extrabold leading-none text-brand-600" aria-hidden="true">
              →
            </div>
            <p className="text-[clamp(18px,2vw,22px)] leading-[1.5] text-brand-dark [text-wrap:pretty]">
              Think of every building/renovation show you&rsquo;ve ever seen. The script is always
              the same — <em className="italic">how long and how much</em>. No one ever asks why.
              When you fix your time and cost first, you think you can shoe-horn everything else
              between those two rigid bookends. Well guess what, you can&rsquo;t. At PMWISE we talk
              about time and money last, because we want to solve your problem, not hit a dramatic
              deadline.{' '}
              <strong className="font-semibold text-brand-800">
                At PMWISE.AI — your why stays the centre of everything we do.
              </strong>
            </p>
          </div>
        </section>

        {/* ============ TAGLINE CONTRAST ============ */}
        <section aria-labelledby="two-h" className="mx-auto max-w-[1120px] px-6 pb-6 pt-[88px]">
          <h2
            id="two-h"
            className="mb-10 max-w-[20ch] font-display text-[clamp(30px,4.2vw,48px)] font-bold leading-[1.05] tracking-[-0.02em] text-brand-dark"
          >
            Two things at once — and that&rsquo;s the whole point.
          </h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="rounded-[22px] border border-brand-dark/10 bg-white p-10">
              <div className="mb-[18px] font-display text-[13px] font-bold uppercase tracking-[0.1em] text-brand-700">
                Enterprise capable
              </div>
              <p className="mb-4 font-display text-[clamp(22px,2.6vw,28px)] font-semibold leading-[1.2] tracking-tight text-brand-dark">
                PMWISE busts the jargon, to show you the path, step by step.
              </p>
              <p className="text-[17.5px] leading-[1.55] text-brand-dark/70 [text-wrap:pretty]">
                For seventy years project methods have built on one another, and while the layers have
                got deeper, the results remain the same. PMWISE starts with a blank piece of paper,
                learns the hard-won lessons, keeps what works and most importantly starts with your
                all-important &lsquo;why&rsquo;.
              </p>
            </div>
            <div className="rounded-[22px] bg-brand-dark p-10">
              <div className="mb-[18px] font-display text-[13px] font-bold uppercase tracking-[0.1em] text-brand-400">
                Individually crafted
              </div>
              <p className="mb-4 font-display text-[clamp(22px,2.6vw,28px)] font-semibold leading-[1.2] tracking-tight text-white">
                When you have a whole delivery team in the palm of your hand, one size does fit all.
              </p>
              <p className="text-[17.5px] leading-[1.55] text-white/85 [text-wrap:pretty]">
                PMWISE has shown AI the right way to deliver projects regardless of their context.
                This means PMWISE can help shape your project to your needs, your context, and your
                goals. It can travel at your pace, and it can scale from solo-hobbyists to entire
                enterprise teams.
              </p>
            </div>
          </div>
        </section>

        {/* ============ PULL QUOTE ============ */}
        <section className="mx-auto max-w-[1120px] px-6 py-[72px]">
          <figure className="border-l-[5px] border-brand-600 py-2 pl-8">
            <blockquote className="max-w-[20ch] font-display text-[clamp(30px,5vw,58px)] font-bold leading-[1.05] tracking-[-0.025em] text-brand-dark [text-wrap:balance]">
              This revolution will come from the ground up — not the top down.
            </blockquote>
          </figure>
        </section>

        {/* ============ STORY / FOUNDER ============ */}
        <section
          id="story"
          aria-labelledby="story-h"
          className="scroll-mt-[88px] border-y border-brand-dark/[0.08] bg-brand-50"
        >
          <div className="mx-auto max-w-[720px] px-6 py-[88px]">
            <p className="mb-3.5 font-display text-sm font-semibold uppercase tracking-[0.1em] text-brand-700">
              Why I am building this
            </p>
            <h2
              id="story-h"
              className="mb-8 max-w-[18ch] font-display text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-[-0.02em] text-brand-dark"
            >
              Twenty years to build a better PM mousetrap.
            </h2>

            <div className="text-[20px] leading-[1.62] text-brand-dark/80">
              <p className="mb-6 [text-wrap:pretty]">
                When I first discovered project management 20+ years ago, I just got it.
                It (Prince2) just made sense, so I have been digging deeper and making my way ever
                since. But while it couldn&rsquo;t be clearer to me, no matter how many frameworks
                exist, projects continue to show a stubborn average global failure rate of 70%
                (Standish CHAOS report 2020). This is a puzzle I have been trying to solve ever
                since.
              </p>
              <p className="mb-6 [text-wrap:pretty]">
                The advent of accessible AI has given us the opportunity to take a{' '}
                <strong className="font-semibold text-brand-800">&lsquo;clean piece of
                paper&rsquo; approach</strong> to the problem. To take all the best bits I have
                seen, and to drop the bits which never worked. To put the horses back in front of the carts,
                and to incrementally build, test and release an application and methodology which
                removes the systemic blockages creating project failure.
              </p>
              <p className="mb-6 [text-wrap:pretty]">
                What we have built distils the essence of good practice rather than solving a
                particular problem for a particular industry. It means PMWISE can deliver enterprise
                grade grunt or it can help an individual get through a problem, deeply personal to them.
              </p>
              <p className="mb-6 [text-wrap:pretty]">
                From Problem to Plan. From Doing to Done. PMWISE acts as your trusted delivery
                partner, building acheivable and comprehensive pathways to realise your untapped rewards, 
                and then helps you travel the road, on time and on budget, from why to why not.
              </p>
            </div>
          </div>
        </section>

        {/* ============ SECURITY BAND ============ */}
        <section aria-labelledby="security-h" className="mx-auto max-w-[1120px] px-6 pt-6">
          <div className="rounded-3xl border border-brand-200 bg-brand-50 p-8 sm:p-12">
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-white px-4 py-[7px] font-display text-[13px] font-semibold tracking-wide text-brand-800">
              <span className="h-2 w-2 flex-none rounded-full bg-brand-600" aria-hidden="true" />
              Security · Protecting us and protecting you.
            </div>
            <h2
              id="security-h"
              className="mb-[18px] max-w-[20ch] font-display text-[clamp(26px,3.6vw,36px)] font-bold leading-[1.1] tracking-[-0.02em] text-brand-dark"
            >
              Your security is our first consideration, not an afterthought.
            </h2>
            <p className="mb-7 max-w-[62ch] text-[17px] leading-[1.55] text-brand-dark/80 [text-wrap:pretty]">
              Security ultimately protects two things:{' '}
              <strong className="font-semibold text-brand-dark">you</strong>, and the{' '}
              <strong className="font-semibold text-brand-dark">platform</strong> you trust with
              your work. We keep one open register of everything we do in both — what is live today,
              what we are still building, and where the gaps are. We publish it because a promise you
              can examine is the only honest basis for trust.
            </p>
            <div className="mb-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <div className="mb-2.5 font-display text-[13px] font-bold uppercase tracking-[0.08em] text-brand-700">
                  Protecting you
                </div>
                <p className="text-[15.5px] leading-[1.5] text-brand-dark">
                  Every document is private and isolated — encrypted in transit and at rest, uploads
                  scanned for malware before use.
                </p>
              </div>
              <div>
                <div className="mb-2.5 font-display text-[13px] font-bold uppercase tracking-[0.08em] text-brand-700">
                  Protecting the platform
                </div>
                <p className="text-[15.5px] leading-[1.5] text-brand-dark">
                  Untrusted content can&rsquo;t hijack our AI. Secrets never reach your browser.
                  Database access is locked down.
                </p>
              </div>
            </div>
            <p className="mb-6 text-[15px] leading-[1.5] text-brand-800">
              PMWISE is built to enterprise and government-grade standards by design, and will take
              the final certifying step — independent penetration testing, IRAP, SOC 2 — when an
              enterprise client needs it. We are not certified yet, and we say so plainly.
            </p>
            <a
              href="/security"
              className="inline-flex min-h-[48px] items-center whitespace-nowrap rounded-full bg-brand-700 px-[26px] font-display text-[16px] font-semibold text-white transition-colors hover:bg-brand-800"
            >
              Read our Security Radar →
            </a>
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section className="mx-auto max-w-[1120px] px-6 py-24">
          <div className="overflow-hidden rounded-[28px] bg-brand-500 px-8 py-[72px] text-center">
            <h2 className="mx-auto mb-5 max-w-[18ch] font-display text-[clamp(34px,5.5vw,60px)] font-extrabold leading-none tracking-[-0.03em] text-white [text-wrap:balance]">
              Got a change you&rsquo;d want to manage like a pro?
            </h2>
            <p className="mx-auto mb-9 max-w-[44ch] text-[clamp(18px,2vw,22px)] leading-[1.5] text-white/90 [text-wrap:pretty]">
              While we&rsquo;re still building a better way, we&rsquo;d love to hear from you.
            </p>
            <a
              href="mailto:info@pmwise.ai?subject=Early%20access%20%E2%80%94%20PMWise"
              className="inline-flex min-h-[56px] items-center whitespace-nowrap rounded-full bg-brand-800 px-9 font-display text-[18px] font-bold text-white shadow-md transition hover:-translate-y-px hover:bg-[#3A0311]"
            >
              Become a part of the PMWISE community.
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
              href="/security"
              className="inline-flex min-h-[44px] items-center font-display text-[15px] font-medium text-brand-700 underline underline-offset-[3px]"
            >
              Security
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
