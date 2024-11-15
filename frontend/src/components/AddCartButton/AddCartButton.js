import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDataContext } from '../../context/context';

export const AddCartButton = ({ ProductName }) => {
  const [count, setCount] = useState(0);

  const {cart, setCart, } = useDataContext();

  // -------------- Handle increment and Decrement 
    function handleIncrement() {
      setCount((prevCount) => {
        const newCount = prevCount + 1;
        return newCount;
      });
    }

    function handleDecrement() {
      setCount((prevCount) => {
        const newCount = prevCount - 1;
        return newCount;
      });
    }

  const handleAddToCartButton = (props) => {
    // console.log(`Product added to the cart : ${props.ProductName}`);
    // console.log(`and the count value is , ${props.count}`);
    setCart([...cart, { ProductName: props.ProductName, count: props.count }]);
  };

  useEffect(() => {
    if (count > 0) {
      handleAddToCartButton({ ProductName, count });
      console.log('cart : ', cart);
    }
  }, [count, ProductName, handleAddToCartButton, cart]);

  return (
    <Button
      variant={count > 0 ? "contained" : "outlined"}
      color="success"
      className="m-0 p-0 ms-auto"
    >
      {count === 0 ? (
        <span className="py-2 w-100" onClick={() => handleIncrement()}>
          ADD
        </span>
      ) : (
        <div className="d-flex align-items-center w-100">
          <span
            style={{ cursor: "pointer", minWidth: "fit-content" }}
            className="p-0 m-0 py-2 px-2 h-100 w-auto"
            onClick={() => handleDecrement()}
          >
            -
          </span>
          <span className="mx-auto">{count}</span>
          <span
            style={{ cursor: "pointer", minWidth: "fit-content" }}
            className=" p-0 m-0 py-2 px-2 h-10 w-auto"
            onClick={() => handleIncrement()}
          >
            +
          </span>
        </div>
      )}
    </Button>
  );
};
