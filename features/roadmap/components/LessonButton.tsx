import { colors } from "@/core/styles/theme"
import { typography } from "@/core/styles/typography"
import { StyleSheet, Text, TouchableOpacity } from "react-native"

export const LessonButton = ({
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
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
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
