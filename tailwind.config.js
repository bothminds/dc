/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        donut: {
          bg: 'var(--donut-bg)',
          "dark:bg": 'var(--donut-bg-dark)',
          primary: 'var(--donut-primary)',
          accent: 'var(--donut-accent)',
          text: 'var(--donut-text)',
          "dark:text": 'var(--donut-text-dark)',
          highlight: 'var(--donut-highlight)',
           border: 'var(--color-border)',
        },
      
        textShadow: {
          outline: '2px 2px 0px orange', // Adjust the size and color as needed
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}