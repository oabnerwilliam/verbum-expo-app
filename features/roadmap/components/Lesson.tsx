import { FontAwesome6 } from "@expo/vector-icons"
import { router } from "expo-router"
import { StyleSheet, View } from "react-native"
import { Lesson } from "../../../core/constants/lessonsMocks"
import { colors } from "../../../core/styles/theme"
import { LessonButton } from "./LessonButton"

const themes = {
  faith: {
    icon: "hands-praying",
    color: colors.primary.default,
  },
  teaching: {
    icon: "book-open",
    color: colors.primary.default,
  },
  justice: {
    icon: "gavel",
    color: colors.primary.default,
  },
  love: {
    icon: "heart",
    color: colors.primary.default,
  },
  wisdom: {
    icon: "lightbulb",
    color: colors.primary.default,
  },
  salvation: {
    icon: "cross",
    color: colors.primary.default,
  },
}

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
        <FontAwesome6
          name={themes[lesson.theme as keyof typeof themes].icon}
          solid
          size={40}
          color={colors.primary.text}
        />
      </LessonButton>
    </View>
  )
}

const styles = StyleSheet.create({
  lessonsScrollItem: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  lessonItemEven: {
    transform: [{ translateX: -80 }],
  },
  lessonItemOdd: {
    transform: [{ translateX: 80 }],
  },
})
