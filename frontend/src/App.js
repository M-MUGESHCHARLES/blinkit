import './App.css';
// React Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { NavBar } from './components/NavBar/NavBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';
import {HomePage} from './pages/HomePage/HomePage';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path=':product' element={<ProductDetailsPage/>} />
      </Routes>
    </BrowserRouter>
    

    </>
  );
}

export default App;

