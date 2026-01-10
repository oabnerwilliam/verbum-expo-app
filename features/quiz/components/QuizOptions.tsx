import { StyleSheet, View } from "react-native"
import { spacing } from "../../../core/styles/theme"
import { QuizOption } from "./QuizOption"

type Option = {
  id: number
  label: string
}

export const QuizOptions = ({
  options,
  onOptionPress,
  getOptionStatus,
  getOptionSelected,
  disabled,
  children,
  correctAnswerId,
  answered,
}: {
  options?: Option[]
  onOptionPress?: (optionId: number) => void
  getOptionStatus?: (optionId: number) => "correct" | "incorrect" | null
  getOptionSelected?: (optionId: number) => boolean
  disabled?: boolean
  children?: React.ReactNode
  correctAnswerId?: number
  answered?: number | null
}) => {
  return (
    <View style={styles.container}>
      {children
        ? children
        : options?.map((option) => {
            const status = getOptionStatus?.(option.id) ?? null
            const isSelected = getOptionSelected?.(option.id) ?? false
            const isCorrect =
              status === "correct" &&
              correctAnswerId !== undefined &&
              answered !== null &&
              option.id === correctAnswerId

            const uniqueKey = `${correctAnswerId ?? "no-answer"}-${option.id}`

            return (
              <QuizOption
                key={uniqueKey}
                onPress={() => onOptionPress?.(option.id)}
                status={status}
                disabled={disabled ?? false}
                isCorrect={isCorrect}
                isSelected={isSelected}
              >
                {option.label}
              </QuizOption>
            )
          })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: spacing.md,
  },
})
