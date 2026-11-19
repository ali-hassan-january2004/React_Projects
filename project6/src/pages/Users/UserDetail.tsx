import { Link, useNavigate, useParams } from "react-router-dom";
import StatusBadge from "../../components/StatusBadge";
import { users } from "../../data/users";

export default function UserDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const user = users.find((u) => u.id === Number(id));

  if (!user) {
    return (
      <div>
        <p className="text-slate-600 mb-3">User not found.</p>
        <Link to="/users" className="text-indigo-600 hover:underline">
          Back to users
        </Link>
      </div>
    );
  }

  return (
    <div>
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-indigo-600 hover:underline mb-4"
      >
        &larr; Back
      </button>
      <div className="bg-white border rounded-xl p-6 max-w-lg">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">{user.name}</h2>
        <dl className="space-y-3 text-sm">
          <div className="flex justify-between"><dt className="text-slate-500">Email</dt><dd>{user.email}</dd></div>
          <div className="flex justify-between"><dt className="text-slate-500">Role</dt><dd><StatusBadge value={user.role} /></dd></div>
          <div className="flex justify-between"><dt className="text-slate-500">Status</dt><dd><StatusBadge value={user.status} /></dd></div>
        </dl>
      </div>
    </div>
  );
}