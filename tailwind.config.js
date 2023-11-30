/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '370px',
      sm: '430px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {},
  },
  plugins: [
    require('daisyui'),
    nextui({
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {}, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {}, // dark theme colors
        },
        // modern: {
        //   extend: 'dark', // <- inherit default values from dark theme
        //   colors: {
        //     background: '#0D001A',
        //     foreground: '#ffffff',
        //     primary: {
        //       50: '#3B096C',
        //       100: '#520F83',
        //       200: '#7318A2',
        //       300: '#9823C2',
        //       400: '#c031e2',
        //       500: '#DD62ED',
        //       600: '#F182F6',
        //       700: '#FCADF9',
        //       800: '#FDD5F9',
        //       900: '#FEECFE',
        //       DEFAULT: '#DD62ED',
        //       foreground: '#ffffff',
        //     },
        //     focus: '#F182F6',
        //   },
        //   layout: {
        //     disabledOpacity: '0.3',
        //     radius: {
        //       small: '1px',
        //       medium: '2px',
        //       large: '4px',
        //     },
        //     borderWidth: {
        //       small: '1px',
        //       medium: '2px',
        //       large: '3px',
        //     },
        //   },
        // },
      },
    }),
  ],
  daisyui: {
    themes: false,
  },
  darkMode: 'class',
};
