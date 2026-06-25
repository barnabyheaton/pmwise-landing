import './globals.css'

export const metadata = {
  title: 'PMWISE.AI — Life is a project',
  description:
    'Put the why at the centre of the change you’re trying to make. PMWISE.AI uses AI to put 70 years of project best practice in the hands of individuals.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <body>{children}</body>
    </html>
  )
}
