import { useState } from 'react'
import Header from './components/layout/Header'
import StatCards from './components/layout/StatCards'
import SearchBar from './components/controls/SearchBar'
import CategoryFilter from './components/controls/CategoryFilter'
import SortSelect from './components/controls/SortSelect'
import Pagination from './components/controls/Pagination'
import ProductTable from './components/products/ProductTable'
import ProductModal from './components/products/ProductModal'
import ProductForm from './components/products/ProductForm'
import DeleteConfirm from './components/products/DeleteConfirm'
import Spinner from './components/ui/Spinner'
import ErrorMessage from './components/ui/ErrorMessage'
import EmptyState from './components/ui/EmptyState'
import { useProducts } from './hooks/useProducts'
import { useCategories } from './hooks/useCategories'
import { useDebounce } from './hooks/useDebounce'
import type { Product, ProductInput, SortKey } from './types/product'

const PAGE_SIZE = 10

type ModalState =
  | { type: 'create' }
  | { type: 'edit'; product: Product }
  | { type: 'delete'; product: Product }
  | null

export default function App() {
  const [searchInput, setSearchInput] = useState('')
  const [category, setCategory] = useState('')
  const [sort, setSort] = useState<SortKey>('default')
  const [page, setPage] = useState(1)
  const [modal, setModal] = useState<ModalState>(null)
  const [actionError, setActionError] = useState<string | null>(null)

  const search = useDebounce(searchInput.trim(), 400)
  const {
    categories,
    error: categoriesError,
    retry: retryCategories,
  } = useCategories()

  const {
    products,
    total,
    loading,
    error,
    retry,
    addProduct,
    editProduct,
    changeStock,
    removeProduct,
  } = useProducts({ search, category, sort, page, limit: PAGE_SIZE })

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE))
  const closeModal = () => setModal(null)

  const handleSearch = (value: string) => {
    setSearchInput(value)
    setPage(1)
  }
  const handleCategory = (value: string) => {
    setCategory(value)
    setPage(1)
  }
  const handleSort = (value: SortKey) => {
    setSort(value)
    setPage(1)
  }

  const handleCreate = async (data: ProductInput) => {
    await addProduct(data)
    closeModal()
  }

  const handleEdit = async (data: ProductInput) => {
    if (modal?.type !== 'edit') return
    await editProduct(modal.product.id, data)
    closeModal()
  }

  const handleDelete = async () => {
    if (modal?.type !== 'delete') return
    await removeProduct(modal.product.id)
    if (products.length === 1 && page > 1) {
      setPage((currentPage) => Math.max(1, currentPage - 1))
    }
    closeModal()
  }

  const handleRestock = async (product: Product) => {
    setActionError(null)
    try {
      await changeStock(product.id, product.stock + 10)
    } catch (err) {
      setActionError(err instanceof Error ? err.message : 'Could not update stock')
    }
  }

  return (
    <div className="min-h-screen bg-[#f6f7fb] text-slate-900">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 h-80 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.12),_transparent_68%)]"
      />
      <div className="relative mx-auto max-w-[1440px] px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <Header onAdd={() => setModal({ type: 'create' })} />

        <main className="mt-8 space-y-7">
          <StatCards total={total} products={products} />

          <section className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_12px_40px_-24px_rgba(15,23,42,0.25)]">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 px-5 py-5 sm:px-7">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-indigo-600">
                  Catalog
                </p>
                <h2 className="mt-1 text-xl font-semibold tracking-tight text-slate-900">
                  Inventory overview
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Search, filter, and manage your products.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                DummyJSON catalog
              </span>
            </div>

            <div className="grid gap-3 border-b border-slate-100 bg-slate-50/60 p-5 sm:grid-cols-[minmax(240px,1.5fr)_minmax(180px,1fr)_minmax(180px,1fr)] sm:px-7">
              <SearchBar value={searchInput} onChange={handleSearch} />
              <CategoryFilter
                categories={categories}
                value={category}
                onChange={handleCategory}
                disabled={search !== ''}
              />
              <SortSelect value={sort} onChange={handleSort} />
            </div>

            {categoriesError && (
              <div className="p-5 sm:px-7">
                <ErrorMessage
                  title="Could not load categories"
                  message={categoriesError}
                  onRetry={retryCategories}
                />
              </div>
            )}

            {actionError && (
              <p
                role="alert"
                className="mx-5 mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 sm:mx-7"
              >
                {actionError}
              </p>
            )}

            {loading && <Spinner />}
            {!loading && error && (
              <div className="p-5 sm:p-7">
                <ErrorMessage message={error} onRetry={retry} />
              </div>
            )}
            {!loading && !error && products.length === 0 && (
              <div className="p-5 sm:p-7">
                <EmptyState />
              </div>
            )}
            {!loading && !error && products.length > 0 && (
              <>
                <ProductTable
                  products={products}
                  onEdit={(product) => setModal({ type: 'edit', product })}
                  onDelete={(product) => setModal({ type: 'delete', product })}
                  onRestock={handleRestock}
                />
                <div className="border-t border-slate-100 px-5 py-4 sm:px-7">
                  <Pagination page={page} totalPages={totalPages} onChange={setPage} />
                </div>
              </>
            )}
          </section>
        </main>
      </div>

      {modal?.type === 'create' && (
        <ProductModal title="Add product" onClose={closeModal}>
          <ProductForm
            categories={categories}
            onSubmit={handleCreate}
            onCancel={closeModal}
          />
        </ProductModal>
      )}

      {modal?.type === 'edit' && (
        <ProductModal title="Edit product" onClose={closeModal}>
          <ProductForm
            key={modal.product.id}
            initial={modal.product}
            categories={categories}
            onSubmit={handleEdit}
            onCancel={closeModal}
          />
        </ProductModal>
      )}

      {modal?.type === 'delete' && (
        <ProductModal title="Delete product" onClose={closeModal}>
          <DeleteConfirm
            product={modal.product}
            onConfirm={handleDelete}
            onCancel={closeModal}
          />
        </ProductModal>
      )}
    </div>
  )
}