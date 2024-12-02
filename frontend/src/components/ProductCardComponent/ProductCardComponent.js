 import './ProductCardComponent.css'
import { IoMdStopwatch } from 'react-icons/io'
import { AddCartButton } from '../AddCartButton/AddCartButton'
import { Link } from 'react-router-dom'
import { useDataContext } from '../../context/context'
import {ProductData} from '../../assets/Data/Data'; 
 
 export default function ProductCardComponent({Data}) {

    const {handleViewedProduct } = useDataContext();

    const CardProduct = ProductData.find((P) => {
      return Data._id === P.id;
    });  
    
     
   return (
     <>
         <section className='row m-0 p-0 border border-secondary-subtle shadow rounded-3 card h-100' id='ProductCard'>
            <Link to={`/${Data.category}/${Number(Data._id)}`} className='p-0 m-0' onClick={() => handleViewedProduct(Data) } >
              <div className='m-0 text-center'>
                  <img src={CardProduct.img} className='img-fluid rounded-5' alt='product' height='auto' width='100%' />
              </div>
            </Link>
                <div className='col-12 d-flex flex-column m-0 p-0 ps-3 border-top pt-2'>
                    <p className='m-0 fw-bold product_card_duration'><span className='badge text-primary bg-primary-subtle'> <IoMdStopwatch /> {Data.duration} mins </span></p>
                    <h6 className='m-0 col-10 text-truncate fw-bold product_card_productName py-2'> {CardProduct.name}</h6>
                    <p className='m-0 text-secondary pt-1 '>{Data.weight}</p>
                </div>
                <div className='col-12 d-flex m-0 p-0 pb-2 ps-3'>
                    <div className='product_card_price align-content-around '>
                        <p className='text-black m-0 product_card_productPrice fw-semibold' >₹{Data.price} </p>
                    </div>
                    <div className='ms-auto pe-2'>
                        <AddCartButton ProductName={Data.name} ProductID={Data._id}/>
                    </div>
                </div>
         </section>
     </>
   )
 };


 