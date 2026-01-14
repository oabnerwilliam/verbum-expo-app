import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

import { Ionicons } from "@expo/vector-icons"
import { router, usePathname } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import { colors, spacing } from "../styles/theme"

export const Navbar = () => {
  const pathname = usePathname()

  const dividerStyle = (path: string) => [
    styles.divider,
    {
      backgroundColor:
        pathname === path ? colors.primary.default : colors.text.primary,
    },
  ]

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <View style={dividerStyle("/roadmap")} />
          <TouchableOpacity
            style={{
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              if (pathname !== "/roadmap") router.push("/roadmap")
            }}
          >
            <Text style={styles.buttonText}>
              <Ionicons
                name="home"
                size={30}
                color={
                  pathname === "/roadmap"
                    ? colors.primary.default
                    : colors.text.primary
                }
              />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <View style={dividerStyle("/profile")} />
          <TouchableOpacity
            style={{
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => router.push("/profile")}
          >
            <Ionicons
              name="person"
              size={30}
              color={
                pathname === "/profile"
                  ? colors.primary.default
                  : colors.text.primary
              }
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.default,
    flexDirection: "column",
    justifyContent: "center",
    gap: spacing.md,
    paddingBottom: spacing.md,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  button: {
    height: 50,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.text.primary,
  },
  divider: {
    width: "100%",
    height: 1,
  },
  buttonWrapper: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    gap: spacing.md,
  },
})
