/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-purple': '#B2B3F1',
        'primary': '#130338',
        'customPurple': '#130338',
      },
      fontFamily: {
        custom: ['Inter SemiBold', 'sans-serif'],
      },
    },
    screens: {
      'sm': '640px',  
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
  },
  plugins: [],
}