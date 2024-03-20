/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
          color_2: {
            primary: "    rgba(255, 12, 241, 1)",
            secondary: "rgba(250, 0, 135, 1) ",
          },         
      },
      keyframes: {
        shake: {
          '0%': { transform: 'translateX(0)' },
          '25%' : { transform: 'translateX(5px)' },
          '50%' : { transform: 'translateX(-5px)' },
          '75%' : { transform: 'translateX(5px)' },
          '100%' : { transform: 'translateX(0)' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        shake: 'shake 0.5s ease-in',
        slideIn: 'slideIn 0.5s ease-in-out',
        fadeOut: 'fadeOut 0.5s ease-out',
      },
    },
  },
  plugins: [],
};
