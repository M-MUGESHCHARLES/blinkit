import { Button } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react'
import { useDataContext } from '../../context/context';
import axios from 'axios';
import { useAuthContext } from '../../context/AuthContext';
import { UpdateCart } from '../../apis';

export const AddCartButton = ({ ProductName, ProductID }) => {
  const [count, setCount] = useState(0);

  const { setCart, cart, handleCart } = useDataContext();
  const { userID } = useAuthContext();

  // Memoized handleAddToCart function
  // const handleAddToCart = useCallback( async (action) => {

  //     const data = {
  //       userID,
  //       ProductID,
  //       action,
  //     };

  //     try {
  //       const res = await UpdateCart(data);
  //       if(res?.status === 200 || 201 ) {
  //         setCart(res.data.cart);
  //         console.log(`Cart: ${JSON.stringify(res.data.cart, null, 2)}`);   
  //         console.log('Cart data : ', cart);     
  //       }
  //     } catch (error) {
  //       console.error(
  //         "Error updating cart:",
  //         error.response?.data?.error || "An error occurred"
  //       );
  //     }
  //   }, [userID, ProductID] );

  // Handlers for Add, Increment, and Decrement

  const handleIncrement = () => {
    setCount((prevCount) => {
      handleCart(ProductID, "increment"); 
      return prevCount + 1;
    });
  };

  const handleDecrement = () => {
    setCount((prevCount) => {
      if (prevCount > 0) {
        handleCart(ProductID, "decrement"); 
      }
      return prevCount > 0 ? prevCount - 1 : 0;
    });
  };

  const handleInitialAdd = () => {
    setCount(1);
    handleCart(ProductID, "add");
  };

  return (
    <Button
      variant={count > 0 ? "contained" : "outlined"}
      color="success"
      className="m-0 p-0 ms-auto"
    >
      {count === 0 ? (
        <span className="py-2 w-100" onClick={handleInitialAdd}>
          ADD
        </span>
      ) : (
        <div className="d-flex align-items-center w-100">
          <span
            style={{ cursor: "pointer", minWidth: "fit-content" }}
            className="p-0 m-0 py-2 px-2 h-100 w-auto"
            onClick={handleDecrement}
          >
            -
          </span>
          <span className="mx-auto">{count}</span>
          <span
            style={{ cursor: "pointer", minWidth: "fit-content" }}
            className=" p-0 m-0 py-2 px-2 h-10 w-auto"
            onClick={handleIncrement}
          >
            +
          </span>
        </div>
      )}
    </Button>
  );
};


