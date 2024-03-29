const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {

    screens: {
      'xs': '340px',
      // => @media (min-width: 640px) { ... }

      'sm': '400px',
      'md': '666px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1920px',
      '3xl': '1999px',
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.blueGray,
      blue: colors.blue,
      teal: colors.teal,
      amber: colors.amber,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
