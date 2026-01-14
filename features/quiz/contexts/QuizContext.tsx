import { createContext, ReactNode, useContext, useState } from "react"
import { Option } from "../hooks/useQuizWizard"

interface QuizContextType {
  correctAnswers: Option[]
  setCorrectAnswers: React.Dispatch<React.SetStateAction<Option[]>>
  incorrectAnswers: Option[]
  setIncorrectAnswers: React.Dispatch<React.SetStateAction<Option[]>>
}

const QuizContext = createContext<QuizContextType | undefined>(undefined)

interface QuizProviderProps {
  children: ReactNode
}

export const QuizProvider = ({ children }: QuizProviderProps) => {
  const [correctAnswers, setCorrectAnswers] = useState<Option[]>([])
  const [incorrectAnswers, setIncorrectAnswers] = useState<Option[]>([])

  const value: QuizContextType = {
    correctAnswers,
    setCorrectAnswers,
    incorrectAnswers,
    setIncorrectAnswers,
  }

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}

export const useQuizContext = () => {
  const context = useContext(QuizContext)
  if (context === undefined) {
    throw new Error("useQuizContext must be used within a QuizProvider")
  }
  return context
}
