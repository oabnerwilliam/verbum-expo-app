import { useEffect, useRef, useState } from "react"
import { Animated, LayoutChangeEvent, StyleSheet, View } from "react-native"
import { colors, radius, spacing } from "../../core/styles/theme"

export const ProgressBar = ({
  current,
  total,
}: {
  current: number
  total: number
}) => {
  const progressPercent = Math.min((current / total) * 100, 100)
  const animatedWidth = useRef(new Animated.Value(0)).current
  const [trackWidth, setTrackWidth] = useState(0)

  useEffect(() => {
    Animated.timing(animatedWidth, {
      toValue: progressPercent,
      duration: 300,
      useNativeDriver: false,
    }).start()
  }, [progressPercent, animatedWidth])

  const handleLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout
    setTrackWidth(width)
  }

  const barWidth = animatedWidth.interpolate({
    inputRange: [0, 100],
    outputRange: [0, trackWidth],
  })

  return (
    <View style={styles.container}>
      <View style={styles.track} onLayout={handleLayout}>
        <Animated.View style={[styles.bar, { width: barWidth }]} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    paddingVertical: spacing.md,
  },
  track: {
    height: 20,
    backgroundColor: colors.surface.default,
    borderRadius: radius.sm,
    overflow: "hidden",
    width: "100%",
  },
  bar: {
    height: "100%",
    backgroundColor: colors.primary.default,
    borderRadius: radius.sm,
  },
})
