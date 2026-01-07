import { StyleSheet, View } from "react-native"
import { QuizOption } from "../../../components/ui/QuizOption"
import { spacing } from "../../../core/styles/theme"

type Option = {
  id: number
  label: string
}

export const QuizOptions = ({
  options,
  onOptionPress,
  getOptionStatus,
  disabled,
  children,
  correctAnswerId,
  answered,
}: {
  options?: Option[]
  onOptionPress?: (optionId: number) => void
  getOptionStatus?: (optionId: number) => "correct" | "incorrect" | null
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
            const isCorrect =
              status === "correct" &&
              correctAnswerId !== undefined &&
              answered !== null &&
              option.id === correctAnswerId

            return (
              <QuizOption
                key={option.id}
                onPress={() => onOptionPress?.(option.id)}
                status={status}
                disabled={disabled ?? false}
                isCorrect={isCorrect}
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
