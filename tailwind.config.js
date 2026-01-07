/** @type {import('tailwindcss').Config} */
module.exports = {
  // NativeWind v4 usa content para identificar arquivos
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["NunitoSans_400Regular"],
        "sans-semibold": ["NunitoSans_600SemiBold"],
        "sans-bold": ["NunitoSans_700Bold"],
      },
    },
  },
  plugins: [],
}
