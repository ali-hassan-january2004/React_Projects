import type { Product } from '../../types/product'
import { formatPrice } from '../../utils/format'

interface Props {
  total: number
  products: Product[]
}

export default function StatCards({ total, products }: Props) {
  const lowStock = products.filter((p) => p.stock < 10).length
  const pageValue = products.reduce((sum, p) => sum + p.price * p.stock, 0)

  const cards = [
    {
      label: 'Total products',
      value: total.toLocaleString('en-US'),
      note: 'Across your catalog',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path
            d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="m4.5 7.8 7.5 4.3 7.5-4.3M12 12.2V21"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </svg>
      ),
      iconClass: 'bg-indigo-50 text-indigo-600',
    },
    {
      label: 'Low stock',
      value: String(lowStock),
      note: 'Fewer than 10 on this page',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path
            d="M12 3.8 21 20H3l9-16.2Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path
            d="M12 9v4.5m0 3h.01"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      ),
      iconClass: 'bg-amber-50 text-amber-600',
    },
    {
      label: 'Stock value',
      value: formatPrice(pageValue),
      note: 'Value on the current page',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
          <path
            d="M12 3v18m4-13.5c0-1.4-1.7-2.5-4-2.5s-4 1.1-4 2.5 1.7 2.5 4 2.5 4 1.1 4 2.5-1.7 2.5-4 2.5-4-1.1-4-2.5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      ),
      iconClass: 'bg-emerald-50 text-emerald-600',
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {cards.map((c) => (
        <div
          key={c.label}
          className="flex items-start justify-between rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_8px_30px_-24px_rgba(15,23,42,0.3)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-24px_rgba(15,23,42,0.36)] sm:p-6"
        >
          <div>
            <p className="text-sm font-medium text-slate-500">{c.label}</p>
            <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
              {c.value}
            </p>
            <p className="mt-1.5 text-xs text-slate-400">{c.note}</p>
          </div>
          <span
            className={`grid h-11 w-11 place-items-center rounded-xl ${c.iconClass}`}
          >
            {c.icon}
          </span>
        </div>
      ))}
    </div>
  )
}