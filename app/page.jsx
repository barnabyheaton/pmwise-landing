import pmwiseIcon from './pmwise_icon_color.png'

export const metadata = {
  title: 'PMWISE.AI — Life is a project',
  description:
    'Enterprise capable, individual accessible. PMWISE.AI puts 70 years of project best practice in the hands of one person — with the why at the centre.',
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
              Get early access
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
            Enterprise capable · Individual accessible
          </div>

          <h1 className="max-w-[14ch] font-display text-[clamp(44px,8vw,92px)] font-bold leading-[0.98] tracking-[-0.03em] text-brand-dark [text-wrap:balance]">
            Life is a project.
          </h1>

          <p className="mt-6 max-w-[40ch] text-[clamp(20px,2.4vw,27px)] leading-[1.45] text-brand-dark/80 [text-wrap:pretty]">
            You can steer the change that matters to you — or sit back and hope it works out.
            PMWISE.AI puts <strong className="font-semibold text-brand-dark">70 years of project
            best practice</strong> in the hands of one person, with the{' '}
            <em className="italic text-brand-800">why</em> at the centre.
          </p>

          <div className="mt-9 flex flex-wrap gap-3.5">
            <a
              href="mailto:info@pmwise.ai?subject=Early%20access%20%E2%80%94%20PMWise"
              className="inline-flex min-h-[52px] items-center whitespace-nowrap rounded-full bg-brand-700 px-[30px] font-display text-[17px] font-semibold text-white shadow-sm transition hover:-translate-y-px hover:bg-brand-800"
            >
              Get on the early list
            </a>
            <a
              href="#story"
              className="inline-flex min-h-[52px] items-center whitespace-nowrap rounded-full border-[1.5px] border-brand-200 bg-white px-[26px] font-display text-[17px] font-semibold text-brand-800 transition hover:border-brand-600 hover:bg-brand-50"
            >
              Read the story →
            </a>
          </div>
        </section>

        {/* ============ STAT BAND ============ */}
        <section aria-label="The research" className="mx-auto mt-10 max-w-[1120px] px-6">
          <div className="grid grid-cols-1 items-center gap-10 rounded-3xl bg-brand-dark p-8 sm:p-12 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="font-display text-[clamp(88px,13vw,150px)] font-extrabold leading-[0.85] tracking-[-0.04em] text-brand-400">
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
              seven times in ten. The <strong className="font-semibold text-white">why</strong> gets
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
              <h3 className="mb-2 font-display text-xl font-bold tracking-tight text-brand-dark">Feel a pain</h3>
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
              <p className="text-base leading-[1.45] text-brand-800">And this is where it usually breaks.</p>
            </li>
          </ol>

          <div className="mt-5 grid grid-cols-[auto_1fr] items-center gap-6 rounded-[18px] border border-brand-200 bg-brand-50 px-9 py-8">
            <div className="whitespace-nowrap font-display text-[clamp(40px,6vw,64px)] font-extrabold leading-none text-brand-600" aria-hidden="true">
              →
            </div>
            <p className="text-[clamp(18px,2vw,22px)] leading-[1.5] text-brand-dark [text-wrap:pretty]">
              The focus snaps to <em className="italic">how long</em> and <em className="italic">how much</em>, and from
              there that&rsquo;s how the whole thing gets run. Projects go rigid, lose focus, or deliver the
              opposite of what set them off.{' '}
              <strong className="font-semibold text-brand-800">
                PMWISE.AI is built the other way round — the why stays the centre and the core of
                everything that follows.
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
                The rigour, kept. The jargon, dropped.
              </p>
              <p className="text-[17.5px] leading-[1.55] text-brand-dark/70 [text-wrap:pretty]">
                Seventy years of delivery discipline distilled down to the parts that genuinely work
                — the methods, the checks, the hard-won lessons of bad project practice.
              </p>
            </div>
            <div className="rounded-[22px] bg-brand-dark p-10">
              <div className="mb-[18px] font-display text-[13px] font-bold uppercase tracking-[0.1em] text-brand-400">
                Individual accessible
              </div>
              <p className="mb-4 font-display text-[clamp(22px,2.6vw,28px)] font-semibold leading-[1.2] tracking-tight text-white">
                A whole delivery team, in one person&rsquo;s hands.
              </p>
              <p className="text-[17.5px] leading-[1.55] text-white/85 [text-wrap:pretty]">
                No industrial language, no enterprise ceremony. AI puts a team of specialists beside
                you in plain words, so you can name the future you&rsquo;re actually trying to reach.
              </p>
            </div>
          </div>
        </section>

        {/* ============ PULL QUOTE ============ */}
        <section className="mx-auto max-w-[1120px] px-6 py-[72px]">
          <figure className="border-l-[5px] border-brand-600 py-2 pl-8">
            <blockquote className="max-w-[20ch] font-display text-[clamp(30px,5vw,58px)] font-bold leading-[1.05] tracking-[-0.025em] text-brand-dark [text-wrap:balance]">
              The revolution comes from the ground up — not the top down.
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
              Why I&rsquo;m building this
            </p>
            <h2
              id="story-h"
              className="mb-8 max-w-[18ch] font-display text-[clamp(28px,4vw,42px)] font-bold leading-[1.08] tracking-[-0.02em] text-brand-dark"
            >
              Twenty years inside these projects.
            </h2>

            <div className="text-[20px] leading-[1.62] text-brand-dark/80">
              <p className="mb-6 [text-wrap:pretty]">
                I started out wanting to help enterprises rewire how they work. But somewhere in the
                building I realised the real power is bigger than that. It isn&rsquo;t only to keep the
                pieces of project practice that genuinely work, and put benefits and rewards back at
                the heart of things.
              </p>
              <p className="mb-6 [text-wrap:pretty]">
                It&rsquo;s also to show people something they rarely get told:{' '}
                <strong className="font-semibold text-brand-800">
                  the issues you most want to avoid are usually exactly where your greatest value is
                  hiding.
                </strong>
              </p>
              <p className="mb-6 [text-wrap:pretty]">
                The power of this tool might one day help enterprises change — but that kind of change
                comes from the ground up. Its real power is to help <em className="italic">individuals</em>{' '}
                manage the changes in their own lives: 70 years of best practice, a whole team of
                delivery specialists, and a way to describe the future you&rsquo;re actually trying to
                reach — built on the real <em className="italic">why</em> underneath the thing you&rsquo;re
                trying to resolve.
              </p>
            </div>

            <div className="mt-10 flex items-start gap-[18px] rounded-[18px] border border-brand-dark/10 bg-white px-8 py-7">
              <img src={pmwiseIcon.src} alt="" width={40} height={40} className="h-10 w-10 flex-none" />
              <p className="text-[17px] italic leading-[1.55] text-brand-dark/70">
                Built in the open, on my own, from the Huon Valley in Tasmania — with a lot of help
                from AI and no shortage of mistakes. No hype, no guarantees. Just the method, the
                journey, and the proof as it comes.
              </p>
            </div>
          </div>
        </section>

        {/* ============ CTA ============ */}
        <section className="mx-auto max-w-[1120px] px-6 py-24">
          <div className="overflow-hidden rounded-[28px] bg-brand-500 px-8 py-[72px] text-center">
            <h2 className="mx-auto mb-5 max-w-[18ch] font-display text-[clamp(34px,5.5vw,60px)] font-extrabold leading-none tracking-[-0.03em] text-brand-dark [text-wrap:balance]">
              Got a change you&rsquo;d rather steer than hope through?
            </h2>
            <p className="mx-auto mb-9 max-w-[44ch] text-[clamp(18px,2vw,22px)] leading-[1.5] text-brand-dark [text-wrap:pretty]">
              Come along. I&rsquo;ll send word as early access opens — no noise in between.
            </p>
            <a
              href="mailto:info@pmwise.ai?subject=Early%20access%20%E2%80%94%20PMWise"
              className="inline-flex min-h-[56px] items-center whitespace-nowrap rounded-full bg-brand-800 px-9 font-display text-[18px] font-bold text-white shadow-md transition hover:-translate-y-px hover:bg-[#113301]"
            >
              Get on the early list
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
          <a
            href="mailto:support@pmwise.ai?subject=Contact%20%E2%80%94%20PMWise"
            className="inline-flex min-h-[44px] items-center font-display text-[15px] font-medium text-brand-700 underline underline-offset-[3px]"
          >
            support@pmwise.ai
          </a>
        </div>
      </footer>
    </div>
  )
}
