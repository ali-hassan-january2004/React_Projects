import { useEffect, useRef } from 'react';
import '../styles/SearchBar.css';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  isSearching: boolean;
}

function SearchBar({ value, onChange, isSearching }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  // Event listener effect: add on mount, remove on unmount
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onChange('');
        inputRef.current?.blur();
      }
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onChange]);

  return (
    <div className="search">
      <span className="search-icon" aria-hidden="true">⌕</span>
      <input
        ref={inputRef}
        type="text"
        aria-label="Search expenses"
        placeholder="Search title or category..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {isSearching && <span className="searching">Searching...</span>}
    </div>
  );
}

export default SearchBar;