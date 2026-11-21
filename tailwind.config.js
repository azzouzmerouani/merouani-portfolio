/** @type {import('tailwindcss').Config} */

// Design tokens modelled on volz.app.
// Semantic colours (canvas, heading, body, …) come from CSS variables set by the
// .tone-light / .tone-mist / .tone-navy classes in index.css, so one component
// renders correctly on any section background.
const semantic = (name) => `rgb(var(--c-${name}) / <alpha-value>)`

const satoshi = ['Satoshi', '-apple-system', 'system-ui', '"Segoe UI"', 'sans-serif']

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#074183', deep: '#062a57', ink: '#04203f' },
        sky: { DEFAULT: '#00b2ff', soft: '#4db8f5' },
        sun: '#f5a623',
        slate: '#2d353d',
        cloud: '#eef2f7',
        mist: '#f8fafb',

        canvas: semantic('canvas'),
        heading: semantic('heading'),
        body: semantic('body'),
        muted: semantic('muted'),
        line: semantic('line'),
        surface: semantic('surface'),
        chip: semantic('chip'),
      },
      fontFamily: {
        sans: satoshi,
      },
      borderRadius: {
        card: '1.75rem',
      },
      boxShadow: {
        card: '0 1px 2px rgb(7 65 131 / 0.05), 0 18px 40px -22px rgb(7 65 131 / 0.35)',
        lift: '0 2px 4px rgb(7 65 131 / 0.06), 0 28px 60px -24px rgb(7 65 131 / 0.45)',
        float: '0 14px 40px -10px rgb(7 65 131 / 0.35)',
      },
    },
  },
  plugins: [],
}
