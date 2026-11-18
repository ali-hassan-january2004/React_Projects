import { useState } from 'react';
import Header from './components/Header';
import BudgetBar from './components/BudgetBar';
import ExpenseForm from './components/ExpenseForm';
import SearchBar from './components/SearchBar';
import ExpenseList from './components/ExpenseList';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useDebounce } from './hooks/useDebounce';
import type { Expense } from './types/expense';

function App() {
  const [storedExpenses, setExpenses] = useLocalStorage<Expense[]>('expenses', []);
  const [storedBudget, setBudget] = useLocalStorage<number>('budget', 1000);
  const expenses = Array.isArray(storedExpenses)
    ? storedExpenses.filter(
        (expense) =>
          expense &&
          typeof expense.id === 'string' &&
          typeof expense.title === 'string' &&
          typeof expense.amount === 'number' &&
          Number.isFinite(expense.amount) &&
          expense.amount > 0 &&
          typeof expense.category === 'string' &&
          typeof expense.date === 'string'
      )
    : [];
  const budget =
    typeof storedBudget === 'number' && Number.isFinite(storedBudget) && storedBudget >= 0
      ? storedBudget
      : 1000;
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 400);

  // Derived values (no extra state needed)
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  const query = debouncedSearch.trim().toLowerCase();
  const filtered = query
    ? expenses.filter(
        (e) =>
          e.title.toLowerCase().includes(query) ||
          e.category.toLowerCase().includes(query)
      )
    : expenses;

  const addExpense = (expense: Expense) =>
    setExpenses((prev) => [expense, ...prev]);

  const deleteExpense = (id: string) =>
    setExpenses((prev) => prev.filter((e) => e.id !== id));

  return (
    <main className="app-shell">
      <div className="container">
        <Header total={total} count={expenses.length} />
        <BudgetBar total={total} budget={budget} onBudgetChange={setBudget} />

        <div className="dashboard-grid">
          <ExpenseForm onAdd={addExpense} />
          <section className="expenses-panel" aria-label="Expense history">
            <SearchBar
              value={search}
              onChange={setSearch}
              isSearching={search !== debouncedSearch}
            />
            <ExpenseList
              expenses={filtered}
              onDelete={deleteExpense}
              hasSearch={Boolean(query)}
            />
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;