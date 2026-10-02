/** @type {import('tailwindcss').Config} */
const helveticaNeue = ['"Helvetica Neue ME"', 'Helvetica', 'Arial', 'sans-serif']

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#efeee9',
        ink: '#0b0b0b',
      },
      fontFamily: {
        hn: helveticaNeue,
        sans: helveticaNeue,
        serif: helveticaNeue,
      },
    },
  },
  plugins: [],
}
