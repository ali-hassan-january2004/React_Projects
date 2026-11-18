import { useEffect, useRef } from 'react';
import '../styles/BudgetBar.css';

interface BudgetBarProps {
  total: number;
  budget: number;
  onBudgetChange: (value: number) => void;
}

function BudgetBar({ total, budget, onBudgetChange }: BudgetBarProps) {
  const percent = budget > 0 ? (total / budget) * 100 : 0;
  const status: 'safe' | 'warning' | 'over' =
    percent > 100 ? 'over' : percent >= 80 ? 'warning' : 'safe';

  // useRef as a stored value: remembers across renders, changing it does NOT re-render
  const alertedRef = useRef(false);

  // Effect 1: update the browser tab title when status changes (with cleanup)
  useEffect(() => {
    document.title =
      status === 'over' ? '⚠️ Over budget! | Expense Tracker' : 'Expense Tracker';

    return () => {
      document.title = 'Expense Tracker';
    };
  }, [status]);

  // Effect 2: warn only once each time the budget is crossed
  useEffect(() => {
    if (status === 'over' && !alertedRef.current) {
      alertedRef.current = true;
      console.warn('Budget exceeded!');
    }
    if (status !== 'over') {
      alertedRef.current = false;
    }
  }, [status]);

  return (
    <section className="budget">
      <div className="budget-top">
        <label htmlFor="budget">Monthly Budget ($)</label>
        <input
          id="budget"
          type="number"
          min="0"
          step="0.01"
          value={budget}
          onChange={(e) => {
            const nextBudget = Number(e.target.value);
            onBudgetChange(
              Number.isFinite(nextBudget) && nextBudget >= 0 ? nextBudget : 0
            );
          }}
        />
      </div>

      <div className="progress">
        <div
          className={`progress-fill ${status}`}
          style={{ width: `${Math.min(percent, 100)}%` }}
        />
      </div>

      <p className={`budget-msg ${status}`}>
        {status === 'safe' && `✅ You've used ${percent.toFixed(0)}% of your budget.`}
        {status === 'warning' &&
          `⚠️ Careful! You've used ${percent.toFixed(0)}% of your budget.`}
        {status === 'over' &&
          `🚨 Over budget by $${(total - budget).toFixed(2)}!`}
      </p>
    </section>
  );
}

export default BudgetBar;