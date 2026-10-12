import SiteHeader from '../_components/SiteHeader'
import SiteFooter from '../_components/SiteFooter'
import AcknowledgementVideo from '../_components/AcknowledgementVideo'

export const metadata = {
  title: 'Acknowledgement of Country — PMWISE.AI',
  description:
    'Barnaby Heaton’s Acknowledgement of Country for PMWISE, made in Cygnet on Melukerdee Country, lutruwita/Tasmania.',
}

// Barnaby, 12 Oct 2026: the Acknowledgement of Country has its own top-level page, and every
// acknowledgement at the foot of the other pages links here. The written acknowledgement is his
// (26 Sep 2026, as on the About page and in the footer); the video and transcript are his words.
export default function AcknowledgementOfCountryPage() {
  return (
    <div className="overflow-x-hidden font-body text-brand-dark">
      <SiteHeader current="/acknowledgement-of-country" />

      <main id="main">
        <section className="mx-auto max-w-[760px] px-4 pb-24 pt-16 sm:px-6">
          <h1 className="font-display text-[clamp(32px,4.4vw,48px)] font-bold leading-[1.1] tracking-[-0.025em] [text-wrap:balance]">
            Acknowledgement of Country
          </h1>
          <p className="mt-6 text-[20px] leading-[1.65] text-brand-dark/85">
            PMWISE is made in Cygnet, in the Huon Valley, on the land of the Melukerdee people, one
            of the palawa nations of lutruwita/Tasmania. I acknowledge them as the Traditional
            Owners and Custodians of this Country, and pay my respects to Elders past and present.
          </p>
          <AcknowledgementVideo />
        </section>
      </main>

      <SiteFooter onAcknowledgementPage />
    </div>
  )
}
