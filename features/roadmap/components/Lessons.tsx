import { SCREEN_WIDTH } from "@/app"
import { colors, spacing } from "@/core/styles/theme"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { Divider } from "../../../core/components/ui/Divider"
import { Book } from "../../../core/constants/lessonsMocks"
import { typography } from "../../../core/styles/typography"
import { LessonItem } from "./Lesson"

export const Lessons = ({ books }: { books: Book[] }) => {
  return (
    <View style={styles.lessonsContainer}>
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.lessonsScrollContent}
      >
        {books.map(({ name, lessons }, bookIndex) => (
          <>
            <View style={styles.sectionHeader}>
              <Text style={styles.title}>{name}</Text>
              <Divider />
            </View>
            <View style={styles.lessonsList}>
              {lessons.map((lesson, index) => (
                <LessonItem
                  key={`${name}-${lesson.id}-${index}`}
                  lesson={lesson}
                  index={index}
                />
              ))}
            </View>
          </>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  lessonsContainer: {
    width: SCREEN_WIDTH,
    flex: 1,
    paddingTop: spacing.lg,
  },
  lessonsScrollContent: {
    flexDirection: "column",
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.lg,
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.lg * 2,
  },
  sectionHeader: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background.default,
    paddingTop: spacing.md,
    paddingBottom: spacing.sm,
    paddingHorizontal: spacing.lg,
  },
  lessonsScrollItem: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  lessonsList: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.sm,
  },
  title: {
    fontFamily: typography.title.fontFamily,
    fontSize: 20,
    fontWeight: typography.title.fontWeight as "400",
    color: colors.text.secondary,
    textAlign: "center",
    marginBottom: spacing.sm,
    position: "absolute",
    top: 0,
    zIndex: 1,
    backgroundColor: colors.background.default,
    paddingHorizontal: spacing.md,
  },
})
