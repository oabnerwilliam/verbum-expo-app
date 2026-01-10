import { colors, spacing } from "@/core/styles/theme"
import { typography } from "@/core/styles/typography"
import { Lessons } from "@/features/roadmap/components/Lessons"
import { useRoadmap } from "@/features/roadmap/hooks/useRoadmap"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function RoadmapScreen() {
  const { lessons } = useRoadmap()

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar style="auto" />
      <View style={styles.content}>
        <Text style={styles.title}>Romanos</Text>
        <Lessons lessons={lessons} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.default,
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: spacing.lg * 2,
  },
  title: {
    fontFamily: typography.title.fontFamily,
    fontSize: 32,
    fontWeight: typography.title.fontWeight as "400",
    color: colors.text.primary,
    textAlign: "center",
    marginBottom: spacing.lg,
    paddingHorizontal: spacing.lg,
  },
})
