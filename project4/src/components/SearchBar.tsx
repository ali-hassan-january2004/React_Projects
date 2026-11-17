interface SearchBarProps {
  query: string
  onSearchChange: (query: string) => void
}

function SearchBar({ query, onSearchChange }: SearchBarProps) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 shadow-sm transition focus-within:border-indigo-300 focus-within:ring-4 focus-within:ring-indigo-100">
      <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5 shrink-0 text-slate-400">
        <circle cx="8.75" cy="8.75" r="5.75" stroke="currentColor" strokeWidth="1.6" />
        <path d="m13 13 4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      <input
        type="search"
        value={query}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search by name, email or course..."
        aria-label="Search students by name, email, or course"
        className="min-w-0 flex-1 border-0 bg-transparent py-4 text-sm text-slate-900 outline-none placeholder:text-slate-400"
      />
      {query && (
        <button
          type="button"
          onClick={() => onSearchChange('')}
          className="shrink-0 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 focus-visible:outline-2 focus-visible:outline-indigo-600"
        >
          Clear
        </button>
      )}
    </div>
  )
}

export default SearchBar