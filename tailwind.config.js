/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements-react/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#230401",
        "second": "#ecdcc9",
        "third": "#ba8e6e",
        "active": "#00A2C5",
        "gray": "#EDEDED",
      }
    },
  },
  plugins: [require("tw-elements-react/dist/plugin.cjs")]
}
