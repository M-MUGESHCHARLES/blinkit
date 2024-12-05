import React, { useEffect, useState } from 'react';
import './CartPage.css';
import { Button, IconButton } from '@mui/material';
import { MdDelete } from 'react-icons/md';
import { useDataContext } from '../../context/context';
import { ProductData } from "../../assets/Data/Data";
import { RiEBike2Fill } from 'react-icons/ri';
import { IoIosListBox } from 'react-icons/io';
import { IoHandLeft } from 'react-icons/io5';
import empty_cart from '../../assets/Png/empty-cart.png'

export default function CartPage() {
  const { cart, setCartButtonBadge, products } = useDataContext();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Match cart data with ProductData (fetched from database)
    const enrichedCartItems = cart.map((cartItem) => {
      const matchedProduct = products.find(
        (product) => product._id === cartItem.ProductID
      );
      return matchedProduct 
          ? {
            ...matchedProduct,
            Count: cartItem.Count, 
          } : cartItem; 
    });
    setCartItems(enrichedCartItems);
    // console.log('cart 1 : ',cart);
    // console.log('cart items 1 : ' ,cartItems);
  }, [cart,products]);

    // console.log("cart 2 : ", cart);
    // console.log("cart items 2 : ", cartItems);

  useEffect(() => {
    setCartButtonBadge(cartItems.length);
  }, [cartItems,setCartButtonBadge]);
  

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.Count,
    0
  );
  const deliveryCharge = 25;
  const handlingCharge = 25;
  const grandTotal = total + deliveryCharge + handlingCharge;

  return (
    <>
      <div className="cart-container">
        <div className="delivery-info mt-2 rounded p-3">
          <div className="d-flex gap-3">
            <span className="my-auto" role="img">
              ⏱️
            </span>
            <div>
              <p className="m-0">Delivery in 8 minutes</p>
              <p className="m-0" style={{ fontSize: "12px" }}>
                Shipment of {cartItems.length} item
              </p>
            </div>
          </div>
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((item, index) => (
            <CartPageProductDetail
              key={index}
              item={item}
            />
          ))
        ) : (
          <div className='empty-cart m-0 p-0 my-4'>
             <div className='container m-0 py-3 text-center'>
                <img src={empty_cart} alt='empty-cart' height='auto' width='60%'/>
             </div>
            <p className="mx-auto fw-bold text-danger mb-5 text-center">
              Your Cart is Empty
            </p>
          </div>
        )}

        <div className="bill-details mt-3 px-4 py-3  rounded-3">
          <h6 className="fw-bold mb-2 "> Bill Details : </h6>
          <div className="d-flex justify-content-between">
            <span>
              <IoIosListBox /> Items total
            </span>
            <span>₹{total}</span>
          </div>
          <div className="d-flex justify-content-between">
            <span>
              <RiEBike2Fill /> Delivery charge
            </span>
            <span>₹{cartItems.length === 0 ? 0 : deliveryCharge}</span>
          </div>
          <div className="d-flex justify-content-between">
            <span>
              <IoHandLeft /> Handling charge
            </span>
            <span>₹{cartItems.length === 0 ? 0 : handlingCharge}</span>
          </div>
          <div className="mt-3 d-flex justify-content-between fw-bold">
            <span>Grand total</span>
            <span>₹{cartItems.length === 0 ? 0 : grandTotal}</span>
          </div>
        </div>

        <div className="cancellation-policy mt-3 px-3">
          <p>
            <strong>Cancellation Policy</strong>
          </p>
          <p>
            Orders cannot be cancelled once packed for delivery. In case of
            unexpected delays, a refund will be provided, if applicable.
          </p>
        </div>

        <Button
          variant="contained"
          color="success"
          className="border-0 mt-3 p-3 rounded-3 w-100 fw-bold"
        >
          ₹{cartItems.length === 0 ? 0 : grandTotal} TOTAL
        </Button>
      </div>
    </>
  );
};


// product item details component 
const CartPageProductDetail = ({item}) => {
  const [count, setCount] =useState(item.count);
  const { handleCart, loadingAddToCartButton } = useDataContext();

  const handleIncrement = () => {
    setCount((prevCount) => {
      handleCart(item._id, "increment");
      return prevCount + 1;
    });
  };

  const handleDecrement = () => {
    setCount((prevCount) => {
        handleCart(item._id, "decrement");
      return prevCount > 0 ? prevCount - 1 : 0;
    });
  };

  const handleRemove = () => {
    handleCart(item._id, 'remove');
  };

      const CartProduct = ProductData.find((P) => {
        return item._id === P.id;
      });  



  return (
    <div className="item-details d-flex align-items-center border border-end-0 border-top-0 pe-1 py-1 rounded-4 mt-3 shadow-sm">
      <div className="item-image col-2">
        <img
          className="img-fluid"
          src={CartProduct.img}
          alt="product"
          height="auto"
          width="100%"
        />
      </div>

      <div className="item-info px-2 col-8">
        <p className="m-0 mb-1 text-truncate fw-semibold">{item.name}</p>
        <p className="m-0 mb-1 text-muted">{item.weight}</p>
        <p className="m-0 mb-1 fw-semibold">
          ₹{item.price} &nbsp; * <span className="fw-light">{item.Count}</span>
        </p>
      </div>

      <div className="d-flex flex-column gap-3 col-2">
        <Button variant="contained" color="success" className="m-0 p-0 ms-auto" disabled={loadingAddToCartButton}>
          <div className="d-flex align-items-center w-100">
            <span
              style={{ cursor: "pointer", minWidth: "fit-content" }}
              className="p-0 m-0 py-2 px-2 h-100 w-auto"
              onClick={handleDecrement}
            >
              -
            </span>
            <span className="mx-auto">{item.Count}</span>
            <span
              style={{ cursor: "pointer", minWidth: "fit-content" }}
              className=" p-0 m-0 py-2 px-2 h-10 w-auto"
              onClick={handleIncrement}
            >
              +
            </span>
          </div>
        </Button>

        <div className="text-center">
          <IconButton
            className="text-danger mx-auto"
            onClick={handleRemove}
          >
            <MdDelete />
          </IconButton>
        </div>
      </div>
    </div>
  );
};