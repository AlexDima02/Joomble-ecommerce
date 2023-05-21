/** @type {import('tailwindcss').Config} */
export default {
  content: [

    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {

      colors:{

        "background-color": "#FFFFFF",
        "primary-color": "#F8F7F5",
        "text-color": "#212A2F",
        "button-color": "#656839"

      }


    },
  },
  plugins: [],
}

