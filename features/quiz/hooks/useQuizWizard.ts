import { router } from "expo-router"
import { useEffect, useState } from "react"
import { useQuiz } from "./useQuiz"

export type QuizStep = {
  question: string
  options: { id: number; label: string }[]
  correctAnswerId: number
}

type UseQuizWizardProps = {
  steps: QuizStep[]
}

export const useQuizWizard = ({ steps }: UseQuizWizardProps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const currentStep = steps[currentStepIndex]

  const quiz = useQuiz({ correctAnswerId: currentStep.correctAnswerId })

  useEffect(() => {
    quiz.reset()
  }, [currentStepIndex])

  const nextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex((prev) => prev + 1)
    } else {
      router.push("/")
    }
  }

  const isLastStep = currentStepIndex === steps.length - 1
  const canGoNext = quiz.isAnswered

  return {
    currentStep,
    currentStepIndex,
    totalSteps: steps.length,
    nextStep,
    isLastStep,
    canGoNext,
    quiz,
  }
}
