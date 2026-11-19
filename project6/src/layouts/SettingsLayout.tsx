import { NavLink, Outlet } from "react-router-dom";

const tabs = [
  { to: "/settings/profile", label: "Profile" },
  { to: "/settings/security", label: "Security" },
  { to: "/settings/notifications", label: "Notifications" },
];

export default function SettingsLayout() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Settings</h2>
      <div className="flex gap-2 border-b mb-6">
        {tabs.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            className={({ isActive }) =>
              `px-4 py-2 text-sm font-medium -mb-px border-b-2 ${
                isActive
                  ? "border-indigo-600 text-indigo-600"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </div>
      <div className="bg-white border rounded-xl p-6 max-w-xl">
        <Outlet />
      </div>
    </div>
  );
}