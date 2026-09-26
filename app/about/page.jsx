import SiteHeader from '../_components/SiteHeader'
import SiteFooter from '../_components/SiteFooter'

export const metadata = {
  title: 'About — PMWISE.AI',
}

// Every word a visitor reads on this page is Barnaby's (25–26 Sep 2026), typos aside.
// Do not smooth, split or "improve" it — see CLAUDE.md, "Website copy is Barnaby's words".

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden font-body text-brand-dark">
      <SiteHeader current="/about" />

      <main id="main">
        <section className="mx-auto max-w-[760px] px-4 pb-24 pt-16 sm:px-6">
          {/* The page needs one heading for screen readers; the nav label is reused. */}
          <h1 className="sr-only">About</h1>

          <p className="font-display text-[clamp(26px,3.4vw,38px)] font-semibold leading-[1.25] tracking-[-0.015em] [text-wrap:pretty]">
            GKB is the method I would have used and PMWise is the tool I wished I had, if people
            had ever stopped to ask a PM how to best run a project, but for 20 years no one has.
          </p>

          {/* Section 2 — Barnaby's words, 26 Sep 2026. Typos only fixed ("teh", "of the rails",
              closing quote); "not" added, confirmed by him. */}
          <hr className="my-14 border-brand-dark/15" />
          <div className="space-y-6 text-[20px] leading-[1.65] text-brand-dark/85">
            <p>
              When I was first exposed to organised project management 20 years ago, I took to it
              like a duck to water, because I had effectively been managing projects all my life. I
              just didn&rsquo;t know that&rsquo;s what it was called, or that there were competing
              schools of thought about the best way to deliver. I found all of this incredibly
              exciting but what I didn&rsquo;t realise was project management was then (and still to
              a lesser extent now) not considered a &lsquo;real profession&rsquo;. PMs were seen as
              unnecessary overheads as the client knows what they want, how much it will cost and
              how long it will take.
            </p>
            <p>
              Projects end so I have always either been in a project or looking for the next one.
              With increasing rapidity, I found each new job (for the most part) was being offered
              because of some variation of it had come off the rails and the client needed it
              fixing. But the problem is these projects were up and running. They were staffed,
              designs had been chosen, shovels were in grounds (coffee mostly).
            </p>
            <p>
              What I then usually found is the project hadn&rsquo;t been well shaped, key risks had
              not been identified, compounding risks had been minimised, motivating benefits were
              less than clear, stakeholders were misunderstood and boundaries were non-existent.
            </p>
            <p>But still the client expected me, the new guy to fix it.</p>
            <p>PMWise and GKB is how I fix it.</p>
          </div>

          {/* Section 3 — Barnaby's words, 26 Sep 2026. Typos fixed; second "The issue is" cut
              and the closing line replaced, both at his instruction. */}
          <hr className="my-14 border-brand-dark/15" />
          <div className="space-y-6 text-[20px] leading-[1.65] text-brand-dark/85">
            <p>
              We have all seen the building shows, happy couple with big dreams and the host asks
              &lsquo;how long and how much&rsquo;. Cut to the end of the show, years behind and way
              over budget, the couple barely keeping it together, the host smugly pleased. Great
              drama, woeful project management.
            </p>
            <p>
              The issue is people have a set amount of money, they have an arbitrary deadline
              (it&rsquo;s always Christmas). They set these two as the immovable bookends then try
              and shoe horn everything in between. Partner 1&rsquo;s everything is not the same as
              partner 2&rsquo;s, and the TV cameras eat it up.
            </p>
            <p>
              GKB does many things different to traditional project frameworks, but the first thing
              it does is it properly and fully describes the whys and the whats of the project
              BEFORE it talks about the how longs and the how muchs.
            </p>
            <p>
              With GKB and PMWise the couple explore and describe their dream home (or any other
              project) which defines what is in and what is not (very important), why they are doing
              what they are doing, what level of quality they need to achieve, who will need to be a
              part of the team, what are the things that could and possibly will go wrong and how to
              manage and account for them ahead of time, and only then do we talk about time and
              money.
            </p>
            <p>
              Fully informed the couple might see they need more money or more time, they can see
              what each other&rsquo;s &lsquo;everythings&rsquo; include and maybe negotiate down to
              something that meets their core needs while still sitting within their budgets.
            </p>
            <p>They might see Christmas was never going to happen and rethink the whole idea.</p>
            <p className="font-display text-[22px] font-semibold text-brand-dark">
              Stopping a bad project early is as successful as delivering a good one on time and on
              budget.
            </p>
          </div>

          {/* Section 5 — Barnaby's words, 26 Sep 2026. Commas added around the "Problem to
              Plan" clause so it parses. The "how it's built" link waits for that page to exist. */}
          <hr className="my-14 border-brand-dark/15" />
          <div className="space-y-6 text-[20px] leading-[1.65] text-brand-dark/85">
            <p>
              The first half, &ldquo;Problem to Plan&rdquo;, where we convert a nagging problem into
              a fully fleshed out plan, is built. We are currently working on the client management
              and application administration piece, hoping to be finished shortly (thanks to Opus
              5.5). The last piece will be delivering the plan which we call &ldquo;Do, Doing,
              Done&rdquo; or &ldquo;Do to Done&rdquo;.
            </p>
            <p>We&rsquo;re hoping to be done by Christmas(!)</p>
          </div>

          {/* Section 6 — Barnaby's words, 26 Sep 2026. Comma added before the address. */}
          <hr className="my-14 border-brand-dark/15" />
          <p className="text-[20px] leading-[1.65] text-brand-dark/85">
            If you would like to talk to me about how to apply GKB or join PMWise when it is ready,{' '}
            <a
              href="mailto:barnaby@pmwise.ai?subject=About%20PMWise"
              className="font-semibold text-brand-700 underline underline-offset-[3px] hover:text-brand-800"
            >
              barnaby@pmwise.ai
            </a>
            .
          </p>

          {/* Acknowledgement of Country — kept at his instruction (26 Sep 2026). */}
          <hr className="my-14 border-brand-dark/15" />
          <p className="text-[17px] leading-[1.6] text-brand-dark/80">
            PMWISE is made in Cygnet, in the Huon Valley, on the land of the Melukerdee people, one
            of the palawa nations of lutruwita/Tasmania. I acknowledge them as the Traditional
            Owners and Custodians of this Country, and pay my respects to Elders past and present.
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
