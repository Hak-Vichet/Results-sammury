/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': 'hsl(252, 100%, 67%)',
        'cycle': 'hsla(256, 72%, 46%, 1)'
      },
    },
  },
  plugins: [],
}

