import { Config } from 'tailwindcss'

export default <Config>{
  purge: [],
  content: [`components/**/*.{vue,ts}`, `layouts/**/*.vue`, `pages/**/*.vue`],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
