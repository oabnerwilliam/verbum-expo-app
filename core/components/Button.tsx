import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { colors, radius, spacing } from "@/core/styles/theme"
import { typography } from "@/core/styles/typography"

export const Button = ({
  children,
  onPress,
  variant = "primary",
}: {
  children: React.ReactNode
  onPress?: () => void
  variant?: "primary" | "secondary"
}) => {
  const buttonStyle = [
    styles.button,
    variant === "primary" ? styles.buttonPrimary : styles.buttonSecondary,
  ]
  const textStyle = [
    styles.buttonText,
    variant === "primary"
      ? styles.buttonTextPrimary
      : styles.buttonTextSecondary,
  ]

  return (
    <TouchableOpacity style={buttonStyle} activeOpacity={0.8} onPress={onPress}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg + spacing.lg,
    borderRadius: radius.lg,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPrimary: {
    backgroundColor: colors.surface.inverse,
  },
  buttonSecondary: {
    backgroundColor: colors.primary.default,
  },
  buttonText: {
    fontFamily: typography.body.fontFamily,
    fontSize: typography.body.fontSize,
    fontWeight: typography.body.fontWeight as "400",
    textAlign: "center",
  },
  buttonTextPrimary: {
    color: colors.text.inverse,
  },
  buttonTextSecondary: {
    color: colors.primary.text,
  },
})
