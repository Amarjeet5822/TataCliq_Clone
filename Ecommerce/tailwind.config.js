/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
      },
      colors: {
        lightGray: 'rgb(236,236,236)',
        lightGrayWeight:'rgb(249,249,249)'
      },
      scale: {
        103: '1.03',
      },
    },
  },
}

