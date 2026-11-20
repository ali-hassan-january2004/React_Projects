import type { Product } from '../../types/product'
import { formatPrice } from '../../utils/format'
import Button from '../ui/Button'

interface Props {
  product: Product
  onEdit: (product: Product) => void
  onDelete: (product: Product) => void
  onRestock: (product: Product) => void
}

export default function ProductRow({ product, onEdit, onDelete, onRestock }: Props) {
  const low = product.stock < 10

  return (
    <tr className="border-t border-slate-100 transition-colors hover:bg-slate-50/70">
      <td className="px-5 py-3.5 sm:px-7">
        {product.thumbnail ? (
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-12 w-12 rounded-xl border border-slate-100 bg-white object-cover shadow-sm"
          />
        ) : (
          <div
            aria-hidden="true"
            className="grid h-12 w-12 place-items-center rounded-xl border border-slate-100 bg-slate-100 text-xs font-semibold text-slate-400"
          >
            —
          </div>
        )}
      </td>
      <td className="px-4 py-3.5">
        <p className="max-w-xs truncate text-sm font-semibold text-slate-800">
          {product.title}
        </p>
        {product.brand && (
          <p className="mt-0.5 text-xs text-slate-500">{product.brand}</p>
        )}
      </td>
      <td className="px-4 py-3.5 text-sm capitalize text-slate-500">
        {product.category.replace(/-/g, ' ')}
      </td>
      <td className="px-4 py-3.5 text-sm font-semibold tabular-nums text-slate-800">
        {formatPrice(product.price)}
      </td>
      <td className="px-4 py-3.5">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${
            low ? 'bg-rose-50 text-rose-700' : 'bg-emerald-50 text-emerald-700'
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              low ? 'bg-rose-500' : 'bg-emerald-500'
            }`}
          />
          {product.stock} in stock
        </span>
      </td>
      <td className="px-5 py-3.5 sm:px-7">
        <div className="flex justify-end gap-2">
          <Button
            variant="secondary"
            className="rounded-lg px-2.5 py-1.5 text-xs"
            onClick={() => onRestock(product)}
            aria-label={`Restock ${product.title} by 10`}
          >
            +10
          </Button>
          <Button
            variant="secondary"
            className="rounded-lg px-2.5 py-1.5 text-xs"
            onClick={() => onEdit(product)}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            className="rounded-lg px-2.5 py-1.5 text-xs"
            onClick={() => onDelete(product)}
          >
            Delete
          </Button>
        </div>
      </td>
    </tr>
  )
}