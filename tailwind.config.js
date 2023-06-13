/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'],
      },
      colors: {
        primaryGreen: '#00B200',
        lightGrey: '#EEEEEE',
        darkGrey: ' #D9D9D9',
        darkBlack: '#161616',
      },
      screens: {
        sm: '0px',
        md: '800px',
        lg: '1200px',
      },
      backgroundImage: {
        'radial-black':
          'radial-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.5))',
      },
      display: ['group-hover'],
      backgroundColor: ['group-hover'],
    },
  },
  plugins: [],
}
