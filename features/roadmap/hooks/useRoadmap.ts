import { Book, booksMocks } from "@/core/constants/lessonsMocks"
import { useEffect, useState } from "react"

/**
 * Hook para buscar as lições do roadmap
 * Atualmente retorna os mocks, mas no futuro será adaptado para fazer queries GraphQL
 */
export const useRoadmap = () => {
  const [books, setBooks] = useState<Book[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchbooks = async () => {
      try {
        setBooks(booksMocks as Book[])
        // TODO: Substituir por query GraphQL quando o backend estiver disponível
        // const { data } = await apolloClient.query({
        //   query: GET_BOOKS_QUERY,
        // })
        // setBooks(data.books)
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchbooks()
  }, [])

  return { books, loading, error }
}
