import Button from '../ui/Button'

interface Props {
  page: number
  totalPages: number
  onChange: (page: number) => void
}

export default function Pagination({ page, totalPages, onChange }: Props) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <p className="text-xs font-medium text-slate-500">
        Page <span className="text-slate-800">{page}</span> of{' '}
        <span className="text-slate-800">{totalPages}</span>
      </p>
      <div className="flex items-center gap-2">
      <Button
        variant="secondary"
        disabled={page <= 1}
        className="rounded-lg px-3 py-2 text-xs"
        onClick={() => onChange(page - 1)}
      >
        Previous
      </Button>
      <Button
        variant="secondary"
        disabled={page >= totalPages}
        className="rounded-lg px-3 py-2 text-xs"
        onClick={() => onChange(page + 1)}
      >
        Next
      </Button>
      </div>
    </div>
  )
}