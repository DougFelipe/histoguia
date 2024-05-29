/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'jet': '#292929',
        'cinereous': '#A58E8D',
        'customPurple': '#130338',
      },
      fontFamily: {
        custom: ['Inter SemiBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

