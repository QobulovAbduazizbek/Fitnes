/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'foto': "url('/src/Img/foto4.webp')", // Yo'lda noto'g'ri ishlatilgan `../Img/foto4.webp`, to'g'ri yo'l ko'rsating
      },
      fontFamily: {
        'livvic': ['Livvic', 'sans-serif'],
      },
      colors: {
        '014e56': '#014e56',
        'f67e7e': '#f67e7e',
        '79c8c7': '#79c8c7',
        '2c6269': '#2c6269',
        '004047': '#004047',
        '012f34': '#012f34',
        '002529': '#002529',
        'f3f4f6': '#ebecf0',
        '087ea4': '#087ea4',
        'ebecf0': '#ebecf0',
        '63b700': '#63b700',
        'AA': 'rgb(24, 25, 29)',
      },
      maxWidth: {
        base: '1150px',
      },
      scale: {
        '110': '1.10',
      },
      scale: ['group-hover'],
      
    },
    screens: {
      '940': '940px',
      '870': '870px',
    },
  },
  plugins: [],
}
