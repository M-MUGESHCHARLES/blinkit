import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {

const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart") ? localStorage.getItem('cart') : "[]"));

useEffect(() => {
  localStorage.setItem("cart", JSON.stringify(cart));
  console.log(`Cart: ${JSON.stringify(cart)}`);
}, [cart]);


  // Memoized handleAddToCart function
  const handleAddToCart = useCallback((product) => {
    setCart((prevCart) => {
      const productExists = prevCart.find(
        (item) => item.ProductName === product.ProductName
      );

      if (productExists) {
        return prevCart.map((item) =>
          item.ProductName === product.ProductName && item.ProductID === product.ProductID
            ? { ...item, Count: product.count }
            : item
        );
      } else {
        return [
          ...prevCart,
          { ProductID: product.ProductID, ProductName: product.ProductName, Count: product.count },
        ];
      }
    });
  }, []);


  const contextValue = {
    setCart,
    cart,
    handleAddToCart,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
