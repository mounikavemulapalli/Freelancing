// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         'spin-slow': 'spin 1.5s linear infinite',
//       },
//       colors: {
//         'dark-gray': '#1a1a1a',
//         'light-blue': '#00b4d8',
//       },
//     },
//   },
//   plugins: [],
// };

import daisyui from "daisyui"
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust paths to your project structure
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito Sans', 'Avant Garde', 'sans-serif'],
      },
    },
  },
  plugins: [daisyui,],
};
