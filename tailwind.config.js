/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      colors:{
        'youtube-red' : '#ff0000'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
