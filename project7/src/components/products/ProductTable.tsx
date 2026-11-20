import type { Product } from '../../types/product'
import ProductRow from './ProductRow'

interface Props {
  products: Product[]
  onEdit: (product: Product) => void
  onDelete: (product: Product) => void
  onRestock: (product: Product) => void
}

export default function ProductTable({ products, onEdit, onDelete, onRestock }: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[820px] text-left">
        <thead className="bg-slate-50/80 text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-500">
          <tr>
            <th className="w-20 px-5 py-3.5 sm:px-7">Item</th>
            <th className="px-4 py-3.5">Product</th>
            <th className="px-4 py-3.5">Category</th>
            <th className="px-4 py-3.5">Price</th>
            <th className="px-4 py-3.5">Stock status</th>
            <th className="px-5 py-3.5 text-right sm:px-7">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <ProductRow
              key={p.id}
              product={p}
              onEdit={onEdit}
              onDelete={onDelete}
              onRestock={onRestock}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}