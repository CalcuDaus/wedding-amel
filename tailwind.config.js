/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        montserrat : ['montserrat'],
        script : ['Style Script'],
        moon : ['Moon Dance'],
        dancing : ['Dancing Script'],
      },
      colors :{
        csBackground : ['#ECD7D2'],
        csBackgroundBlue : ['#D9D9D9'],
        csLightRed : ['#F75463'],
        csLightBlue : ['#B7D1E0'],
        csLightBlueHover : ['#739AB1'],
      },
      backgroundImage: {
        'cover-image': "url('../../src/img/cover-pink-2.jpg')",
        'anime-1' : "url('../../src/img/anime-wedding-2.jpg')",
        'anime-2' : "url('../../src/img/anime-wedding-1.jpg')",
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}

