/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        donut: {
          bg: 'var(--donut-bg)',
          primary: 'var(--donut-primary)',
          accent: 'var(--donut-accent)',
          text: 'var(--donut-text)',
          highlight: 'var(--donut-highlight)',
        },
      
        textShadow: {
          outline: '2px 2px 0px orange', // Adjust the size and color as needed
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
}