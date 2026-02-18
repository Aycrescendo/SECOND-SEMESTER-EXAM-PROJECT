import { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const register = async (formData) => {
    const response = await axios.post(
      "http://localhost:5000/api/register",
      formData
    );
    return response.data;
  };

  const login = async (formData) => {
    const response = await axios.post(
      "http://localhost:5000/api/login",
      formData
    );
    setUser(response.data);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
