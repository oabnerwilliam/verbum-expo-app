import { colors, spacing } from "@/styles/theme"
import { StatusBar } from "expo-status-bar"
import { Dimensions, StyleSheet, Text, View } from "react-native"
import { QuizButton } from "../components/ui/QuizButton"
import { QuizOptions } from "../components/ui/QuizOptions"
import { Toast } from "../components/ui/Toast"
import { useQuiz } from "../hooks/useQuiz"
import { typography } from "../styles/typography"

const { width: SCREEN_WIDTH } = Dimensions.get("window")

const bibleOptions = [
  {
    id: 1,
    label: "66 livros",
  },
  {
    id: 2,
    label: "60 livros",
  },
  {
    id: 3,
    label: "50 livros",
  },
  {
    id: 4,
    label: "40 livros",
  },
]

const QuizScreen = ({
  question,
  options,
  correctAnswerId,
}: {
  question: string
  options: { id: number; label: string }[]
  correctAnswerId: number
}) => {
  const { setAnswered, isAnswered, showToast, toastType, getOptionStatus } =
    useQuiz({ correctAnswerId })

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
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
            {question}
          </Text>
          <QuizOptions
            options={options}
            onOptionPress={setAnswered}
            getOptionStatus={getOptionStatus}
            disabled={isAnswered}
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
            {showToast && toastType && (
              <Toast
                message={
                  toastType === "correct"
                    ? "Resposta correta!"
                    : "Resposta Incorreta!"
                }
                type={toastType}
              />
            )}
            <QuizButton disabled={!isAnswered}>Próxima pergunta</QuizButton>
          </View>
        </View>
      </View>
    </View>
  )
}

export default function QuizWizard() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <QuizScreen
        question="Quantos livros tem na bíblia?"
        options={bibleOptions}
        correctAnswerId={1}
      />
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
})
