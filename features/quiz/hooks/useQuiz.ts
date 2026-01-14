import { useCallback, useEffect, useState } from "react"
import { useQuizContext } from "../contexts/QuizContext"
import { Option } from "./useQuizWizard"

type UseQuizProps = {
  correctAnswer?: Option
}

export const useQuiz = ({ correctAnswer }: UseQuizProps) => {
  const [answered, setAnswered] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastType, setToastType] = useState<"correct" | "incorrect" | null>(
    null
  )
  const [selected, setSelected] = useState<number | null>(null)

  const {
    correctAnswers,
    setCorrectAnswers,
    incorrectAnswers,
    setIncorrectAnswers,
  } = useQuizContext()

  useEffect(() => {
    setSelected(null)
    setAnswered(null)
    setIsAnswered(false)
    setShowToast(false)
    setToastType(null)
  }, [correctAnswer])

  useEffect(() => {
    if (answered !== null) {
      const isCorrect = answered === correctAnswer?.id
      setToastType(isCorrect ? "correct" : "incorrect")
      setShowToast(true)
      setIsAnswered(true)
      if (isCorrect) {
        setCorrectAnswers([
          ...correctAnswers,
          correctAnswer ?? { id: 0, label: "" },
        ])
      } else {
        setIncorrectAnswers([
          ...incorrectAnswers,
          correctAnswer ?? { id: 0, label: "" },
        ])
      }
    }
  }, [answered, correctAnswer])

  const getOptionStatus = (
    optionId: number
  ): "correct" | "incorrect" | null => {
    if (answered === null) return null
    if (answered === optionId) {
      return answered === correctAnswer?.id ? "correct" : "incorrect"
    }
    if (answered !== correctAnswer?.id && optionId === correctAnswer?.id) {
      return "correct"
    }
    return null
  }
  const getOptionSelected = (optionId: number): boolean => {
    if (selected === null) return false
    if (selected === optionId) return true
    return false
  }

  const setSelectedOption = useCallback((optionId: number) => {
    if (selected === null) {
      setSelected(optionId)
    } else {
      setSelected(null)
    }
  }, [])

  const answerQuestion = useCallback((optionId?: number) => {
    setAnswered(optionId ?? null)
  }, [])

  const reset = useCallback(() => {
    setAnswered(null)
    setIsAnswered(false)
    setShowToast(false)
    setToastType(null)
    setSelected(null)
  }, [])

  return {
    answered,
    setAnswered,
    answerQuestion,
    selected,
    setSelected,
    setSelectedOption,
    isAnswered,
    showToast,
    toastType,
    getOptionStatus,
    getOptionSelected,
    reset,
  }
}
