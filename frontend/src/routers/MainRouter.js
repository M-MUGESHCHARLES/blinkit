import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import { HomePage } from '../pages/HomePage/HomePage';
import ProductDetailsPage from '../pages/ProductDetailsPage/ProductDetailsPage';
import { PrivateRoute } from './PrivateRoute';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { PublicRoute } from './PublicRoute';

export const MainRouter = () => {
  return (
    <>
        <Routes>

        {/* public routes */}
            <Route path='/login' element={
                <PublicRoute>
                    <LoginPage/>
                </PublicRoute>
            } />

        {/* private routes */}

            <Route path="/" element={
                <PrivateRoute>
                    <HomePage />
                </PrivateRoute>
            } />

            <Route path=":product" element={
                <PrivateRoute>
                    <ProductDetailsPage />
                </PrivateRoute>
            } />


        </Routes>
        <Footer />
    </>
  );
}
