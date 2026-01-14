import { Button } from "@/core/components/ui/Button"
import { colors, spacing } from "@/core/styles/theme"
import { typography } from "@/core/styles/typography"
import { router } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { Dimensions, StyleSheet, Text, View } from "react-native"

export const { width: SCREEN_WIDTH } = Dimensions.get("window")

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.screen}>
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>VERBUM</Text>
          <Text style={styles.subtitle}>O seu app de estudo bíblico!</Text>
        </View>
        <Button variant="secondary" onPress={() => router.push("/roadmap")}>
          Começar agora
        </Button>
      </View>
    </View>
  )
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
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontFamily: typography.title.fontFamily,
    fontSize: typography.title.fontSize,
    fontWeight: typography.title.fontWeight as "700",
    color: colors.primary.default,
    textAlign: "center",
  },
  contentContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing.sm,
    gap: spacing.lg,
  },
  subtitle: {
    fontFamily: typography.body.fontFamily,
    fontSize: typography.body.fontSize,
    fontWeight: typography.body.fontWeight as "400",
    color: colors.text.primary,
    textAlign: "center",
  },
})
