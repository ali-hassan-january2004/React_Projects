import '../styles/Header.css';

interface HeaderProps {
  total: number;
  count: number;
}

function Header({ total, count }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-brand">
        <div className="brand-mark" aria-hidden="true">$</div>
        <div>
          <span className="header-kicker">Personal finance</span>
          <h1>Expense Tracker</h1>
        </div>
      </div>
      <div className="header-total">
        <span>Total spent · {count} expense{count !== 1 ? 's' : ''}</span>
        <strong>${total.toFixed(2)}</strong>
      </div>
    </header>
  );
}

export default Header;