import { ProgressBar } from "@/core/components/ui/ProgressBar"
import { colors, spacing } from "@/core/styles/theme"
import { typography } from "@/core/styles/typography"
import { QuizScreen } from "@/features/quiz/components/QuizScreen"
import { useQuizWizard } from "@/features/quiz/hooks/useQuizWizard"
import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { QuizProvider } from "../../features/quiz/contexts/QuizContext"

const LessonQuiz = () => {
  const {
    currentStep,
    currentStepIndex,
    totalSteps,
    nextStep,
    isLastStep,
    canGoNext,
    quiz,
  } = useQuizWizard()

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar style="auto" />
      <View style={styles.progressContainer}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => router.push("/roadmap")}
          activeOpacity={0.7}
        >
          <Ionicons name="close" size={20} color={colors.text.primary} />
        </TouchableOpacity>
        <View style={styles.progressBarWrapper}>
          <ProgressBar current={currentStepIndex + 1} total={totalSteps} />
        </View>
      </View>
      <QuizScreen
        step={currentStep}
        onNext={nextStep}
        canGoNext={canGoNext}
        isLastStep={isLastStep}
        quiz={quiz}
      />
    </SafeAreaView>
  )
}

export default function QuizWizard() {
  return (
    <QuizProvider>
      <LessonQuiz />
    </QuizProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.default,
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    gap: spacing.md,
  },
  progressBarWrapper: {
    flex: 1,
  },
  closeButton: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: typography.title.fontFamily,
    fontSize: typography.title.fontSize,
    fontWeight: typography.title.fontWeight as "700",
    color: colors.primary.default,
    textAlign: "center",
  },
})
