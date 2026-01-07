import { Ionicons } from "@expo/vector-icons"
import { StyleSheet, Text, View } from "react-native"
import { radius, spacing } from "../../styles/theme"
import { typography } from "../../styles/typography"

export const Toast = ({
  message,
  type,
}: {
  message: string
  type: "correct" | "incorrect"
}) => {
  const isCorrect = type === "correct"
  return (
    <View
      style={[
        styles.toast,
        isCorrect ? styles.toastCorrect : styles.toastIncorrect,
      ]}
    >
      <Ionicons
        name={isCorrect ? "checkmark-circle" : "close-circle"}
        size={24}
        color="#FFFFFF"
      />
      <Text style={styles.toastText}>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  toast: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.md,
    alignSelf: "stretch",
  },
  toastCorrect: {
    backgroundColor: "#4CAF50",
  },
  toastIncorrect: {
    backgroundColor: "#F44336",
  },
  toastText: {
    fontFamily: typography.body.fontFamily,
    fontSize: typography.body.fontSize,
    fontWeight: typography.body.fontWeight as "400",
    color: "#FFFFFF",
  },
})

