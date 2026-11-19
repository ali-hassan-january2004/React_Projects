import { Link } from "react-router-dom";
import FilterBar from "../../components/FilterBar";
import StatusBadge from "../../components/StatusBadge";
import { products } from "../../data/products";
import { useUrlFilters } from "../../hooks/useUrlFilters";

export default function ProductList() {
  const { search, status } = useUrlFilters();

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) &&
      (status === "all" || p.status === status)
  );

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Products</h2>
      <FilterBar
        placeholder="Search products..."
        statusOptions={["active", "draft", "out-of-stock"]}
      />

      <div className="bg-white border rounded-xl overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Price</th>
              <th className="px-4 py-3">Stock</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr key={p.id} className="border-t hover:bg-slate-50">
                <td className="px-4 py-3">
                  <Link
                    to={`/products/${p.id}`}
                    className="text-indigo-600 font-medium hover:underline"
                  >
                    {p.name}
                  </Link>
                </td>
                <td className="px-4 py-3">{p.category}</td>
                <td className="px-4 py-3">${p.price}</td>
                <td className="px-4 py-3">{p.stock}</td>
                <td className="px-4 py-3">
                  <StatusBadge value={p.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <p className="p-6 text-center text-slate-500">No products found.</p>
        )}
      </div>
    </div>
  );
}