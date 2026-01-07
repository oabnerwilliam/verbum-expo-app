import { ConcertOne_400Regular } from "@expo-google-fonts/concert-one"
import { useFonts } from "expo-font"
import { Slot } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import "../global.css"

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    ConcertOne_400Regular,
  })

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return <Slot />
}
