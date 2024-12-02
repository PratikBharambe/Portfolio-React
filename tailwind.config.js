/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "tangerine": ['Tangerine', 'sans-serif'],
        "graduate": ['Graduate', 'sans-serif'],
        "sectiontitle" : ['Edu AU VIC WA NT Arrows', 'sans-serif'],
        "slabo" : ['Slabo', 'sans-serif'],
        "ntHand" : ['Edu AU VIC WA NT Hand', 'cursive'],
      }
    },
  },
  plugins: [],
}