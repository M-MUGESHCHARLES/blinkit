import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useEffect } from "react";

export const PublicRoute = ({ children }) => {
const { isAuth } = useAuthContext();
// useEffect(()=> console.log(isAuth),[] );
  return isAuth ? <Navigate to="/" /> : children ;
};
