import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
      <h1 className="text-6xl font-bold text-indigo-600">404</h1>
      <p className="text-slate-600 mt-2 mb-6">This page does not exist.</p>
      <Link
        to="/"
        className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700"
      >
        Go to dashboard
      </Link>
    </div>
  );
}