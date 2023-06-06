/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      colors: {
        primaryGreen: '#00B200',
        lightGrey: '#EEEEEE',
        darkGrey: ' #D9D9D9',
        darkblack: '#161616',
      },
      screens: {
        sm: '0px',
        md: '600px',
        lg: '1100px',
      },
    },
  },
  plugins: [],
}
