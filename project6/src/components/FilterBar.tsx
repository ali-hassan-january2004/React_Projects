import { useUrlFilters } from "../hooks/useUrlFilters";

type FilterBarProps = {
  placeholder: string;
  statusOptions: string[];
};

export default function FilterBar({ placeholder, statusOptions }: FilterBarProps) {
  const { search, status, setFilter, clearFilters } = useUrlFilters();

  return (
    <div className="flex flex-wrap gap-3 mb-4">
      <input
        value={search}
        onChange={(e) => setFilter("search", e.target.value)}
        placeholder={placeholder}
        className="border rounded-lg px-3 py-2 text-sm w-64 bg-white"
      />
      <select
        value={status}
        onChange={(e) => setFilter("status", e.target.value)}
        className="border rounded-lg px-3 py-2 text-sm bg-white capitalize"
      >
        <option value="all">All statuses</option>
        {statusOptions.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
      <button
        onClick={clearFilters}
        className="text-sm px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200"
      >
        Clear
      </button>
    </div>
  );
}