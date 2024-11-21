import React, { useEffect, useState } from 'react';
import './CartPage.css';
import { Button, IconButton } from '@mui/material';
import { MdDelete } from 'react-icons/md';
import { useDataContext } from '../../context/context';
import { ProductData } from "../../assets/Data/Data";
import { RiEBike2Fill } from 'react-icons/ri';
import { IoIosListBox } from 'react-icons/io';
import { IoHandLeft } from 'react-icons/io5';

export default function CartPage() {
  const { cart, setCart } = useDataContext();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Match cart data with ProductData (locally stored data)
    const enrichedCartItems = cart.map((cartItem) => {
      const matchedProduct = ProductData.find(
        (product) => product.id === cartItem.ProductID
      );
      return matchedProduct
        ? {
            ...matchedProduct,
            Count: cartItem.Count, // Include count from cart
          }
        : cartItem; // Fallback if no match found
    });
    setCartItems(enrichedCartItems);
    console.log(cartItems);
  }, [cart]);

  
const handleRemoveProduct = (Id) => {
  // Get the cart data from localStorage
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

  // Filter out the product to remove it
  const updatedCart = storedCart.filter((item) => item.ProductID !== Id);
  console.log("Before removing product:", storedCart);

  // Update localStorage
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  console.log("After removing product:", updatedCart);

  // Update the state (cartItems)
  setCart(updatedCart);
};

  const total = cartItems.reduce((acc, item) => acc + item.price * item.Count, 0);  
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
              handleRemoveProduct={handleRemoveProduct}
            />
          ))
        ) : (
          <p className="mx-auto fw-bold text-danger my-5 text-center">
            Your Cart is Empty
          </p>
        )}

        <div className="bill-details mt-3 px-4 py-3  rounded-3">
          <h6 className='fw-bold mb-2 '> Bill Details : </h6>
          <div className="d-flex justify-content-between">
            <span> <IoIosListBox /> Items total</span>
            <span>₹{total}</span>
          </div>
          <div className="d-flex justify-content-between">
            <span>
              <RiEBike2Fill />  Delivery charge
            </span>
            <span>₹{deliveryCharge}</span>
          </div>
          <div className="d-flex justify-content-between">
            <span> <IoHandLeft /> Handling charge</span>
            <span>₹{handlingCharge}</span>
          </div>
          <div className="mt-3 d-flex justify-content-between fw-bold">
            <span>Grand total</span>
            <span>₹{grandTotal}</span>
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
          ₹{grandTotal} TOTAL
        </Button>
      </div>
    </>
  );
};


// product item details component 
const CartPageProductDetail = ({ item, handleRemoveProduct}) => {
  return (
    <div className="item-details d-flex align-items-center border border-end-0 border-top-0 pe-1 py-1 rounded-4 mt-3 shadow-sm">
      <div className="item-image col-2">
        <img
          className="img-fluid"
          src={item.img}
          alt="product"
          height="auto"
          width="100%"
        />
      </div>

      <div className="item-info px-2 col-8">
        <p className="m-0 mb-1 text-truncate fw-semibold">{item.name}</p>
        <p className="m-0 mb-1 text-muted">{item.weight}</p>
        <p className="m-0 mb-1 fw-semibold">
          ₹{item.price} &nbsp; * <span className='fw-light'>{item.Count}</span>
        </p>
      </div>

      <div className="d-flex flex-column gap-3 col-2">
        {/* <Button variant="contained" color="success" className="m-0 p-0 ms-auto">
          <div className="d-flex align-items-center w-100">
            <span
              style={{ cursor: "pointer", minWidth: "fit-content" }}
              className="p-0 m-0 py-2 px-2 h-100 w-auto"
              // onClick={handleDecrement}
            >
              -
            </span>
            <span className="mx-auto">{item.Count}</span>
            <span
              style={{ cursor: "pointer", minWidth: "fit-content" }}
              className=" p-0 m-0 py-2 px-2 h-10 w-auto"
              // onClick={handleIncrement}
            >
              +
            </span>
          </div>
        </Button> */}

        <div className="text-center">
          <IconButton className="text-danger mx-auto"
          onClick={() => handleRemoveProduct(item.id)}
          >
            <MdDelete />
          </IconButton>
        </div>
      </div>
    </div>
  );
};