import { ConcertOne_400Regular } from "@expo-google-fonts/concert-one"
import {
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
} from "@expo-google-fonts/rubik"
import { useFonts } from "expo-font"
import { Redirect, Slot, useSegments } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { StatusBar } from "expo-status-bar"
import { useEffect, useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { SCREEN_WIDTH } from "."
import { colors, spacing } from "../core/styles/theme"
import { typography } from "../core/styles/typography"
import "../global.css"

SplashScreen.preventAutoHideAsync()

// TODO: Substituir por sistema de autenticação quando o backend estiver disponível
const loggedIn = true

export default function RootLayout() {
  // TODO: Substituir por loading da queryGraphQL quando o backend estiver disponível
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  const [fontsLoaded] = useFonts({
    ConcertOne_400Regular,
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
  })

  const segments = useSegments()

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  const currentRoute = segments[0]

  if (loggedIn && !currentRoute) {
    return <Redirect href="/roadmap" />
  }

  if (loading)
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.screen}>
          <Text style={styles.logo}>VERBUM</Text>
        </View>
      </View>
    )

  return <Slot />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.default,
  },
  screen: {
    width: SCREEN_WIDTH,
    paddingHorizontal: spacing.lg,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: spacing.lg,
    backgroundColor: colors.primary.default,
  },
  logo: {
    fontFamily: typography.title.fontFamily,
    fontSize: 32,
    fontWeight: typography.title.fontWeight as "400",
    color: colors.text.primary,
  },
})
