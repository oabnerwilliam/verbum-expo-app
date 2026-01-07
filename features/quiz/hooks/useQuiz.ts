import { useEffect, useState } from "react"

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

  const reset = () => {
    setAnswered(null)
    setIsAnswered(false)
    setShowToast(false)
    setToastType(null)
  }

  return {
    answered,
    setAnswered,
    isAnswered,
    showToast,
    toastType,
    getOptionStatus,
    reset,
  }
}
