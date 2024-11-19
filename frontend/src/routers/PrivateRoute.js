import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export const PrivateRoute = ({ children }) => {
const { isAuth } = useAuthContext();
// useEffect(() => console.log(isAuth),[]);
  return isAuth ? children : <Navigate to="/login" /> ;
};
