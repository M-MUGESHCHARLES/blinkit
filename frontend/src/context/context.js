import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {

const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart") ? localStorage.getItem('cart') : "[]"));
const [viewedProduct, setViewedProduct] = useState(JSON.parse(localStorage.getItem('viewedProducts') ? localStorage.getItem('viewedProducts') : '[]' ));

  useEffect(() => {
    localStorage.setItem('viewedProducts', JSON.stringify(viewedProduct));
    console.log(`Viewed product : ${JSON.stringify(viewedProduct)}`);
  }, [viewedProduct]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    // console.log(`Cart: ${JSON.stringify(cart)}`);
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

  // RecentlyViewedProduct function
  const handleViewedProduct = (Data) => {
    const NewProduct = {
      id: Data.id,
      name: Data.name,
    };
    const isAlreadyViewed = viewedProduct.some( 
      (product) => product.id === NewProduct.id
    );

    if (!isAlreadyViewed) {
      const updatedProducts = [...viewedProduct, NewProduct];

      // Update the state and localStorage
      setViewedProduct(updatedProducts);
      localStorage.setItem(
        "viewedProducts",
        JSON.stringify(updatedProducts)
      );
    }

    console.log(`Clicked Product : ${NewProduct}`);
    console.log(`Viewed products : ${JSON.stringify(viewedProduct)}`);
  };

  

  const contextValue = {
    setCart,
    cart,
    handleAddToCart,
    viewedProduct,
    setViewedProduct,
    handleViewedProduct,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
