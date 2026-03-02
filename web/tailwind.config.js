/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#33ff00',
        'dramatic-gray': '#cccccc',
        'dark-gray': '#444444',
      },
      fontFamily: {
        'jacquarda': ['"Jacquarda Bastarda 9"', 'serif'],
        'darker-grotesque': ['"Darker Grotesque"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
