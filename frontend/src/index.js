import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Rough } from './components/Rough';
import { WishListPage } from './pages/WishListPage/WishListPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <>
             {/* <App />    */}
             <Rough/>
        </>   
);

