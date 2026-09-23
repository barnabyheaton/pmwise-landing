import Link from 'next/link'
import pmwiseIcon from '../pmwise_icon_color.png'

const LINKS = [
  { href: '/#how-it-works', label: 'How it works' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/philosophy', label: 'Philosophy' },
  { href: '/security', label: 'Security' },
  { href: 'https://www.linkedin.com/company/pmwise-ai/', label: 'LinkedIn' },
  { href: 'mailto:support@pmwise.ai?subject=Contact%20%E2%80%94%20PMWise', label: 'support@pmwise.ai' },
]

export default function SiteFooter() {
  return (
    <footer className="border-t border-brand-dark/10">
      <div className="mx-auto grid max-w-[1120px] gap-6 px-4 py-10 sm:px-6 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={pmwiseIcon.src} alt="" width={26} height={26} className="h-[26px] w-[26px]" />
            <span className="font-display text-[17px] font-bold text-brand-dark">
              PMWISE<span className="text-brand-700">.AI</span>
            </span>
          </div>
          <p className="mt-3 max-w-[48ch] text-[15px] leading-[1.5] text-brand-dark/75">
            Built in the open from the Huon Valley, Tasmania. PMWISE is not yet on sale — nobody
            is charged until PMWISE is a registered company with lawyer-reviewed terms.
          </p>
          <p className="mt-2 text-[15px] text-brand-dark/75">© 2026 PMWISE.AI</p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid list-none grid-cols-2 gap-x-6 sm:grid-cols-3 md:grid-cols-2">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="inline-flex min-h-[44px] items-center font-display text-[15px] font-medium text-brand-700 underline underline-offset-[3px] hover:text-brand-800"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
