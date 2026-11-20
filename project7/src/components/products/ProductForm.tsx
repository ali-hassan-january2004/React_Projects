import { useState } from 'react'
import type { Category, Product, ProductInput } from '../../types/product'
import Button from '../ui/Button'

interface Props {
  initial?: Product
  categories: Category[]
  onSubmit: (data: ProductInput) => Promise<void>
  onCancel: () => void
}

interface FormState {
  title: string
  description: string
  category: string
  brand: string
  price: string
  stock: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

function validate(f: FormState): FormErrors {
  const errors: FormErrors = {}
  const price = Number(f.price)
  if (!f.title.trim()) errors.title = 'Title is required'
  if (!f.category) errors.category = 'Choose a category'
  if (f.price === '' || !Number.isFinite(price) || price <= 0)
    errors.price = 'Price must be greater than 0'
  if (f.stock === '' || !Number.isInteger(Number(f.stock)) || Number(f.stock) < 0)
    errors.stock = 'Stock must be a whole number, 0 or more'
  return errors
}

export default function ProductForm({ initial, categories, onSubmit, onCancel }: Props) {
  const [form, setForm] = useState<FormState>({
    title: initial?.title ?? '',
    description: initial?.description ?? '',
    category: initial?.category ?? '',
    brand: initial?.brand ?? '',
    price: initial ? String(initial.price) : '',
    stock: initial ? String(initial.stock) : '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitting, setSubmitting] = useState(false)
  const [apiError, setApiError] = useState<string | null>(null)

  const update = (field: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    setSubmitting(true)
    setApiError(null)
    try {
      await onSubmit({
        title: form.title.trim(),
        description: form.description.trim(),
        category: form.category,
        price: Number(form.price),
        stock: Number(form.stock),
        ...(form.brand.trim() && { brand: form.brand.trim() }),
      })
    } catch (err) {
      setApiError(err instanceof Error ? err.message : 'Could not save product')
      setSubmitting(false)
    }
  }

  const inputClass =
    'w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100'

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1.5">
        <label
          htmlFor="product-title"
          className="block text-sm font-medium text-slate-700"
        >
          Title
        </label>
        <input
          id="product-title"
          className={inputClass}
          value={form.title}
          onChange={(e) => update('title', e.target.value)}
          placeholder="e.g. Studio headphones"
          aria-invalid={Boolean(errors.title)}
          aria-describedby={errors.title ? 'product-title-error' : undefined}
        />
        {errors.title && (
          <p id="product-title-error" className="text-xs text-rose-600">
            {errors.title}
          </p>
        )}
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="product-description"
          className="block text-sm font-medium text-slate-700"
        >
          Description
        </label>
        <textarea
          id="product-description"
          rows={3}
          className={inputClass}
          value={form.description}
          onChange={(e) => update('description', e.target.value)}
          placeholder="Add a short product description"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="product-category"
            className="mb-1.5 block text-sm font-medium text-slate-700"
          >
            Category
          </label>
          <select
            id="product-category"
            className={inputClass}
            value={form.category}
            onChange={(e) => update('category', e.target.value)}
            aria-invalid={Boolean(errors.category)}
            aria-describedby={errors.category ? 'product-category-error' : undefined}
          >
            <option value="">Select...</option>
            {categories.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.name}
              </option>
            ))}
          </select>
          {errors.category && (
            <p id="product-category-error" className="mt-1 text-xs text-rose-600">
              {errors.category}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="product-brand"
            className="mb-1.5 block text-sm font-medium text-slate-700"
          >
            Brand <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <input
            id="product-brand"
            className={inputClass}
            value={form.brand}
            onChange={(e) => update('brand', e.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="product-price"
            className="mb-1.5 block text-sm font-medium text-slate-700"
          >
            Price (USD)
          </label>
          <input
            id="product-price"
            type="number"
            step="0.01"
            className={inputClass}
            value={form.price}
            onChange={(e) => update('price', e.target.value)}
            aria-invalid={Boolean(errors.price)}
            aria-describedby={errors.price ? 'product-price-error' : undefined}
          />
          {errors.price && (
            <p id="product-price-error" className="mt-1 text-xs text-rose-600">
              {errors.price}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="product-stock"
            className="mb-1.5 block text-sm font-medium text-slate-700"
          >
            Stock quantity
          </label>
          <input
            id="product-stock"
            type="number"
            step="1"
            className={inputClass}
            value={form.stock}
            onChange={(e) => update('stock', e.target.value)}
            aria-invalid={Boolean(errors.stock)}
            aria-describedby={errors.stock ? 'product-stock-error' : undefined}
          />
          {errors.stock && (
            <p id="product-stock-error" className="mt-1 text-xs text-rose-600">
              {errors.stock}
            </p>
          )}
        </div>
      </div>

      {apiError && (
        <p
          role="alert"
          className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700"
        >
          {apiError}
        </p>
      )}

      <div className="flex justify-end gap-2 border-t border-slate-100 pt-4">
        <Button type="button" variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={submitting}>
          {submitting ? 'Saving...' : initial ? 'Save changes' : 'Create product'}
        </Button>
      </div>
    </form>
  )
}