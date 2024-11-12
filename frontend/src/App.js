import './App.css';
// React Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { NavBar } from './components/NavBar/NavBar'
import { HomePage } from './pages/homepage/HomePage';
import ProductCardComponent from './components/ProductCardComponent/ProductCardComponent';

function App() {
  return (
    <>
    <NavBar/>
    <HomePage/>
    {/* <ProductCardComponent/> */}
    </>
  );
}

export default App;

