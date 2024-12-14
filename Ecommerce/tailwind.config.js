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
        lightGrayWeight:'rgb(249,249,249)',
        customGray: 'rgb(74, 74, 74)',
      },
      scale: {
        103: '1.03',
      },
      height: {
        '25': '6.25rem', // Adds a custom height
      },
      width:{
        "90":"22.5rem"
      },
      inset: {
        '204': '20.4%', // Custom utility for left: 20%
      },
      spacing: {
        "13.8": "3.690rem"
      }
    },
  },
}

