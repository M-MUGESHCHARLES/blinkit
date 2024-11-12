 import React, { useState } from 'react'
 import './ProductCardComponent.css'
 import Product from '../../assets/Product-sample/Product-1.jpg'
import { IoMdStopwatch } from 'react-icons/io'
import { duration } from '@mui/material';
 
 export default function ProductCardComponent({Data}) {
    
   return (
     <>
         <section className='row m-0 p-0 border border-secondary-subtle shadow rounded-3' id='ProductCard'>
            <div className='col-12 m-0 p-2 text-center'>
                <img src={Data.img} className='img-fluid rounded-5' alt='product' height='auto' width='100%' />
            </div>
            <div className='px-3 pb-3'>
                <div className='col-12 d-flex flex-column m-0 p-0'>
                    <p className='m-0 fw-medium product_card_duration'> <IoMdStopwatch /> {Data.duration} mins </p>
                    <h6 className='m-0 fw-semibold product_card_productName py-1'> {Data.name}</h6>
                    <p className='m-0 text-secondary pt-2'>{Data.weight}</p>
                </div>
                <div className='col-12 d-flex m-0 p-0'>
                    <div className='product_card_price align-content-around'>
                        <p className='text-black m-0 product_card_productPrice fw-semibold' >₹{Data.price} </p>
                    </div>
                    <div className='ms-auto'>
                        <AddCounterButton/>
                    </div>
                </div>
            </div>
         </section>
     </>
   )
 };

 function AddCounterButton() {
   const [count, setCount] = useState(0);

   return (
     <div className="ms-auto">
       {count === 0 ? (
         <button
           className="btn btn-outline-success h-100 "
           onClick={() => setCount(1)}
         >
           ADD
         </button>
       ) : (
         <div className="btn btn-success h-100 d-flex align-items-center">
           <button
             className="btn btn-success p-0 m-0"
             onClick={() => setCount(count - 1)}
           >
             -
           </button>
           <span className="mx-2">{count}</span>
           <button
             className="btn btn-success p-0 m-0"
             onClick={() => setCount(count + 1)}
           >
             +
           </button>
         </div>
       )}
     </div>
   );
 }
 