import Button from '../ui/Button'

interface Props {
  onAdd: () => void
}

export default function Header({ onAdd }: Props) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-5">
      <div className="flex items-center gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-600/20">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-6 w-6"
          >
            <path
              d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5v-9Z"
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
        </div>
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-600">
            Store workspace
          </p>
          <h1 className="mt-0.5 text-2xl font-semibold tracking-tight text-slate-950 sm:text-[28px]">
            Product inventory
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Keep your catalog organized and up to date.
          </p>
        </div>
      </div>
      <Button
        onClick={onAdd}
        className="h-11 rounded-xl px-4 shadow-lg shadow-indigo-600/15"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          className="h-4 w-4"
        >
          <path
            d="M10 4v12M4 10h12"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
        Add product
      </Button>
    </header>
  )
}