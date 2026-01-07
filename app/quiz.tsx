import { colors } from "@/core/styles/theme"
import { StatusBar } from "expo-status-bar"
import { StyleSheet } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { ProgressBar } from "../components/ui/ProgressBar"
import { QuizScreen } from "../features/quiz/components/QuizScreen"
import { quizStepsMocks } from "../features/quiz/constants/quizMocks"
import { useQuizWizard } from "../features/quiz/hooks/useQuizWizard"

export default function QuizWizard() {
  const {
    currentStep,
    currentStepIndex,
    totalSteps,
    nextStep,
    isLastStep,
    canGoNext,
    quiz,
  } = useQuizWizard({ steps: quizStepsMocks })

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar style="auto" />
      <ProgressBar current={currentStepIndex + 1} total={totalSteps} />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.default,
  },
})
