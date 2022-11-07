'use strict'

const {theme} = require('../dist/tailwind.cjs')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/index.html'],
  theme,
  plugins: [require('@tailwindcss/typography')],
}
