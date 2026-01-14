import { lessonsMocks } from "@/core/constants/lessonsMocks"
import { router, useLocalSearchParams } from "expo-router"
import { useEffect, useState } from "react"
import { useQuizContext } from "../contexts/QuizContext"
import { useQuiz } from "./useQuiz"

export interface Option {
  id: number
  label: string
}

export type QuizStep = {
  question: string
  options: Option[]
  correctAnswerId: number
}

export const useQuizWizard = () => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const { lessonId } = useLocalSearchParams<{ lessonId: string }>()
  // TODO: Buscar a lição no backend quando o backend estiver disponível
  const lesson = lessonsMocks.find((lesson) => lesson.id === Number(lessonId))

  const steps = lesson?.quiz ?? []
  const currentStep = steps[currentStepIndex]

  const quiz = useQuiz({
    correctAnswer:
      currentStep.options.find(
        (option) => option.id === currentStep.correctAnswerId
      ) ?? undefined,
  })

  useEffect(() => {
    quiz.reset()
  }, [currentStepIndex, quiz.reset, quiz])

  const { correctAnswers, incorrectAnswers } = useQuizContext()

  const nextStep = () => {
    quiz.reset()
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1)
    } else {
      // alert(`${correctAnswers.map((answer) => answer.label).join(", ")}`)
      router.push({
        pathname: "/quiz/result",
        params: {
          correctAnswers: correctAnswers.length,
          incorrectAnswers: incorrectAnswers.length,
        },
      })
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
