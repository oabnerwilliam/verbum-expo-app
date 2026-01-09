import { lessonsMocks } from "@/core/constants/lessonsMocks"
import { router, useLocalSearchParams } from "expo-router"
import { useEffect, useState } from "react"
import { useQuiz } from "./useQuiz"

export type QuizStep = {
  question: string
  options: { id: number; label: string }[]
  correctAnswerId: number
}

export const useQuizWizard = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const { lessonId } = useLocalSearchParams<{ lessonId: string }>()

  const lesson = lessonsMocks.find((lesson) => lesson.id === Number(lessonId))

  const steps = lesson?.quiz ?? []
  const currentStep = steps[currentStepIndex]

  const quiz = useQuiz({
    correctAnswerId: currentStep?.correctAnswerId ?? 0,
  })

  useEffect(() => {
    quiz.reset()
  }, [currentStepIndex, quiz.reset])

  const nextStep = () => {
    quiz.reset()
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1)
    } else {
      router.push("/roadmap")
    }
  }

  const isLastStep = currentStepIndex === steps.length - 1
  const canGoNext = quiz.isAnswered

  return {
    lesson,
    currentStep: currentStep ?? null,
    currentStepIndex,
    totalSteps: steps.length,
    nextStep,
    isLastStep,
    canGoNext,
    quiz,
  }
}
