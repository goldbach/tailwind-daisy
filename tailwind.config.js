const colors = require('tailwindcss/colors')

export default {

  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {}
  },

  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: colors.emerald["800"],
          "primary-content": colors.white,
          secondary: colors.amber["600"],
          error: colors.rose["800"],
          "error-content": colors.white,
          "base-200": "#F7F7F7",
        },
      }
    ],
  },

  plugins: [require("daisyui"),],
};