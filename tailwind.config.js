/** @type {import('tailwindcss').Config} */
//const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
      './internal/templates/**/*.templ',
      './internal/static/js/**/*.js',
  ],
  darkMode: 'class',
  theme: {
   extend: {
     colors: {
       primary: 'white',
       secondary: '#FF7F50',
       'custom-gray': '#c7c5c5',
       'active-link': '#F0F0F0',
       'custom-accent': '#1c282e',
       'custom-background': '#1b1b1b',
       'custom-background-lighter': '#363636',
       'custom-gradiant': '#1c282e',
       'custom-purple': '#6A0DAD',
     },
    width: {
      'text-width-max': '600px', // Now you can use class="w-custom"
    },
    backgroundImage: {
        'gradient-45': 'linear-gradient(60deg, var(--tw-gradient-stops))',
        'gradient-double45': 'linear-gradient(150deg, var(--tw-gradient-stops)), linear-gradient(240deg, var(--tw-gradient-stops))',
        'gradient-fancy': 'linear-gradient(217deg, #1c282e,#181818 30.71%), linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)',
      },
     fontFamily: {
        serif: ['serif'],
        Lato: ['Lato']
     },
   },
  },
  plugins:[
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ]
}

