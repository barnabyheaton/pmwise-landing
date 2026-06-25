import pmwiseIcon from './pmwise_icon_color.png'

export const metadata = {
  title: 'PMWISE.AI — Life is a project',
  description:
    'Put the why at the centre of the change you’re trying to make. PMWISE.AI uses AI to put 70 years of project best practice in the hands of individuals.',
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
            href="mailto:support@pmwise.ai?subject=Contact%20%E2%80%94%20PMWise"
            className="inline-flex min-h-[44px] items-center px-2 font-medium text-brand-700 underline-offset-4 hover:underline"
          >
            Contact
          </a>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-3xl px-6 py-24">
          <img
            src={pmwiseIcon.src}
            alt=""
            width={96}
            height={96}
            className="mx-auto mb-8 h-24 w-24"
          />

          <p className="mb-4 text-center text-sm font-semibold uppercase tracking-wide text-brand-700">
            Life is a project
          </p>
          <h1 className="mb-6 text-center text-4xl font-bold leading-tight text-brand-dark sm:text-5xl">
            You can manage the change in your life, or sit back and hope it works out.
          </h1>
          <p className="mx-auto mb-16 max-w-2xl text-center text-xl leading-relaxed text-brand-dark">
            We all live in a constant stream of change. The scale and the speed vary, but the
            flow never stops — so really there are only two choices: actively steer the changes
            that matter to you, or hope they come good on their own.
          </p>

          <div className="space-y-6 text-lg leading-relaxed text-brand-dark">
            <p>
              Project management has been evolving for 70 years, with varying degrees of
              success. But the research keeps hitting the same ceiling: projects that fixate on{' '}
              <em>how much</em> and <em>how long</em> miss what they set out to do about{' '}
              <strong>70% of the time</strong>. And the whole discipline speaks in industrial,
              enterprise language — tools and jargon that feel alien to an ordinary person just
              trying to change something in their own life.
            </p>
            <p>
              Strip all that away and the process underneath is simple. A person, a team, an
              organisation feels some kind of pain. They picture a better place they’d like to
              be. They build a plan to get there. They put it in motion.
            </p>
            <p>
              The trouble has always been what happens next. The focus snaps, almost instantly,
              to <em>how long</em> and <em>how much</em> — and from there, that’s how the whole
              thing gets run. The underlying <strong>why</strong> gets lost in the noise.
              Projects lose focus, go rigid, or end up delivering the opposite of what set them
              off in the first place.
            </p>
            <p>
              PMWISE.AI is my attempt — as someone who’s spent 20 years inside these projects —
              to use AI to build a way of delivering change where the{' '}
              <strong>why is the centre and the core</strong> of everything that follows.
            </p>
            <p>
              I started out wanting to help enterprises rewire how they work. But somewhere in
              the building, I realised its real power is bigger than that. It isn’t only to learn
              the lessons of bad project practice, keep the pieces that genuinely work, and put
              benefits and rewards back at the heart of things. It’s also to show people
              something they rarely get told: <strong>the issues you most want to avoid are
              usually exactly where your greatest value is hiding.</strong>
            </p>
          </div>

          <blockquote className="my-12 border-l-4 border-brand-600 pl-6 text-2xl font-semibold leading-snug text-brand-dark">
            The revolution comes from the ground up — not the top down.
          </blockquote>

          <div className="space-y-6 text-lg leading-relaxed text-brand-dark">
            <p>
              Here’s the part that took me longest to see. The power of this tool might one day
              help enterprises change — but that kind of change comes from the ground up. The
              real power of PMWISE.AI is to help <strong>individuals</strong> manage the changes
              in their own lives.
            </p>
            <p>
              It puts 70 years of project best practice into the hands of one person. It gives
              you, in effect, a whole team of delivery specialists to help you find your way. And
              most importantly, it helps you describe the{' '}
              <strong>future you’re actually trying to reach</strong> — built on the real{' '}
              <em>why</em> underneath the thing you’re trying to resolve.
            </p>
          </div>

          <div className="mt-16 rounded-lg bg-brand-100 p-8 text-center">
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-brand-dark">
              I’m building this in the open, on my own, from the Huon Valley in Tasmania — with a
              lot of help from AI and no shortage of mistakes. No hype, no guarantees. Just the
              method, the journey, and the proof as it comes. If you’ve got a change you’d rather
              steer than hope your way through, come along.
            </p>
            <a
              href="mailto:info@pmwise.ai?subject=Early%20access%20%E2%80%94%20PMWise"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-brand-700 px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-brand-800"
            >
              Get on the early list
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-brand-dark/10 bg-brand-100/40 py-8 text-center text-brand-dark">
        <p>&copy; 2026 PMWISE.AI. All rights reserved.</p>
        <p className="mt-2 text-sm">
          <a
            href="mailto:support@pmwise.ai?subject=Contact%20%E2%80%94%20PMWise"
            className="text-brand-700 underline-offset-4 hover:underline"
          >
            support@pmwise.ai
          </a>
        </p>
      </footer>
    </>
  )
}
