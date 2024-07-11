/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
      './internal/templates/**/*.html',
      './internal/static/js/**/*.js',
  ],
  darkMode: 'class',
  theme: {
   extend: {
     colors: {
       primary: '#3E64FF',
       secondary: '#FF7F50',
       'custom-background': '#F0F0F0',
     },
     fontFamily: {
        serif: ['serif'],
        Lato: ['Lato', ...defaultTheme.fontFamily.sans]
     },
     fontSize: {
       '2xl': '12.5rem',
     },
   },
 },
  plugins: [],
}

