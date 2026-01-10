import { ScrollView, StyleSheet, View } from "react-native"
import { SCREEN_WIDTH } from "../../../app"
import { spacing } from "../../../core/styles/theme"
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
        horizontal
        showsHorizontalScrollIndicator={false}
        decelerationRate="normal"
        snapToInterval={200 + spacing.lg}
        snapToAlignment="start"
        contentContainerStyle={styles.lessonsScrollContent}
      >
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
})
