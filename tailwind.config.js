/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

const MyTheme = {
  colors: {
    green: {
      DEFAULT: '#3BA676',
      '50': '#B4E4CF',
      '100': '#A5DFC5',
      '200': '#87D4B2',
      '300': '#69CA9E',
      '400': '#4BBF8B',
      '500': '#3BA676',
      '600': '#2C7D59',
      '700': '#1E533B',
      '800': '#0F2A1E',
      '900': '#000000',
    },
    blue: {
      DEFAULT: '#0096FF',
      '50': '#B8E2FF',
      '100': '#A3D9FF',
      '200': '#7AC8FF',
      '300': '#52B8FF',
      '400': '#29A7FF',
      '500': '#0096FF',
      '600': '#0075C7',
      '700': '#00548F',
      '800': '#003357',
      '900': '#00121F',
    },
    red: {
      DEFAULT: '#FF6464',
      '50': '#FFFFFF',
      '100': '#FFFFFF',
      '200': '#FFDEDE',
      '300': '#FFB6B6',
      '400': '#FF8D8D',
      '500': '#FF6464',
      '600': '#FF2C2C',
      '700': '#F30000',
      '800': '#BB0000',
      '900': '#830000',
    },
  },
}

export default <Partial<Config>>{
  darkMode: 'class',
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './App.{js,ts,vue}',
    './app.{js,ts,vue}',
    './Error.{js,ts,vue}',
    './error.{js,ts,vue}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem',
      },
      colors: {
        primary: MyTheme.colors.green,
        // if want to change primary color to blue
        // primary: MyTheme.colors.blue,
        green: MyTheme.colors.green,
        blue: MyTheme.colors.blue,
        red: MyTheme.colors.red,
        slate: colors.slate,
      },
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}

// export default {
//   darkMode: 'class',
//   content: [
//     "./components/**/*.{js,vue,ts}",
//     "./layouts/**/*.vue",
//     "./pages/**/*.vue",
//     "./plugins/**/*.{js,ts}",
//     "./app.vue",
//     "./error.vue",
//   ],
//   theme: {
//     fontSize: {
//       ssm: '0.6rem',
//       sm: '0.8rem',
//       base: '1rem',
//       xl: '1.25rem',
//       '2xl': '1.563rem',
//       '3xl': '1.953rem',
//       '4xl': '2.441rem',
//       '5xl': '3.052rem',
//     },
//     container: {
//       padding: {
//         DEFAULT: '1rem',
//         sm: '2rem',
//         lg: '4rem',
//         xl: '5rem',
//         '2xl': '6rem',
//       },
//     },
//     extend: {
//       keyframes: {
//         colors: {
//           'slate-800': '#1e293b',
//           'slate-950': '#0f172a',
//         },
//         backgroundImage: {
//           'gradient-to-b': 'linear-gradient(to bottom, #1e293b, #0f172a)',
//         },
//         rain: {
//           '0%': { transform: 'translateY(-100%)' },
//           '100%': { transform: 'translateY(100%)' },
//         },
//         move: {
//           '0%': { transform: 'translateX(0)' },
//           '100%': { transform: 'translateX(-100%)' },
//         },
//         float: {
//           '0%': { transform: 'translateY(0)' },
//           '50%': { transform: 'translateY(-10px)' },
//           '100%': { transform: 'translateY(0)' },
//         },
//       },
//       animation: {
//         rain: 'rain 1s linear infinite',
//         move: 'move 20s linear infinite',
//         float: 'float 3s ease-in-out infinite',
//       },
//     },
//   },
//   plugins: [
//     require('@tailwindcss/forms'),
//     // require('@tailwindcss/aspect-ratio'),
//     // require('@tailwindcss/typography'),
//     // require('tailwindcss-children'),
//   ],
// }

