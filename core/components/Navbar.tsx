import { StyleSheet, Text, TouchableOpacity, View } from "react-native"

import { FontAwesome6 } from "@expo/vector-icons"
import { router, usePathname } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import { colors, spacing } from "../styles/theme"
import { Divider } from "./ui/Divider"

export const Navbar = () => {
  const pathname = usePathname()
  const isActive = (path: string) => pathname === path

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <Divider />
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={{
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              if (pathname !== "/roadmap") {
                router.push("/roadmap")
              }
            }}
          >
            <Text style={styles.buttonText}>
              <FontAwesome6
                name="map-location-dot"
                solid
                size={30}
                color={
                  isActive("/roadmap")
                    ? colors.primary.default
                    : colors.text.primary
                }
              />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            style={{
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              if (pathname !== "/profile") {
                router.push("/profile")
              }
            }}
          >
            <FontAwesome6
              name="circle-user"
              solid
              size={30}
              color={
                isActive("/profile")
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
    paddingBottom: spacing.lg,
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
    backgroundColor: colors.surface.overlay,
  },
  buttonWrapper: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    gap: spacing.md,
  },
})
