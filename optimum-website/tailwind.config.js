//** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mypink: '#D37777',
        myblue: '#6FA4EB',
        mygrey: '#707070',
        mydarkblue: '#00437A'
      },
    },
  },
  plugins: [],
}
