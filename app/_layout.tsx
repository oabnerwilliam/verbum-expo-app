import { ConcertOne_400Regular } from "@expo-google-fonts/concert-one"
import {
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik"
import { useFonts } from "expo-font"
import { Slot } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import "../global.css"

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    ConcertOne_400Regular,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
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
