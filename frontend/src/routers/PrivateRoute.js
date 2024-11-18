import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

export const PrivateRoute = ({ children }) => {
  const { isAuth } = useAuthContext();
  const auth = isAuth?.Email ? true : false;
  useEffect(() => console.log(auth));
  return auth ? children : <Navigate to="/login" />;
};
