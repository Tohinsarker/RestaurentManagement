/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      minHeight:{
        'screen-500':'calc(100vh-500px)'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ]
}

