import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDataContext } from '../../context/context';

export const AddCartButton = ({ ProductName, ProductID }) => {
  const [count, setCount] = useState(0);

  const {cart, handleAddToCart } =  useDataContext();

  // -------------- Handle increment and Decrement
const handleIncrement = () => {
  setCount((prevCount) => prevCount + 1);
};
const handleDecrement = () => {
  setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
};

  // Add to cart whenever count changes
  useEffect(() => {
    if (count > 0) {
      handleAddToCart({ProductID, ProductName, count });
    }
  }, [count, ProductName, handleAddToCart]);

  return (
    <Button
      variant={count > 0 ? "contained" : "outlined"}
      color="success"
      className="m-0 p-0 ms-auto"
    >
      {count === 0 ? (
        <span className="py-2 w-100" onClick={handleIncrement}>
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
