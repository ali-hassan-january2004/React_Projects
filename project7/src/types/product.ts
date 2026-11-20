export interface Product {
  id: number
  title: string
  description: string
  category: string
  price: number
  stock: number
  brand?: string
  thumbnail?: string
}

export interface ProductsResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}

export interface Category {
  slug: string
  name: string
  url: string
}

export type ProductInput = Pick<
  Product,
  'title' | 'description' | 'category' | 'price' | 'stock' | 'brand'
>

export type SortKey =
  | 'default'
  | 'title-asc'
  | 'title-desc'
  | 'price-asc'
  | 'price-desc'
  | 'stock-asc'
  | 'stock-desc'

export interface ProductQuery {
  search: string
  category: string
  sort: SortKey
  page: number
  limit: number
}