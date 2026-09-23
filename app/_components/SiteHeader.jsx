import Link from 'next/link'
import pmwiseIcon from '../pmwise_icon_color.png'

// One header for every page. Before this, each page carried its own copy and they had
// drifted: the pricing page had no header, no skip link and no way back except a text link
// at the foot of the page.
const NAV = [
  { href: '/#how-it-works', label: 'How it works' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/philosophy', label: 'Philosophy' },
  { href: '/security', label: 'Security' },
]

export const FOUNDER_MAILTO =
  'mailto:info@pmwise.ai?subject=Early%20access%20%E2%80%94%20PMWise'

export default function SiteHeader({ current }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only rounded-br-lg bg-brand-dark px-5 py-3 font-display font-semibold text-white focus:not-sr-only focus:absolute focus:left-0 focus:top-0 focus:z-[100]"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-50 border-b border-brand-dark/10 bg-white/90 backdrop-blur-md backdrop-saturate-150">
        <div className="mx-auto flex max-w-[1120px] items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-2.5 text-brand-dark no-underline">
            <img src={pmwiseIcon.src} alt="" width={30} height={30} className="h-[30px] w-[30px]" />
            <span className="font-display text-xl font-bold tracking-tight">
              PMWISE<span className="text-brand-700">.AI</span>
            </span>
            <span className="sr-only">— home</span>
          </Link>
          <nav aria-label="Primary" className="flex items-center gap-1">
            <ul className="hidden list-none items-center gap-1 md:flex">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={current === item.href ? 'page' : undefined}
                    className="inline-flex min-h-[44px] items-center rounded-full px-3.5 font-display text-[15px] font-medium text-brand-dark/80 transition-colors hover:bg-brand-50 hover:text-brand-dark aria-[current=page]:text-brand-800 aria-[current=page]:underline aria-[current=page]:underline-offset-[6px]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Small screens keep the one link people come for; the rest are in the footer. */}
            <Link
              href="/pricing"
              aria-current={current === '/pricing' ? 'page' : undefined}
              className="inline-flex min-h-[44px] items-center rounded-full px-3 font-display text-[15px] font-medium text-brand-dark/80 md:hidden"
            >
              Pricing
            </Link>
            <a
              href={FOUNDER_MAILTO}
              className="ml-1 inline-flex min-h-[44px] items-center whitespace-nowrap rounded-full bg-brand-700 px-[18px] font-display text-[15px] font-semibold text-white transition-colors hover:bg-brand-800"
            >
              Talk to Barnaby
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}
