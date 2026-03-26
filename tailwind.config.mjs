/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream:    '#F5F3EF',
        parchment:'#ECEAE5',
        warm:     '#E0DDD6',
        clay:     '#C9A83C',
        terra:    '#A88828',
        rust:     '#7A6018',
        ink:      '#101C3A',
        charcoal: '#1D2F62',
        espresso: '#253A80',
        muted:    '#7D8799',
        blush:    '#ECD87E',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"Montserrat"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '7xl':  ['4.5rem',  { lineHeight: '1' }],
        '8xl':  ['6rem',    { lineHeight: '1' }],
        '9xl':  ['8rem',    { lineHeight: '0.9' }],
        '10xl': ['10rem',   { lineHeight: '0.85' }],
      },
      letterSpacing: {
        'ultra': '0.25em',
        'wider': '0.1em',
      },
      transitionTimingFunction: {
        'expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
