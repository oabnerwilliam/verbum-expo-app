import { Toast } from "@/core/components/Toast"
import { colors, spacing } from "@/core/styles/theme"
import { typography } from "@/core/styles/typography"
import { Dimensions, StyleSheet, Text, View } from "react-native"
import { QuizStep, useQuizWizard } from "../hooks/useQuizWizard"
import { QuizButton } from "./QuizButton"
import { QuizOptions } from "./QuizOptions"

const { width: SCREEN_WIDTH } = Dimensions.get("window")

export const QuizScreen = ({
  step,
  onNext,
  canGoNext,
  isLastStep,
  quiz,
}: {
  step: QuizStep
  onNext: () => void
  canGoNext: boolean
  isLastStep: boolean
  quiz: ReturnType<typeof useQuizWizard>["quiz"]
}) => {
  return (
    <View style={styles.screen}>
      <View
        style={{
          alignSelf: "stretch",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          gap: spacing.lg * 2,
        }}
      >
        <Text
          style={{
            fontFamily: typography.body.fontFamily,
            fontSize: typography.body.fontSize,
            fontWeight: typography.body.fontWeight as "400",
            color: colors.text.primary,
          }}
        >
          {step.question}
        </Text>
        <QuizOptions
          options={step.options}
          onOptionPress={quiz.setSelectedOption}
          getOptionStatus={quiz.getOptionStatus}
          getOptionSelected={quiz.getOptionSelected}
          disabled={quiz.isAnswered}
          correctAnswerId={step.correctAnswerId}
          answered={quiz.answered}
        />
        <View
          style={{
            alignSelf: "stretch",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: spacing.md,
          }}
        >
          {quiz.showToast && quiz.toastType && (
            <Toast
              message={
                quiz.toastType === "correct"
                  ? "Resposta correta!"
                  : "Resposta Incorreta!"
              }
              type={quiz.toastType}
            />
          )}
          <QuizButton
            disabled={!quiz.selected}
            onPress={
              canGoNext
                ? onNext
                : () => quiz.answerQuestion(quiz.selected ?? undefined)
            }
          >
            {canGoNext
              ? isLastStep
                ? "Finalizar"
                : "Próxima pergunta"
              : quiz.selected
              ? "Responder"
              : "Selecione uma resposta"}
          </QuizButton>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    width: SCREEN_WIDTH,
    paddingHorizontal: spacing.lg,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
})
