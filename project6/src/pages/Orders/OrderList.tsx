import { Link } from "react-router-dom";
import FilterBar from "../../components/FilterBar";
import StatusBadge from "../../components/StatusBadge";
import { orders } from "../../data/orders";
import { useUrlFilters } from "../../hooks/useUrlFilters";

export default function OrderList() {
  const { search, status } = useUrlFilters();

  const filtered = orders.filter(
    (o) =>
      o.customer.toLowerCase().includes(search.toLowerCase()) &&
      (status === "all" || o.status === status)
  );

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Orders</h2>
      <FilterBar
        placeholder="Search by customer..."
        statusOptions={["pending", "shipped", "delivered", "cancelled"]}
      />

      <div className="bg-white border rounded-xl overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="px-4 py-3">Order</th>
              <th className="px-4 py-3">Customer</th>
              <th className="px-4 py-3">Total</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((o) => (
              <tr key={o.id} className="border-t hover:bg-slate-50">
                <td className="px-4 py-3">
                  <Link
                    to={`/orders/${o.id}`}
                    className="text-indigo-600 font-medium hover:underline"
                  >
                    #{o.id}
                  </Link>
                </td>
                <td className="px-4 py-3">{o.customer}</td>
                <td className="px-4 py-3">${o.total}</td>
                <td className="px-4 py-3">{o.date}</td>
                <td className="px-4 py-3">
                  <StatusBadge value={o.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <p className="p-6 text-center text-slate-500">No orders found.</p>
        )}
      </div>
    </div>
  );
}