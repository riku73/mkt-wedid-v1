/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './output/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'midnight-purple': '#211056',
        'brand': '#d1f383',
        'heading-color': '#111',
        'body-color': '#474747',
        'body-text-light': '#d9d9d9',
        'light-peach': '#ffedcd',
        'pink': '#ebe6fd',
        'border': '#b3b3b3',
        'light-border': '#dedede',
      },
      fontFamily: {
        'heading': ['Inter', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'h1': ['70px', { lineHeight: '1.07', letterSpacing: '-2px' }],
        'h2': ['45px', { lineHeight: '1.2', letterSpacing: '-2px' }],
        'h3': ['35px', { lineHeight: '1.3', letterSpacing: '-2px' }],
        'h4': ['23px', { lineHeight: '1.4', letterSpacing: '-1px' }],
        'h5': ['20px', { lineHeight: '1.5', letterSpacing: '-1px' }],
      },
      maxWidth: {
        'container-large': '1630px',
        'container': '1320px',
        'container-medium': '1300px',
        'container-small': '598px',
      },
      spacing: {
        'section': '120px',
        'section-tablet': '60px',
        'section-mobile': '50px',
      },
    },
  },
  plugins: [],
}