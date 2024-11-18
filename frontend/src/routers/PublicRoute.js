import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { useEffect } from "react";

export const PublicRoute = ({ children }) => {
  const { isAuth } = useAuthContext();
  const auth = isAuth?.Email ? true : false;
  useEffect(() => console.log(auth));

  return !auth ? children : <Navigate to="/" />;
};
