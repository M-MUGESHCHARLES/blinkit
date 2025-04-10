import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDataContext } from '../../context/context';

export const AddCartButton = ({ ProductID }) => {
  const [count, setCount] = useState(0);
  // to manage AddToCart Button disable & enable while the request is made and waits for the response 
  const [loading, setLoading] = useState(false);

  const { cart, handleCart } = useDataContext();

  useEffect(() => {
    const productInCart = cart.find(
      (item) => Number(item.ProductID) === Number(ProductID)
    );
    setCount(productInCart ? productInCart.Count : 0);

    // console.log("productInCart", productInCart);
    // console.log("Cart", cart);
    // console.log("Product ID : ", ProductID, count);
  }, [ProductID]);

  // Handlers for Add, Increment, and Decrement

  const handleIncrement = () => {
    setCount((prevCount) => {
      handleCart(ProductID, "increment", setLoading);
      return prevCount + 1;
    });
  };

  const handleDecrement = () => {
    setCount((prevCount) => {
      if (prevCount > 0) {
        handleCart(ProductID, "decrement", setLoading);
      }
      return prevCount > 0 ? prevCount - 1 : 0;
    });
  };

  const handleInitialAdd = () => {
    setCount(1);
    handleCart(ProductID, "add", setLoading);
  };

  return (
    <Button
      variant={count > 0 ? "contained" : "outlined"}
      color="success"
      className="m-0 p-0"
      disabled={loading}
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


