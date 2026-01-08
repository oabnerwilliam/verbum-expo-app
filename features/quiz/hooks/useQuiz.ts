import { useCallback, useEffect, useState } from "react"

type UseQuizProps = {
  correctAnswerId: number
}

export const useQuiz = ({ correctAnswerId }: UseQuizProps) => {
  const [answered, setAnswered] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastType, setToastType] = useState<"correct" | "incorrect" | null>(
    null
  )
  const [selected, setSelected] = useState<number | null>(null)

  useEffect(() => {
    setSelected(null)
    setAnswered(null)
    setIsAnswered(false)
    setShowToast(false)
    setToastType(null)
  }, [correctAnswerId])

  useEffect(() => {
    if (answered !== null) {
      const isCorrect = answered === correctAnswerId
      setToastType(isCorrect ? "correct" : "incorrect")
      setShowToast(true)
      setIsAnswered(true)
    }
  }, [answered, correctAnswerId])

  const getOptionStatus = (
    optionId: number
  ): "correct" | "incorrect" | null => {
    if (answered === null) return null
    if (answered === optionId) {
      return answered === correctAnswerId ? "correct" : "incorrect"
    }
    if (answered !== correctAnswerId && optionId === correctAnswerId) {
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
