import { colors, spacing } from "@/core/styles/theme"
import { typography } from "@/core/styles/typography"
import { router, useLocalSearchParams } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { useMemo } from "react"
import { StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Button } from "../../core/components/ui/Button"

export default function ResultScreen() {
  const { correctAnswers, incorrectAnswers } = useLocalSearchParams()
  const totalQuestions = useMemo(
    () => Number(correctAnswers) + Number(incorrectAnswers),
    [correctAnswers, incorrectAnswers]
  )
  const precision = useMemo(
    () => Math.round((Number(correctAnswers) / totalQuestions) * 100),
    [correctAnswers, totalQuestions]
  )

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar style="auto" />
      <View style={styles.content}>
        <Text style={styles.title}>Resultado do Quiz</Text>

        <View style={styles.scoreContainer}>
          <Text style={styles.scoreText}>
            {correctAnswers} /{" "}
            {Number(correctAnswers) + Number(incorrectAnswers)}
          </Text>
          <Text style={styles.scoreLabel}>Acertos</Text>
        </View>

        <View style={styles.percentageContainer}>
          <Text style={styles.percentageText}>{precision}% de precisão</Text>
        </View>
        <Button onPress={() => router.push("/roadmap")}>
          Voltar para o roadmap
        </Button>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.default,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.lg,
  },
  title: {
    fontFamily: typography.title.fontFamily,
    fontSize: typography.title.fontSize / 2,
    fontWeight: typography.title.fontWeight as "700",
    color: colors.text.primary,
    textAlign: "center",
  },
  scoreContainer: {
    alignItems: "center",
    gap: spacing.sm,
  },
  scoreText: {
    fontFamily: typography.title.fontFamily,
    fontSize: 48,
    fontWeight: "700",
    color: colors.primary.default,
  },
  scoreLabel: {
    fontFamily: typography.body.fontFamily,
    fontSize: typography.body.fontSize,
    fontWeight: typography.body.fontWeight as "400",
    color: colors.text.secondary,
  },
  percentageContainer: {
    alignItems: "center",
  },
  percentageText: {
    fontFamily: typography.body.fontFamily,
    fontSize: 24,
    fontWeight: "600",
    color: colors.text.primary,
  },
})
