import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDataContext } from "./context";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();   
    const [isAuth, setIsAuth] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? true : false;
    });    //// using localstorage by Check whether 'user' data exists in localStorage or not  

    const [userID, setUserID] = useState(null);
    useEffect(() => {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser && storedUser.UserID) {
        setUserID(storedUser.UserID); 
      }
    }, []);

  const handleLogOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
    setIsAuth(false);
    console.log("Logged Out successfully");
    navigate("/login");
    // alert("Logged Out successfully");
  };

  useEffect(() => {
    console.log("User logged in ? ", isAuth);  //// to verify the state after the user log-in
  }, [isAuth]);

  const contextValue = {
    isAuth,
    handleLogOut,
    setIsAuth,
    setUserID,
    userID,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
