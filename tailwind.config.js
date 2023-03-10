const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html', ],
  theme: {
    extend:{
      fontFamily: {
        pops: ['Poppins', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [],
}
