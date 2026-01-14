import { colors, radius, spacing } from "@/core/styles/theme"
import { typography } from "@/core/styles/typography"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container} edges={["top"]}>
      <StatusBar style="auto" />
      <View style={styles.contentContainer}>
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>A</Text>
          </View>
          <View style={styles.headerInfo}>
            <Text style={styles.name}>Abner William</Text>
            <Text style={styles.subtitle}>abner@verbum.app</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sobre</Text>
          <Text style={styles.bodyText}>
            Estudante dedicado, focado em fortalecer o vocabulário e manter uma
            rotina de leitura diária.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Detalhes</Text>
          <View style={styles.card}>
            <View style={styles.row}>
              <Text style={styles.label}>Nível atual</Text>
              <Text style={styles.value}>Intermediário</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Meta semanal</Text>
              <Text style={styles.value}>4 lições</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.label}>Idioma</Text>
              <Text style={styles.value}>Português</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.default,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    gap: spacing.lg,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.surface.elevated,
    justifyContent: "center",
    alignItems: "center",
  },
  avatarText: {
    fontFamily: typography.title.fontFamily,
    fontSize: 28,
    fontWeight: typography.title.fontWeight as "700",
    color: colors.text.primary,
  },
  headerInfo: {
    flex: 1,
    gap: spacing.xs,
  },
  name: {
    fontFamily: typography.title.fontFamily,
    fontSize: 24,
    fontWeight: typography.title.fontWeight as "700",
    color: colors.text.primary,
  },
  subtitle: {
    fontFamily: typography.caption.fontFamily,
    fontSize: typography.caption.fontSize,
    fontWeight: typography.caption.fontWeight as "400",
    color: colors.text.secondary,
  },
  section: {
    gap: spacing.sm,
    width: "100%",
  },
  sectionTitle: {
    fontFamily: typography.body.fontFamily,
    fontSize: 18,
    fontWeight: "600",
    color: colors.text.primary,
  },
  bodyText: {
    fontFamily: typography.body.fontFamily,
    fontSize: typography.body.fontSize,
    fontWeight: typography.body.fontWeight as "400",
    color: colors.text.secondary,
    lineHeight: 24,
  },
  card: {
    backgroundColor: colors.surface.default,
    borderRadius: radius.md,
    padding: spacing.md,
    gap: spacing.sm,
    width: "100%",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontFamily: typography.caption.fontFamily,
    fontSize: typography.caption.fontSize,
    fontWeight: typography.caption.fontWeight as "400",
    color: colors.text.secondary,
  },
  value: {
    fontFamily: typography.body.fontFamily,
    fontSize: typography.body.fontSize,
    fontWeight: "600",
    color: colors.text.primary,
  },
})
