import { Link } from "react-router-dom";
import StatCard from "../components/StatCard";
import StatusBadge from "../components/StatusBadge";
import { products } from "../data/products";
import { orders } from "../data/orders";
import { users } from "../data/users";

export default function Overview() {
  const revenue = orders
    .filter((order) => order.status !== "cancelled")
    .reduce((sum, order) => sum + order.total, 0);
  const activeProducts = products.filter((product) => product.status === "active").length;
  const pendingOrders = orders.filter((order) => order.status === "pending").length;
  const recentOrders = [...orders].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 5);
  const chartOrders = [...orders].sort((a, b) => a.date.localeCompare(b.date)).slice(-7);
  const highestOrder = Math.max(...chartOrders.map((order) => order.total), 1);
  const outOfStock = products.filter((product) => product.stock === 0).length;

  return (
    <div className="overview-page">
      <section className="welcome-row">
        <div>
          <p className="welcome-kicker">YOUR STORE AT A GLANCE</p>
          <h2>Welcome back, Admin <span aria-hidden="true">✦</span></h2>
          <p className="welcome-copy">Here&apos;s what&apos;s happening with your store today.</p>
        </div>
        <div className="today-pill">
          <span aria-hidden="true">◷</span>
          {new Intl.DateTimeFormat("en-US", { month: "long", day: "numeric", year: "numeric" }).format(new Date())}
        </div>
      </section>

      <section className="stats-grid" aria-label="Store statistics">
        <StatCard label="Total revenue" value={`$${revenue.toLocaleString()}`} icon="$" detail="Across non-cancelled orders" />
        <StatCard label="Total orders" value={orders.length} icon="↗" detail="All recorded orders" />
        <StatCard label="Active products" value={`${activeProducts} / ${products.length}`} icon="▧" detail="Available in your catalog" />
        <StatCard label="Customers" value={users.length} icon="♙" detail="Registered accounts" />
      </section>

      <section className="overview-panels">
        <article className="dashboard-panel revenue-panel">
          <div className="panel-heading">
            <div><h3>Order activity</h3><p>Values for your seven most recent orders</p></div>
            <Link className="panel-link" to="/orders">All orders <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="chart-summary">
            <strong>${revenue.toLocaleString()}</strong>
            <span className="chart-summary-label">Total processed revenue</span>
          </div>
          <div className="bar-chart" role="img" aria-label="Bar chart showing the value of the seven most recent orders">
            {chartOrders.map((order) => (
              <div className="chart-column" key={order.id}>
                <div className="chart-bar-track">
                  <div
                    className={`chart-bar${order.status === "cancelled" ? " muted" : ""}`}
                    style={{ height: `${Math.max((order.total / highestOrder) * 100, 8)}%` }}
                    title={`$${order.total} · ${order.status}`}
                  />
                </div>
                <span>{new Date(`${order.date}T00:00:00`).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
              </div>
            ))}
          </div>
          <div className="chart-legend"><span><i /> Order value</span><span>Cancelled orders shown in gray</span></div>
        </article>

        <article className="dashboard-panel inventory-panel">
          <div className="panel-heading">
            <div><h3>Inventory snapshot</h3><p>Current product availability</p></div>
            <Link className="panel-link" to="/products">View products <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="inventory-list">
            {products.slice(0, 4).map((product) => (
              <div className="inventory-item" key={product.id}>
                <div className="inventory-item-top">
                  <span className="product-initial">{product.name.charAt(0)}</span>
                  <span className="inventory-product-name">{product.name}</span>
                  <span className={`inventory-stock${product.stock === 0 ? " out-of-stock" : ""}`}>
                    {product.stock === 0 ? "Out of stock" : `${product.stock} left`}
                  </span>
                </div>
                <div className="inventory-track"><span style={{ width: `${Math.min(product.stock, 100)}%` }} /></div>
              </div>
            ))}
          </div>
          <p className="inventory-footnote">{outOfStock} {outOfStock === 1 ? "product needs" : "products need"} restocking</p>
        </article>
      </section>

      <section className="dashboard-panel recent-panel">
        <div className="panel-heading">
          <div><h3>Recent orders</h3><p>A quick look at your latest customer activity</p></div>
          <span className="recent-count">{pendingOrders} pending</span>
        </div>
        <div className="table-scroll">
          <table className="dashboard-table">
            <thead>
              <tr><th>Order</th><th>Customer</th><th>Date</th><th>Total</th><th>Status</th></tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id}>
                  <td><Link className="order-number" to={`/orders/${order.id}`}>#{order.id}</Link></td>
                  <td><span className="customer-cell"><span className="customer-avatar">{order.customer.charAt(0)}</span>{order.customer}</span></td>
                  <td>{new Date(`${order.date}T00:00:00`).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</td>
                  <td className="amount-cell">${order.total.toLocaleString()}</td>
                  <td><StatusBadge value={order.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
