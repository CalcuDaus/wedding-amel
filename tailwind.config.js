/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: { screens: {
    '2xl': {'max': '1535px'},
    // => @media (max-width: 1535px) { ... }

    'xl': {'max': '1279px'},
    // => @media (max-width: 1279px) { ... }

    'lg': {'max': '1023px'},
    // => @media (max-width: 1023px) { ... }

    'md': {'max': '767px'},
    // => @media (max-width: 767px) { ... }

    'sm': {'max': '639px'},
    // => @media (max-width: 639px) { ... }

    'xs': {'max': '425px'},
    // => @media (max-width: 425px) { ... }
  },
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
        'cover-image': "url('../img/cover-pink-2.jpg')",
        'anime-1' : "url('../img/anime-wedding-2.jpg')",
        'anime-2' : "url('../img/anime-wedding-1.jpg')",
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}

