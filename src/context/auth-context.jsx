import { createContext, useState, useEffect } from "react";
import { api } from "../api/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const login = async ({ phone, password }) => {    
    try {
      const res = await api.post("/auth/login", { phone, password });
      const tokens = res.data.data;

      localStorage.setItem("access_token", tokens.access_token);
      localStorage.setItem("refresh_token", tokens.refresh_token);
      api.defaults.headers.common["Authorization"] = `Bearer ${tokens.access_token}`;

      setIsAuth(true);
      return true;
    } catch (err) {
      console.error("Login error:", err);
      return false;
    }
  };

  const logout = async () => {
    try {
      await api.post("/auth/logout");
    } catch (err) {
      console.error("Logout error:", err);
    }

    localStorage.clear();
    delete api.defaults.headers.common["Authorization"];
    setIsAuth(false);
  };

  const getMe = async () => {
    try {
      await api.get("/auth/get-me");
      setIsAuth(true);
      } catch {
        setIsAuth(false);
    } finally {
      setLoading(false);
    }
  };

    useEffect(() => {
      const token = localStorage.getItem("access_token");
      if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        getMe();
      } else {
        setLoading(false);
      }
    }, []);

  return (
    <AuthContext.Provider value={{ isAuth, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
