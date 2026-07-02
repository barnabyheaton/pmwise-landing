import './globals.css'
import { Bricolage_Grotesque, Newsreader } from 'next/font/google'

// Headings / UI — distinctive modern grotesque.
const display = Bricolage_Grotesque({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap',
})

// Body — editorial serif that suits the personal, essay-driven voice.
const body = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata = {
  title: 'PMWISE.AI — Life is a project',
  description:
    'Enterprise capable, individual accessible. PMWISE.AI puts 70 years of project best practice in the hands of one person — with the why at the centre.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU" className={`${display.variable} ${body.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  )
}
