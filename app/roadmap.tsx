import { colors, spacing } from "@/core/styles/theme"
import { router } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { SCREEN_WIDTH } from "."
import { LessonButton } from "../components/ui/LessonButton"
import { typography } from "../core/styles/typography"
import { useRoadmap } from "../features/roadmap/hooks/useRoadmap"

export default function RoadmapScreen() {
  const { lessons } = useRoadmap()

  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar style="auto" />
      <View style={styles.content}>
        <Text style={styles.title}>Romanos</Text>
        <View style={styles.lessonsContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            decelerationRate="normal"
            snapToInterval={200 + spacing.lg}
            snapToAlignment="start"
            contentContainerStyle={styles.lessonsScrollContent}
          >
            {(lessons ?? []).map((lesson, index) => (
              <View
                key={lesson.id}
                style={[
                  styles.lessonsScrollItem,
                  index % 2 === 0
                    ? styles.lessonItemEven
                    : styles.lessonItemOdd,
                ]}
              >
                <LessonButton
                  variant="secondary"
                  onPress={() =>
                    router.push({
                      pathname: "/quiz",
                      params: { lessonId: lesson.id },
                    })
                  }
                >
                  {lesson.title}
                </LessonButton>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.default,
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingBottom: spacing.lg * 2,
  },
  lessonsContainer: {
    width: SCREEN_WIDTH,
    height: 400,
  },
  lessonsScrollContent: {
    paddingHorizontal: spacing.lg,
    alignItems: "center",
    gap: spacing.lg,
  },
  lessonsScrollItem: {
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
  },
  lessonItemEven: {
    transform: [{ translateY: -40 }],
  },
  lessonItemOdd: {
    transform: [{ translateY: 40 }],
  },
  title: {
    fontFamily: typography.title.fontFamily,
    fontSize: 32,
    fontWeight: typography.title.fontWeight as "400",
    color: colors.text.primary,
    textAlign: "center",
    marginBottom: spacing.lg,
    paddingHorizontal: spacing.lg,
  },
})
