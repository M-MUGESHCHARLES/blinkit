 import './ProductCardComponent.css'
import { IoMdStopwatch } from 'react-icons/io'
import { AddCartButton } from '../AddCartButton/AddCartButton'
import { Link } from 'react-router-dom'
 
 export default function ProductCardComponent({Data}) {
    
   return (
     <>
         <section className='row m-0 p-0 border border-secondary-subtle shadow rounded-3' id='ProductCard'>
            <Link to={Data.name}>
              <div className='col-12 m-0 p-2 text-center'>
                  <img src={Data.img} className='img-fluid rounded-5' alt='product' height='auto' width='100%' />
              </div>
            </Link>
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
                        <AddCartButton/>
                    </div>
                </div>
            </div>
         </section>
     </>
   )
 };


 