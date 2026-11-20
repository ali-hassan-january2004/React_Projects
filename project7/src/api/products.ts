import { request } from './client'
import type {
  Category,
  Product,
  ProductInput,
  ProductQuery,
  ProductsResponse,
  SortKey,
} from '../types/product'

const SORT_MAP: Record<
  Exclude<SortKey, 'default'>,
  { sortBy: string; order: 'asc' | 'desc' }
> = {
  'title-asc': { sortBy: 'title', order: 'asc' },
  'title-desc': { sortBy: 'title', order: 'desc' },
  'price-asc': { sortBy: 'price', order: 'asc' },
  'price-desc': { sortBy: 'price', order: 'desc' },
  'stock-asc': { sortBy: 'stock', order: 'asc' },
  'stock-desc': { sortBy: 'stock', order: 'desc' },
}

// GET (list with search, filter, sort, pagination)
export function getProducts(query: ProductQuery, signal?: AbortSignal) {
  const params = new URLSearchParams({
    limit: String(query.limit),
    skip: String((query.page - 1) * query.limit),
  })

  if (query.sort !== 'default') {
    const { sortBy, order } = SORT_MAP[query.sort]
    params.set('sortBy', sortBy)
    params.set('order', order)
  }

  let path = '/products'
  if (query.search) {
    path = '/products/search'
    params.set('q', query.search)
  } else if (query.category) {
    path = `/products/category/${encodeURIComponent(query.category)}`
  }

  return request<ProductsResponse>(`${path}?${params.toString()}`, { signal })
}

// GET (category list for the filter dropdown)
export function getCategories(signal?: AbortSignal) {
  return request<Category[]>('/products/categories', { signal })
}

// POST
export function createProduct(data: ProductInput) {
  return request<Product>('/products/add', {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

// PUT (replace or update the whole product)
export function updateProduct(id: number, data: ProductInput) {
  return request<Product>(`/products/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  })
}

// PATCH (partial update, e.g. only stock)
export function patchProduct(id: number, data: Partial<ProductInput>) {
  return request<Product>(`/products/${id}`, {
    method: 'PATCH',
    body: JSON.stringify(data),
  })
}

// DELETE
export function deleteProduct(id: number) {
  return request<Product & { isDeleted: boolean; deletedOn: string }>(
    `/products/${id}`,
    { method: 'DELETE' },
  )
}