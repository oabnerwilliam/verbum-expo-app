import { colors } from "@/core/styles/theme"
import { typography } from "@/core/styles/typography"
import { useState } from "react"
import { Pressable, StyleSheet, Text, View } from "react-native"

export const LessonButton = ({
  children,
  onPress,
  variant = "primary",
}: {
  children: React.ReactNode
  onPress?: () => void
  variant?: "primary" | "secondary"
}) => {
  const [pressed, setPressed] = useState(false)

  const buttonStyle = [
    styles.button,
    variant === "primary" ? styles.buttonPrimary : styles.buttonSecondary,
    pressed && styles.buttonPressed,
  ]
  const textStyle = [
    styles.buttonText,
    variant === "primary"
      ? styles.buttonTextPrimary
      : styles.buttonTextSecondary,
  ]

  return (
    <View style={styles.container}>
      {!pressed && <View style={styles.shadow} />}
      <Pressable
        style={buttonStyle}
        onPress={onPress}
        onPressIn={() => setPressed(true)}
        onPressOut={() => setPressed(false)}
      >
        <Text style={textStyle}>{children}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  shadow: {
    position: "absolute",
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    backgroundColor: colors.primary.hover,
    top: 8,
    left: 3,
    zIndex: -1,
  },
  button: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPressed: {
    transform: [{ translateX: 3 }, { translateY: 8 }],
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
