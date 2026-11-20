import { useState } from 'react'
import type { Product } from '../../types/product'
import Button from '../ui/Button'

interface Props {
  product: Product
  onConfirm: () => Promise<void>
  onCancel: () => void
}

export default function DeleteConfirm({ product, onConfirm, onCancel }: Props) {
  const [deleting, setDeleting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleConfirm = async () => {
    setDeleting(true)
    setError(null)
    try {
      await onConfirm()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not delete product')
      setDeleting(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-3 rounded-xl border border-rose-100 bg-rose-50/70 p-4">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white text-rose-600 shadow-sm">
          <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5">
            <path
              d="M10 6.5v4m0 3h.01M3.3 15.2 8.5 5.7a1.7 1.7 0 0 1 3 0l5.2 9.5a1.7 1.7 0 0 1-1.5 2.5H4.8a1.7 1.7 0 0 1-1.5-2.5Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <p className="pt-1 text-sm leading-6 text-slate-600">
          Are you sure you want to delete <strong className="text-slate-900">{product.title}</strong>?
          This action cannot be undone.
        </p>
      </div>
      {error && (
        <p role="alert" className="text-sm text-rose-600">
          {error}
        </p>
      )}
      <div className="flex justify-end gap-2 border-t border-slate-100 pt-4">
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleConfirm} disabled={deleting}>
          {deleting ? 'Deleting...' : 'Delete'}
        </Button>
      </div>
    </div>
  )
}