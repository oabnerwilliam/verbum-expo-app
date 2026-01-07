import { Pressable, StyleSheet, Text } from "react-native"
import { colors, radius, spacing } from "../../styles/theme"
import { typography } from "../../styles/typography"

export const QuizButton = ({
  children,
  onPress,
  disabled = false,
}: {
  children: React.ReactNode
  onPress?: () => void
  disabled?: boolean
}) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed,
        disabled && styles.buttonDisabled,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg + spacing.lg,
    borderRadius: radius.md,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    backgroundColor: colors.surface.inverse,
  },
  buttonPressed: {
    transform: [{ scale: 0.97 }],
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  buttonText: {
    fontFamily: typography.body.fontFamily,
    fontSize: typography.body.fontSize,
    fontWeight: typography.body.fontWeight as "400",
    textAlign: "center",
    color: colors.text.inverse,
  },
})

