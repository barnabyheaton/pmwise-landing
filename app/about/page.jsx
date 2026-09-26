import SiteHeader from '../_components/SiteHeader'
import SiteFooter from '../_components/SiteFooter'

export const metadata = {
  title: 'About — PMWISE.AI',
}

// Barnaby's words, verbatim (25 Sep 2026). Do not smooth, split or "improve" them —
// see CLAUDE.md, "Website copy is Barnaby's words". The rest of this page is written with
// him, starting from here.

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
              closing quote). "[not]" awaits his confirmation. */}
          <div className="mt-12 space-y-6 text-[20px] leading-[1.65] text-brand-dark/85">
            <p>
              When I was first exposed to organised project management 20 years ago, I took to it
              like a duck to water, because I had effectively been managing projects all my life. I
              just didn&rsquo;t know that&rsquo;s what it was called, or that there were competing
              schools of thought about the best way to deliver. I found all of this incredibly
              exciting but what I didn&rsquo;t realise was project management was then (and still to
              a lesser extent now) [not] considered a &lsquo;real profession&rsquo;. PMs were seen as
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

          <p className="mt-16 rounded-xl border-2 border-dashed border-brand-dark/40 p-6 font-display text-[17px] text-brand-dark/80">
            [Barnaby to write: section 3 — what GKB does differently]
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
