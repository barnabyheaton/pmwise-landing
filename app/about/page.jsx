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

          <p className="mt-16 rounded-xl border-2 border-dashed border-brand-dark/40 p-6 font-display text-[17px] text-brand-dark/80">
            [Barnaby to write: who I am]
          </p>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
