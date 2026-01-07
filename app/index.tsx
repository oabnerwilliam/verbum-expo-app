import { colors, spacing } from "@/styles/theme"
import { typography } from "@/styles/typography"
import { StatusBar } from "expo-status-bar"
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native"
import { Button } from "../components/ui/Button"

const { width: SCREEN_WIDTH } = Dimensions.get("window")

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        decelerationRate="normal"
      >
        <View style={styles.screen}>
          <View style={styles.logoContainer}>
            <Text style={styles.logo}>VERBUM</Text>
            <Text style={styles.subtitle}>O seu app de estudo bíblico!</Text>
          </View>
        </View>

        <View style={styles.screen}>
          <View style={styles.contentContainer}>
            <Button variant="secondary">Começar agora</Button>
            <Button variant="primary">Fazer Login</Button>
          </View>
        </View>
      </ScrollView>
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
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontFamily: typography.title.fontFamily,
    fontSize: typography.title.fontSize,
    fontWeight: typography.title.fontWeight,
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
    fontWeight: typography.body.fontWeight,
    color: colors.text.primary,
    textAlign: "center",
  },
})
