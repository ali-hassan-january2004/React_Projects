import { useCallback, useEffect, useState } from 'react'
import {
  createProduct,
  deleteProduct,
  getProducts,
  patchProduct,
  updateProduct,
} from '../api/products'
import type { Product, ProductInput, ProductQuery } from '../types/product'

// DummyJSON does not really save new items, so we give them a local id
// and skip server calls for them later.
const LOCAL_ID_START = 1_000_000
const isLocal = (id: number) => id >= LOCAL_ID_START

export function useProducts(query: ProductQuery) {
  const { search, category, sort, page, limit } = query

  const [result, setResult] = useState<{
    key: string | null
    products: Product[]
    total: number
    error: string | null
  }>({ key: null, products: [], total: 0, error: null })
  const [retryCount, setRetryCount] = useState(0)
  const requestKey = JSON.stringify([search, category, sort, page, limit, retryCount])

  useEffect(() => {
    const controller = new AbortController()

    getProducts({ search, category, sort, page, limit }, controller.signal)
      .then((data) => {
        if (controller.signal.aborted) return
        setResult({
          key: requestKey,
          products: data.products,
          total: data.total,
          error: null,
        })
      })
      .catch((err) => {
        if (err instanceof DOMException && err.name === 'AbortError') return
        if (controller.signal.aborted) return
        setResult((previous) => ({
          ...previous,
          key: requestKey,
          error: err instanceof Error ? err.message : 'Something went wrong',
        }))
      })

    return () => controller.abort()
  }, [search, category, sort, page, limit, retryCount, requestKey])

  const retry = useCallback(() => setRetryCount((c) => c + 1), [])
  const loading = result.key !== requestKey
  const error = loading ? null : result.error

  // POST
  const addProduct = async (input: ProductInput) => {
    const created = await createProduct(input)
    const local: Product = { ...created, id: Date.now() }
    setResult((previous) => ({
      ...previous,
      products: [local, ...previous.products],
      total: previous.total + 1,
    }))
  }

  // PUT
  const editProduct = async (id: number, input: ProductInput) => {
    const result: Partial<Product> = isLocal(id)
      ? input
      : await updateProduct(id, input)
    setResult((previous) => ({
      ...previous,
      products: previous.products.map((p) =>
        p.id === id ? { ...p, ...result, id } : p,
      ),
    }))
  }

  // PATCH
  const changeStock = async (id: number, stock: number) => {
    const result: Partial<Product> = isLocal(id)
      ? { stock }
      : await patchProduct(id, { stock })
    setResult((previous) => ({
      ...previous,
      products: previous.products.map((p) =>
        p.id === id ? { ...p, ...result, id } : p,
      ),
    }))
  }

  // DELETE
  const removeProduct = async (id: number) => {
    if (!isLocal(id)) await deleteProduct(id)
    setResult((previous) => ({
      ...previous,
      products: previous.products.filter((p) => p.id !== id),
      total: Math.max(0, previous.total - 1),
    }))
  }

  return {
    products: result.products,
    total: result.total,
    loading,
    error,
    retry,
    addProduct,
    editProduct,
    changeStock,
    removeProduct,
  }
}