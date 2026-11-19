export default function Profile() {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-slate-800">Profile</h3>
      <input defaultValue="Admin User" className="border rounded-lg px-3 py-2 w-full text-sm" />
      <input defaultValue="admin@shop.com" className="border rounded-lg px-3 py-2 w-full text-sm" />
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm">
        Save changes
      </button>
    </div>
  );
}