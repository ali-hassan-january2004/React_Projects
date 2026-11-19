export default function Notifications() {
  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-slate-800">Notifications</h3>
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" defaultChecked /> Email me about new orders
      </label>
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" /> Email me about low stock
      </label>
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" defaultChecked /> Weekly summary report
      </label>
    </div>
  );
}