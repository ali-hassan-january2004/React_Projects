const colors: Record<string, string> = {
  active: "bg-green-100 text-green-700",
  delivered: "bg-green-100 text-green-700",
  shipped: "bg-blue-100 text-blue-700",
  pending: "bg-yellow-100 text-yellow-700",
  draft: "bg-slate-100 text-slate-600",
  "out-of-stock": "bg-red-100 text-red-700",
  cancelled: "bg-red-100 text-red-700",
  blocked: "bg-red-100 text-red-700",
  admin: "bg-purple-100 text-purple-700",
  manager: "bg-indigo-100 text-indigo-700",
  customer: "bg-slate-100 text-slate-600",
};

export default function StatusBadge({ value }: { value: string }) {
  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${
        colors[value] ?? "bg-slate-100 text-slate-600"
      }`}
    >
      {value}
    </span>
  );
}