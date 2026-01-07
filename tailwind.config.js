/** @type {import('tailwindcss').Config} */
module.exports = {
  // NativeWind v4 usa content para identificar arquivos
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik_400Regular"],
        "sans-medium": ["Rubik_500Medium"],
        "sans-semibold": ["Rubik_600SemiBold"],
        "sans-bold": ["Rubik_700Bold"],
      },
    },
  },
  plugins: [],
}
