/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#405b72',
          light: '#536b82',
          dark: '#304b62'
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif']
      }
    },
  },
  plugins: [],
};