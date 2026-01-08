import { useEffect, useRef } from "react"
import { Animated, Dimensions, StyleSheet, View } from "react-native"
import { colors, radius, spacing } from "../../core/styles/theme"

const { width: SCREEN_WIDTH } = Dimensions.get("window")

export const ProgressBar = ({
  current,
  total,
}: {
  current: number
  total: number
}) => {
  const progressPercent = Math.min((current / total) * 100, 100)
  const animatedWidth = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: progressPercent,
      duration: 300,
      useNativeDriver: false,
    }).start()
  }, [progressPercent, animatedWidth])

  const barWidth = animatedWidth.interpolate({
    inputRange: [0, 100],
    outputRange: [0, SCREEN_WIDTH - spacing.lg * 2],
  })

  return (
    <View style={styles.container}>
      <View style={styles.track}>
        <Animated.View style={[styles.bar, { width: barWidth }]} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
  },
  track: {
    height: 20,
    backgroundColor: colors.surface.default,
    borderRadius: radius.sm,
    overflow: "hidden",
  },
  bar: {
    height: "100%",
    backgroundColor: colors.primary.default,
    borderRadius: radius.sm,
  },
})
