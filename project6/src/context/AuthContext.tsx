import { useState } from "react";
import type { ReactNode } from "react";
import { AuthContext } from "./auth-context";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem("admin-auth") === "true"
  );

  const login = (email: string, password: string) => {
    if (email === "admin@shop.com" && password === "admin123") {
      setIsLoggedIn(true);
      localStorage.setItem("admin-auth", "true");
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("admin-auth");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}