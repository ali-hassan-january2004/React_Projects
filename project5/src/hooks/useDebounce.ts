import { useEffect, useState } from 'react';

export function useDebounce<T>(value: T, delay = 400): T {
  const [debounced, setDebounced] = useState<T>(value);

  useEffect(() => {
    const timerId = setTimeout(() => setDebounced(value), delay);

    // Cleanup: cancel the old timer before the next one starts (and on unmount)
    return () => clearTimeout(timerId);
  }, [value, delay]);

  return debounced;
}