import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isAuth, setIsAuth] = useState(null);

  const handleLogOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    setIsAuth(false);
    alert("Logged Out successfully");
    console.log("Logged Out successfully");
    navigate("/login");
  };

  const contextValue = {
    isAuth,
    handleLogOut,
  };

  useEffect(() => {
    setIsAuth(JSON.parse(localStorage.getItem("user")));
  },[]);

  console.log(isAuth?.Email);
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
