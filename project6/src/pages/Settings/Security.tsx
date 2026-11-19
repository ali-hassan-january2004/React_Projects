export default function Security() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-slate-800">Security</h3>
      <input type="password" placeholder="Current password" className="border rounded-lg px-3 py-2 w-full text-sm" />
      <input type="password" placeholder="New password" className="border rounded-lg px-3 py-2 w-full text-sm" />
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm">
        Update password
      </button>
    </div>
  );
}