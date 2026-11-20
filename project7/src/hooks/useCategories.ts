import { useCallback, useEffect, useState } from 'react'
import { getCategories } from '../api/products'
import type { Category } from '../types/product'

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([])
  const [error, setError] = useState<string | null>(null)
  const [retryCount, setRetryCount] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    getCategories(controller.signal)
      .then((data) => {
        if (!controller.signal.aborted) {
          setCategories(data)
          setError(null)
        }
      })
      .catch((err) => {
        if (controller.signal.aborted) return
        setError(err instanceof Error ? err.message : 'Could not load categories')
      })

    return () => controller.abort()
  }, [retryCount])

  const retry = useCallback(() => setRetryCount((count) => count + 1), [])

  return { categories, error, retry }
}