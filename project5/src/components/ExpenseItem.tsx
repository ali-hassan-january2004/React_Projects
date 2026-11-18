import type { Expense } from '../types/expense';

interface ExpenseItemProps {
  expense: Expense;
  onDelete: (id: string) => void;
}

function ExpenseItem({ expense, onDelete }: ExpenseItemProps) {
  const formattedDate = new Date(`${expense.date}T12:00:00`).toLocaleDateString(
    undefined,
    { month: 'short', day: 'numeric', year: 'numeric' }
  );

  return (
    <li className="expense-item">
      <div className={`category-mark category-${expense.category.toLowerCase()}`} aria-hidden="true">
        {expense.category.slice(0, 1)}
      </div>
      <div className="expense-info">
        <strong>{expense.title}</strong>
        <span>
          <em className="tag">{expense.category}</em>
          <span className="expense-date">{formattedDate}</span>
        </span>
      </div>
      <div className="expense-right">
        <span className="expense-amount">${expense.amount.toFixed(2)}</span>
        <button
          className="delete-btn"
          onClick={() => onDelete(expense.id)}
          aria-label={`Delete ${expense.title}`}
        >
          ✕
        </button>
      </div>
    </li>
  );
}

export default ExpenseItem;