import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Login() {
  const { isLoggedIn, login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: { pathname?: string } } | null)?.from?.pathname ?? "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  if (isLoggedIn) return <Navigate to="/" replace />;

  const handleLogin = () => {
    if (login(email, password)) {
      navigate(from, { replace: true });
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-screen min-h-screen flex items-center justify-center bg-slate-100">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleLogin();
        }}
        className="login-card bg-white p-8 rounded-2xl shadow w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold text-slate-800 mb-1">ShopAdmin</h1>
        <p className="text-sm text-slate-500 mb-6">Sign in to continue</p>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="border rounded-lg px-3 py-2 w-full mb-3 text-sm"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="border rounded-lg px-3 py-2 w-full mb-3 text-sm"
        />

        {error && <p className="text-red-600 text-sm mb-3">{error}</p>}

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-sm font-medium"
        >
          Login
        </button>

        <p className="text-xs text-slate-400 mt-4 text-center">
          Demo: admin@shop.com / admin123
        </p>
      </form>
    </div>
  );
}