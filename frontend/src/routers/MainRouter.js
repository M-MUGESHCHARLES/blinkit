import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { HomePage } from "../pages/HomePage/HomePage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import { PrivateRoute } from "./PrivateRoute";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { PublicRoute } from "./PublicRoute";
import { Layout } from "../pages/Layout";
import NotFoundPage from "../pages/404/NotFoundPage";

export const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>

          {/* Public routes */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />

          {/* Private routes */}
          <Route
            index  
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />

          <Route
            path=":product"
            element={
              <PrivateRoute>
                <ProductDetailsPage />
              </PrivateRoute>
            }
          />

          {/*404 Page  */}
          <Route path="*" element={<NotFoundPage/>} />
        </Route>
      </Routes>

    
    </>
  );
};
