import { router } from "expo-router"
import { StyleSheet, View } from "react-native"
import { Lesson } from "../hooks/useRoadmap"
import { LessonButton } from "./LessonButton"

export const LessonItem = ({
  lesson,
  index,
}: {
  lesson: Lesson
  index: number
}) => {
  return (
    <View
      key={lesson.id}
      style={[
        styles.lessonsScrollItem,
        index % 2 === 0 ? styles.lessonItemEven : styles.lessonItemOdd,
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
  )
}

const styles = StyleSheet.create({
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
