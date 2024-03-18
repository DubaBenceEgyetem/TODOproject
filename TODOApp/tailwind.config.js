/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        random:{
            color_1:{
              "primary" : "  rgba(93, 12, 255, 1)",
              "secondary" : " rgba(155, 0, 250, 1)"
            },
            color_2:{
              "primary" : "    rgba(255, 12, 241, 1)",
              "secondary" : "rgba(250, 0, 135, 1) "
            },
            color_3:{
              "primary" : "    rgba(20, 159, 255, 1)",
              "secondary" : "  rgba(20, 159, 255, 1)"
            }
        },
      },
    },
  },
  plugins: [],
}