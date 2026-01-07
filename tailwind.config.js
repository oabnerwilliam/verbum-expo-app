/** @type {import('tailwindcss').Config} */
module.exports = {
  // NativeWind v4 usa content para identificar arquivos
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
