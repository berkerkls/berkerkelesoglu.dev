/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "370px",
      sm: "430px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },

    extend: {
      colors: {
        lightPrimary: "#f9f9f9",
        lightSecondary: "#f5f5f5",
        darkPrimary: "#141414",
        darkSecondary: "#757575",
        darkShadow: "#1e1e1e",
      },
    },
  },
  plugins: [
    require("daisyui"),
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
      },
    }),
  ],
  daisyui: {
    themes: false,
  },
  darkMode: "class",
};
