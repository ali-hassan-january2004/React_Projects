export default function Spinner() {
  return (
    <div
      className="flex min-h-72 flex-col items-center justify-center gap-3 text-sm text-slate-500"
      role="status"
      aria-label="Loading products"
    >
      <div className="h-9 w-9 animate-spin rounded-full border-[3px] border-indigo-100 border-t-indigo-600" />
      Loading your inventory...
    </div>
  )
}