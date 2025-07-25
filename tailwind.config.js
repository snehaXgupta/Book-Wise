/** @type {import('tailwindcss').Config} */

const { BiFontSize } = require('react-icons/bi');

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        coffee: '#6F4E37', // warm brown
        'coffee-dark': '#4B2E19',
        cream: '#FFF8F2', // soft cream
        sky: {
          DEFAULT: '#B3D8F7', // sky blue for check pattern
        },
      },
      fontFamily: {
        cafe: ["'Comic Neue'", 'cursive', 'sans-serif'],
      },
      backgroundImage: {
        'check-sky': 'repeating-linear-gradient(45deg, #B3D8F7 0 10px, transparent 10px 20px), repeating-linear-gradient(-45deg, #B3D8F7 0 10px, #FFF8F2 10px 20px)',
      },
      spacing: {
        '90': '22.5rem', // 360px
      },
    },
  },
  safelist: [
    'bg-coffee', 'text-coffee', 'bg-cream', 'text-cream', 'bg-sky', 'bg-check-sky',
    'hover:bg-coffee-dark', 'font-cafe',
  ],
  plugins: [],
} 