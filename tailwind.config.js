/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  prefix: 'tw-',
  darkMode: false,
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
      opacity: ['disabled'],
    },
  },
  plugins: [],
};
