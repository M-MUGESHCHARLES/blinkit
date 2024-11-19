import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

    // const [isAuth, setIsAuth] = useState(false); //// using component memory
    
    const [isAuth, setIsAuth] = useState(() => {
        const storedUser = localStorage.getItem("user");
        return storedUser ? true : false;
    });    //// using localstorage by Check whether 'user' data exists in localStorage or not 


  const handleLogOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('cart');
    setIsAuth(false);
    console.log("Logged Out successfully");
    navigate("/login");
    // alert("Logged Out successfully");
  };

  const handleLogIn = (data) => {
    localStorage.setItem('user', JSON.stringify(data));
    setIsAuth(true);
    console.log('Logged In successfull', data);
    console.log("log in Auth (before re-render):", isAuth);
    navigate('/');
    // alert(`Logged In successfull`);
  };

  useEffect(() => {
    console.log("user log in ? ", isAuth);  //// to verify the state after the user log-in
  }, [isAuth]);

  const contextValue = {
    isAuth,
    handleLogOut,
    handleLogIn,
  };


  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
