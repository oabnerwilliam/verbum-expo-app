import { Ionicons } from "@expo/vector-icons"
import { Pressable, StyleSheet, Text, View } from "react-native"
import { colors, radius, spacing } from "../../core/styles/theme"
import { typography } from "../../core/styles/typography"

export const QuizOption = ({
  children,
  onPress,
  variant = "primary",
  status,
  disabled = false,
  isCorrect = false,
}: {
  children: React.ReactNode
  onPress?: () => void
  variant?: "primary" | "secondary"
  status?: "correct" | "incorrect" | null
  disabled?: boolean
  isCorrect?: boolean
}) => {
  const buttonStyle = [
    styles.button,
    variant === "primary" ? styles.buttonPrimary : styles.buttonSecondary,
    status === "correct" && styles.buttonCorrect,
    status === "incorrect" && styles.buttonIncorrect,
    disabled && !isCorrect && styles.buttonDisabled,
  ]
  const textStyle = [
    styles.buttonText,
    variant === "primary"
      ? styles.buttonTextPrimary
      : styles.buttonTextSecondary,
  ]

  return (
    <Pressable
      style={({ pressed }) => [buttonStyle, pressed && styles.buttonPressed]}
      onPress={onPress}
      disabled={disabled || isCorrect}
    >
      <View style={styles.content}>
        <Text style={textStyle}>{children}</Text>
        {status === "correct" && (
          <Ionicons
            name="checkmark-circle"
            size={24}
            color={colors.success.default}
          />
        )}
        {status === "incorrect" && (
          <Ionicons
            name="close-circle"
            size={24}
            color={colors.error.default}
          />
        )}
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: spacing.md,
    borderRadius: radius.md,
    paddingHorizontal: spacing.lg,
    alignItems: "flex-start",
    justifyContent: "center",
    alignSelf: "stretch",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
  },
  buttonPressed: {
    transform: [{ scale: 0.97 }],
    backgroundColor: colors.surface.default,
  },
  buttonPrimary: {
    borderColor: colors.primary.default,
    borderWidth: 1,
  },
  buttonSecondary: {
    backgroundColor: colors.primary.default,
  },
  buttonCorrect: {
    borderColor: colors.success.default,
    borderWidth: 2,
  },
  buttonIncorrect: {
    borderColor: colors.error.default,
    borderWidth: 2,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    fontFamily: typography.body.fontFamily,
    fontSize: typography.body.fontSize,
    fontWeight: typography.body.fontWeight as "400",
  },
  buttonTextPrimary: {
    color: colors.text.primary,
  },
  buttonTextSecondary: {
    color: colors.primary.text,
  },
})
