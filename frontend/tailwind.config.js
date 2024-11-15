/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'leader': ['"Dela Gothic One"', 'ui-serif'],
        'content': ['"Albert Sans"', 'ui-sans-serif'],
      }
    },
  },
  plugins: [],
};
