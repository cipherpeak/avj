/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      serif: ['Fraunces', 'serif'],
      sans: ['Manrope', 'sans-serif'],
    },
    extend: {
      colors: {
        'soft-white': '#FAFAF9',
        'charcoal': '#2D2D2D',
        'champagne': '#D4AF37',
        'champagne-light': '#E8D5A3',
      },
    },
  },
  plugins: [],
}
