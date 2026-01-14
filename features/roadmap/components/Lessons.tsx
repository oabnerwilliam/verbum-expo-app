import { SCREEN_WIDTH } from "@/app"
import { colors, spacing } from "@/core/styles/theme"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { typography } from "../../../core/styles/typography"
import { Lesson } from "../hooks/useRoadmap"
import { LessonItem } from "./Lesson"

export const Lessons = ({
  children,
  lessons,
}: {
  lessons: Lesson[]
  children?: React.ReactNode
}) => {
  return (
    <View style={styles.lessonsContainer}>
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.lessonsScrollContent}
      >
        <Text style={styles.title}>Romanos</Text>
        {children ??
          (lessons ?? []).map((lesson, index) => (
            <LessonItem key={lesson.id} lesson={lesson} index={index} />
          ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  lessonsContainer: {
    width: SCREEN_WIDTH,
    flex: 1,
  },
  lessonsScrollContent: {
    flexDirection: "column",
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
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
    paddingTop: spacing.lg,
  },
})
