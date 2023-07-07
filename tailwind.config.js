/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': "#939393",
        'secundary': '#e60012',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ]
}