/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './screens/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        main_color: '#050505',
        navbars: '#004FFF',
        notActiveColor: 'black',
        activeColor: 'white',
        calendarText: '#f5fefc',
        borderOnBlack: '#232428',
        gradientBackground: 'rgb(236, 229, 232)',
        gradient: 'radial-gradient(circle, rgba(236,229,232,1) 0%, rgba(148,187,233,1) 100%)',
      },
    },
  },
  plugins: [],
};
