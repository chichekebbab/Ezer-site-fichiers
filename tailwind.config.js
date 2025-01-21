/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(113, 145, 170)',
          light: 'rgb(133, 165, 190)',
          dark: 'rgb(93, 125, 150)'
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif']
      }
    },
  },
  plugins: [],
};