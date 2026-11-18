import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { CATEGORIES } from '../types/expense';
import type { Category, Expense } from '../types/expense';
import '../styles/ExpenseForm.css';

interface ExpenseFormProps {
  onAdd: (expense: Expense) => void;
}

const today = () => {
  const now = new Date();
  const offset = now.getTimezoneOffset() * 60_000;
  return new Date(now.getTime() - offset).toISOString().slice(0, 10);
};

function ExpenseForm({ onAdd }: ExpenseFormProps) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState<Category>('Food');
  const [date, setDate] = useState(today());
  const [error, setError] = useState('');

  // useRef for DOM access
  const titleRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const numericAmount = Number(amount);
    if (!title.trim() || !Number.isFinite(numericAmount) || numericAmount <= 0) {
      setError('Please enter a title and an amount greater than 0.');
      return;
    }

    onAdd({
      id: crypto.randomUUID(),
      title: title.trim(),
      amount: Math.round(numericAmount * 100) / 100,
      category,
      date,
    });

    setTitle('');
    setAmount('');
    setError('');
    titleRef.current?.focus(); // jump back to the title input
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="section-heading">
        <div>
          <span className="section-kicker">New entry</span>
          <h2>Add an expense</h2>
        </div>
      </div>

      <div className="form-grid">
        <label className="field field-wide">
          <span>Title</span>
          <input
            ref={titleRef}
            type="text"
            required
            maxLength={80}
            placeholder="e.g. Team lunch"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label className="field">
          <span>Amount</span>
          <div className="amount-field">
            <span aria-hidden="true">$</span>
            <input
              type="number"
              required
              min="0.01"
              step="0.01"
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </label>
        <label className="field">
          <span>Category</span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as Category)}
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label className="field field-wide">
          <span>Date</span>
          <input
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
      </div>

      {error && <p className="form-error">{error}</p>}

      <button type="submit">+ Add Expense</button>
    </form>
  );
}

export default ExpenseForm;