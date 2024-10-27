/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./node_modules/flowbite/**/*.js"],
  
  theme: {
    extend: {},
    fontFamily:{
      'posthead': ["Be Vietnam Pro"," sans-serif"],
     
    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
  variant:{
    extend:{
      display:["focus-group"]
    }
  }
}

