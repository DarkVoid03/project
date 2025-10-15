import { createContext, useContext, useState } from "react";

import BASE_URL from "../config.js";
import axios from "axios";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setloggedIn] = useState(false);
  const storedToken = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  const verifyToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      return loggedIn;
    }
    const server = { token: token };
    const user = await axios.post(`${BASE_URL}/api/verify`, server);

    if (user.status === 200) {
      setloggedIn(true);
      return true;
    }
    return loggedIn;
  };
  return (
    <AuthContext.Provider value={{ storedToken, verifyToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};