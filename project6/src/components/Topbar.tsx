import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const pageTitles: Record<string, string> = {
  "/": "Overview",
  "/products": "Products",
  "/orders": "Orders",
  "/users": "Customers",
  "/settings": "Settings",
};

export default function Topbar() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const pageTitle = pageTitles[pathname] ?? pageTitles[`/${pathname.split("/")[1]}`] ?? "Dashboard";

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <header className="topbar">
      <div className="topbar-heading">
        <span className="topbar-eyebrow">STORE MANAGEMENT</span>
        <h1>{pageTitle}</h1>
      </div>
      <div className="topbar-actions">
        <span className="online-indicator"><i /> Store is live</span>
        <span className="topbar-divider" />
        <div className="admin-profile">
          <span className="admin-avatar">A</span>
          <span className="admin-name"><strong>Admin</strong><small>Store owner</small></span>
        </div>
        <button onClick={handleLogout} className="logout-button">
          <span aria-hidden="true">↪</span> Log out
        </button>
      </div>
    </header>
  );
}