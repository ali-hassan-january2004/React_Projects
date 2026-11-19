import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Overview", icon: "◫", end: true },
  { to: "/products", label: "Products", icon: "▧", end: false },
  { to: "/orders", label: "Orders", icon: "↗", end: false },
  { to: "/users", label: "Customers", icon: "♙", end: false },
  { to: "/settings", label: "Settings", icon: "⚙", end: false },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <span className="brand-mark">S</span>
        <span>Shop<span className="brand-light">flow</span></span>
      </div>
      <p className="sidebar-caption">Workspace</p>
      <nav className="sidebar-nav" aria-label="Main navigation">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.end}
            className={({ isActive }) =>
              `sidebar-link${isActive ? " active" : ""}`
            }
          >
            <span className="nav-icon" aria-hidden="true">{link.icon}</span>
            <span>{link.label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="sidebar-bottom">
        <div className="workspace-card">
          <span className="workspace-avatar">S</span>
          <span><strong>Store workspace</strong><small>Pro plan</small></span>
          <span className="workspace-menu" aria-hidden="true">···</span>
        </div>
        <span className="sidebar-version">SHOPFLOW ADMIN · 1.0</span>
      </div>
    </aside>
  );
}