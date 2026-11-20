interface Props {
  message?: string
}

export default function EmptyState({
  message = 'No products found. Try changing your search or filters.',
}: Props) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-dashed border-slate-200 bg-slate-50/70 px-6 py-14 text-center">
      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-slate-400 shadow-sm ring-1 ring-slate-200">
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-6 w-6">
          <path
            d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5v-9Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="m4.5 7.8 7.5 4.3 7.5-4.3M12 12.2V21"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <p className="mt-4 text-sm font-semibold text-slate-800">No products found</p>
      <p className="mt-1 max-w-sm text-sm leading-6 text-slate-500">{message}</p>
    </div>
  )
}