import { lessonsMocks } from "@/core/constants/lessonsMocks"
import { QuizStep } from "@/features/quiz/hooks/useQuizWizard"
import { useEffect, useState } from "react"

export interface Lesson {
  id: number
  title: string
  quiz: QuizStep[]
}

interface UseRoadmapReturn {
  lessons: Lesson[]
  loading: boolean
  error: Error | null
}

/**
 * Hook para buscar as lições do roadmap
 * Atualmente retorna os mocks, mas no futuro será adaptado para fazer queries GraphQL
 */
export function useRoadmap(): UseRoadmapReturn {
  const [lessons, setLessons] = useState<Lesson[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        setLessons(lessonsMocks as Lesson[])
        // TODO: Substituir por query GraphQL quando o backend estiver disponível
        // const { data } = await apolloClient.query({
        //   query: GET_LESSONS_QUERY,
        // })
        // setLessons(data.lessons)
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchLessons()
  }, [])

  return { lessons, loading, error }
}
