import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import { HomePage } from "../pages/HomePage/HomePage";
import ProductDetailsPage from "../pages/ProductDetailsPage/ProductDetailsPage";
import { PrivateRoute } from "./PrivateRoute";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { PublicRoute } from "./PublicRoute";
import { Layout } from "../pages/Layout";
import NotFoundPage from "../pages/404/NotFoundPage";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";
import { FilterPage } from "../pages/FilterPage/FilterPage";
import { CategoryPage } from "../pages/CategoryPage/CategoryPage";
import { ToastContainer, Bounce } from "react-toastify";
import {WishListPage} from '../pages/WishListPage/WishListPage';

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

          <Route
            path="/signup"
            element={
              <PublicRoute>
                <SignUpPage />
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
            path="/:category"
            element={
              <PrivateRoute>
                <CategoryPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/:category/:subCategory"
            element={
              <PrivateRoute>
                <CategoryPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/:category/:subCategory/:productID"
            element={
              <PrivateRoute>
                <ProductDetailsPage />
              </PrivateRoute>
            }
          />

          <Route
            path="/products"
            element={
              <PrivateRoute>
                <FilterPage />
              </PrivateRoute>
            }
          />
          
          <Route
            path="/mywishlist"
            element={
              <PrivateRoute>
                <WishListPage />
              </PrivateRoute>
            }
          />

          {/*404 Page  */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>

      {/* Toast messager  */}
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </>
  );
};
