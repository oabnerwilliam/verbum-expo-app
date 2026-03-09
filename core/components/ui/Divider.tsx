import { StyleSheet, View } from "react-native"
import { colors } from "../../styles/theme"

export const Divider = () => {
  return <View style={styles.divider} />
}

const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: colors.surface.overlay,
  },
})
