import { Link } from "react-router-dom";
import FilterBar from "../../components/FilterBar";
import StatusBadge from "../../components/StatusBadge";
import { users } from "../../data/users";
import { useUrlFilters } from "../../hooks/useUrlFilters";

export default function UserList() {
  const { search, status } = useUrlFilters();

  const filtered = users.filter(
    (u) =>
      (u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase())) &&
      (status === "all" || u.status === status)
  );

  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Users</h2>
      <FilterBar
        placeholder="Search name or email..."
        statusOptions={["active", "blocked"]}
      />

      <div className="bg-white border rounded-xl overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 text-slate-500">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((u) => (
              <tr key={u.id} className="border-t hover:bg-slate-50">
                <td className="px-4 py-3">
                  <Link
                    to={`/users/${u.id}`}
                    className="text-indigo-600 font-medium hover:underline"
                  >
                    {u.name}
                  </Link>
                </td>
                <td className="px-4 py-3">{u.email}</td>
                <td className="px-4 py-3"><StatusBadge value={u.role} /></td>
                <td className="px-4 py-3"><StatusBadge value={u.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <p className="p-6 text-center text-slate-500">No users found.</p>
        )}
      </div>
    </div>
  );
}