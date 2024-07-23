/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
      './internal/templates/**/*.templ',
      './internal/templates/partials/**/*.templ',
      './internal/static/js/**/*.js',
  ],
  darkMode: 'class',
  theme: {
   extend: {
     colors: {
       primary: 'white',
       secondary: '#FF7F50',
       'active-link': '#F0F0F0',
       'custom-accent': '#1c282e',
       'custom-background': '#181818',
       'custom-gradiant': '#1c282e',
     },
    backgroundImage: {
        'gradient-45': 'linear-gradient(60deg, var(--tw-gradient-stops))',
        'gradient-double45': 'linear-gradient(150deg, var(--tw-gradient-stops)), linear-gradient(240deg, var(--tw-gradient-stops))',
        'gradient-fancy': 'linear-gradient(217deg, #1c282e,#181818 30.71%), linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)',
      },
     fontFamily: {
        serif: ['serif'],
        Lato: ['Lato', ...defaultTheme.fontFamily.sans]
     },
   },
 },
  plugins: [],
}

