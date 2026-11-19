import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import SettingsLayout from "./layouts/SettingsLayout";
import Login from "./pages/Login";
import Overview from "./pages/Overview";
import ProductList from "./pages/Products/ProductList";
import ProductDetail from "./pages/Products/ProductDetail";
import OrderList from "./pages/Orders/OrderList";
import OrderDetail from "./pages/Orders/OrderDetail";
import UserList from "./pages/Users/UserList";
import UserDetail from "./pages/Users/UserDetail";
import Profile from "./pages/Settings/Profile";
import Security from "./pages/Settings/Security";
import Notifications from "./pages/Settings/Notifications";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route index element={<Overview />} />

          <Route path="products" element={<ProductList />} />
          <Route path="products/:id" element={<ProductDetail />} />

          <Route path="orders" element={<OrderList />} />
          <Route path="orders/:id" element={<OrderDetail />} />

          <Route path="users" element={<UserList />} />
          <Route path="users/:id" element={<UserDetail />} />

          <Route path="settings" element={<SettingsLayout />}>
            <Route index element={<Navigate to="profile" replace />} />
            <Route path="profile" element={<Profile />} />
            <Route path="security" element={<Security />} />
            <Route path="notifications" element={<Notifications />} />
          </Route>
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}