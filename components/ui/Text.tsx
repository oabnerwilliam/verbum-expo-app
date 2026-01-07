import { Text as RNText, StyleSheet, TextProps } from "react-native"

export function Text({ style, ...props }: TextProps) {
  return <RNText style={[styles.default, style]} {...props} />
}

const styles = StyleSheet.create({
  default: {
    fontFamily: "NunitoSans_400Regular",
  },
})
