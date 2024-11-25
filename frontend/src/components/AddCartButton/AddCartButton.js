import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useDataContext } from '../../context/context';
import axios from 'axios';
import { useAuthContext } from '../../context/AuthContext';

export const AddCartButton = ({ ProductName, ProductID }) => {
  const [count, setCount] = useState(0);

  const { cart, handleAddToCart } = useDataContext();
  const{userID} = useAuthContext();

  // -------------- Handle increment and Decrement
const handleIncrement = () => {
  setCount((prevCount) => prevCount + 1);
};
const handleDecrement = () => {
  setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
};

  // Add to cart whenever count changes
  useEffect(() => {

    console.log("User ID ", userID);

    const NewData = {
      userID,
      item: {
        ProductID,
        ProductCount: count,
      },
    };

    if (count > 0) {
      handleAddToCart({ProductID, count });
      addToCart(NewData);
    }
  }, [count, handleAddToCart, ProductID]);

  const addToCart = (data) => {
    axios
      .put(`http://localhost:4200/add-to-cart`, data )
      .then((response) => {
        console.log("Updated user data:", response.data);
      })
      .catch((error) => {
        console.error(
          "Error adding to cart:",
          error.response?.data?.error || "An error occurred"
        );
      });
  };

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
