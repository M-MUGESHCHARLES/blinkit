import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import { HomePage } from '../pages/HomePage/HomePage';
import ProductDetailsPage from '../pages/ProductDetailsPage/ProductDetailsPage';
import { PrivateRoute } from './PrivateRoute';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { PublicRoute } from './PublicRoute';

export const MainRouter = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>

          <Route path="/" element={
            // <PrivateRoute>
                <HomePage />
            // </PrivateRoute>
            } />

          <Route path=":product" element={
            <ProductDetailsPage />
            } />

            <Route path='/login' element={
                // <PublicRoute>
                    <LoginPage/>
                // </PublicRoute>
            } />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
