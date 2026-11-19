import { Link, useNavigate, useParams } from "react-router-dom";
import StatusBadge from "../../components/StatusBadge";
import { orders } from "../../data/orders";

export default function OrderDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const order = orders.find((o) => o.id === Number(id));

  if (!order) {
    return (
      <div>
        <p className="text-slate-600 mb-3">Order not found.</p>
        <Link to="/orders" className="text-indigo-600 hover:underline">
          Back to orders
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
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Order #{order.id}</h2>
        <dl className="space-y-3 text-sm">
          <div className="flex justify-between"><dt className="text-slate-500">Customer</dt><dd>{order.customer}</dd></div>
          <div className="flex justify-between"><dt className="text-slate-500">Total</dt><dd>${order.total}</dd></div>
          <div className="flex justify-between"><dt className="text-slate-500">Date</dt><dd>{order.date}</dd></div>
          <div className="flex justify-between"><dt className="text-slate-500">Status</dt><dd><StatusBadge value={order.status} /></dd></div>
        </dl>
      </div>
    </div>
  );
}