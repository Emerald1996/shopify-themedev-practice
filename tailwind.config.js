/** @type {import('tailwindcss').Config} */
module.exports = {
  // changes to watch in this following json and liquid files below
  content: [
    './config/*.json',
    './layout/*.liquid',
    './assets/*.liquid',
    './sections/*.liquid',
    './snippets/*.liquid',
    './templates/*.liquid',
    './templates/*.json',
    './templates/customers/*.liquid',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

