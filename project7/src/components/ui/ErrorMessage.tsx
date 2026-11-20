import Button from './Button'

interface Props {
  title?: string
  message: string
  onRetry: () => void
}

export default function ErrorMessage({
  title = 'Could not load products',
  message,
  onRetry,
}: Props) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-rose-200 bg-rose-50/80 p-4 sm:px-5">
      <div>
        <p className="font-semibold text-rose-800">{title}</p>
        <p className="mt-1 text-sm text-rose-700">{message}</p>
      </div>
      <div>
        <Button onClick={onRetry}>Retry</Button>
      </div>
    </div>
  )
}