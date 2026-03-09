import { QuizStep } from "../../features/quiz/hooks/useQuizWizard"
import {
  filipenses1,
  filipenses2,
  filipenses3,
  filipenses4,
} from "./filipenses"
import { romanos1, romanos2, romanos3, romanos4 } from "./romanos"

export interface Lesson {
  id: number
  title: string
  quiz: QuizStep[]
  theme: "faith" | "teaching" | "justice" | "love" | "wisdom" | "salvation"
}

export interface Book {
  id: number
  name: string
  lessons: Lesson[]
}

export const romanos: Lesson[] = [
  {
    id: 1,
    title: "Romanos 1",
    quiz: romanos1,
    theme: "justice",
  },
  {
    id: 2,
    title: "Romanos 2",
    quiz: romanos2,
    theme: "teaching",
  },
  {
    id: 3,
    title: "Romanos 3",
    quiz: romanos3,
    theme: "salvation",
  },
  {
    id: 4,
    title: "Romanos 4",
    quiz: romanos4,
    theme: "faith",
  },
]

export const filipenses: Lesson[] = [
  {
    id: 5,
    title: "Filipenses 1",
    quiz: filipenses1,
    theme: "salvation",
  },
  {
    id: 6,
    title: "Filipenses 2",
    quiz: filipenses2,
    theme: "love",
  },
  {
    id: 7,
    title: "Filipenses 3",
    quiz: filipenses3,
    theme: "faith",
  },
  {
    id: 8,
    title: "Filipenses 4",
    quiz: filipenses4,
    theme: "wisdom",
  },
]

export const booksMocks: Book[] = [
  {
    id: 1,
    name: "Romanos",
    lessons: romanos,
  },
  {
    id: 2,
    name: "Filipenses",
    lessons: filipenses,
  },
]
