/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";
export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      fontFamily: {
        "leader": ['"Dela Gothic One"', "ui-serif"],
        "content": ['"Albert Sans"', "ui-sans-serif"],
      },
      colors: {
        sorbet: "#FEBAED",
        tangerine: "#FF6C1F",
        palmleaf: "#AEA433",
        sunshine: "#FDB52A",
        pool: "#76B3D0 ",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
