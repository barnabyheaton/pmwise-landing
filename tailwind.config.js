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
          primary: '#EC003F',
          dark: '#1F2937',
          800: '#61051C',
          700: '#880727',
          600: '#AE0933',
          500: '#EC003F',
          400: '#F42A5C',
          300: '#F65A81',
          200: '#F98BA6',
          100: '#FCC0CF',
          50: '#FEE7ED', // lightest brand tint — surfaces / eyebrows
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
