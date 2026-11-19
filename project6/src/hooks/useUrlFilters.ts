import { useSearchParams } from "react-router-dom";

export function useUrlFilters() {
  const [params, setParams] = useSearchParams();

  const search = params.get("search") ?? "";
  const status = params.get("status") ?? "all";

  const setFilter = (key: string, value: string) => {
    setParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        if (!value || value === "all") next.delete(key);
        else next.set(key, value);
        return next;
      },
      { replace: true }
    );
  };

  const clearFilters = () => setParams({});

  return { search, status, setFilter, clearFilters };
}