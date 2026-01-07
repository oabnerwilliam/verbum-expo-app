import { StyleSheet, View } from "react-native"
import { spacing } from "../../styles/theme"
import { QuizOption } from "./QuizOption"

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
}: {
  options?: Option[]
  onOptionPress?: (optionId: number) => void
  getOptionStatus?: (optionId: number) => "correct" | "incorrect" | null
  disabled?: boolean
  children?: React.ReactNode
}) => {
  return (
    <View style={styles.container}>
      {children
        ? children
        : options?.map((option) => (
            <QuizOption
              key={option.id}
              onPress={() => onOptionPress?.(option.id)}
              status={getOptionStatus?.(option.id) ?? null}
              disabled={disabled ?? false}
            >
              {option.label}
            </QuizOption>
          ))}
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
