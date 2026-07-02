/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // PMWise brand tokens — single source of truth (see DESIGN.md / CLAUDE.md).
      colors: {
        brand: {
          primary: '#58CC03',
          dark: '#1F2937',
          800: '#214B01',
          700: '#367E02',
          600: '#4CB003',
          500: '#58CC03',
          400: '#7BFC1D',
          300: '#98FC4F',
          200: '#B6FD81',
          100: '#D3FEB4',
          50: '#F4FEE9', // lightest brand tint — surfaces / eyebrows
        },
      },
      // Font tokens wired to next/font CSS variables set in app/layout.jsx.
      fontFamily: {
        display: ['var(--font-display)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
