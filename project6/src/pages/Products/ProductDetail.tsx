import { Link, useNavigate, useParams } from "react-router-dom";
import StatusBadge from "../../components/StatusBadge";
import { products } from "../../data/products";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div>
        <p className="text-slate-600 mb-3">Product not found.</p>
        <Link to="/products" className="text-indigo-600 hover:underline">
          Back to products
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
        <h2 className="text-2xl font-bold text-slate-800 mb-4">{product.name}</h2>
        <dl className="space-y-3 text-sm">
          <div className="flex justify-between"><dt className="text-slate-500">ID</dt><dd>{product.id}</dd></div>
          <div className="flex justify-between"><dt className="text-slate-500">Category</dt><dd>{product.category}</dd></div>
          <div className="flex justify-between"><dt className="text-slate-500">Price</dt><dd>${product.price}</dd></div>
          <div className="flex justify-between"><dt className="text-slate-500">Stock</dt><dd>{product.stock}</dd></div>
          <div className="flex justify-between"><dt className="text-slate-500">Status</dt><dd><StatusBadge value={product.status} /></dd></div>
        </dl>
      </div>
    </div>
  );
}