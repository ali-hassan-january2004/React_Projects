import type { Expense } from '../types/expense';
import ExpenseItem from './ExpenseItem';
import '../styles/ExpenseList.css';

interface ExpenseListProps {
  expenses: Expense[];
  onDelete: (id: string) => void;
  hasSearch: boolean;
}

function ExpenseList({ expenses, onDelete, hasSearch }: ExpenseListProps) {
  if (expenses.length === 0) {
    return (
      <div className="empty">
        <span aria-hidden="true">⌁</span>
        <h3>{hasSearch ? 'No matches found' : 'No expenses yet'}</h3>
        <p>{hasSearch ? 'Try another title or category.' : 'Add your first expense to get started.'}</p>
      </div>
    );
  }

  return (
    <ul className="expense-list">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default ExpenseList;