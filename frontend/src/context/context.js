import axios from "axios";
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { useAuthContext } from "./AuthContext";
import { UpdateCart } from "../apis";

const DataContext = createContext();

export const DataProvider = ({ children }) => {

  // const [cart, setCart] = useState(
  //   JSON.parse(
  //     localStorage.getItem("cart") ? localStorage.getItem("cart") : "[]"
  //   )
  // );

  const [cart, setCart] = useState([]);
  const [cartButtonBadge, setCartButtonBadge] = useState(0);

  const {userID} = useAuthContext();

  const [viewedProduct, setViewedProduct] = useState(
    JSON.parse(
      localStorage.getItem("viewedProducts")
        ? localStorage.getItem("viewedProducts")
        : "[]"
    )
  );

  useEffect(() => {
    localStorage.setItem("viewedProducts", JSON.stringify(viewedProduct));
    // console.log(`Viewed product : ${JSON.stringify(viewedProduct)}`);
  }, [viewedProduct]);

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  //   console.log(`Cart 1 : ${JSON.stringify(cart)}`);
  // }, [cart]);

  const handleRemoveProduct = (Id) => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = storedCart.filter((item) => item.ProductID !== Id);
    // console.log("Before removing product:", storedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    // console.log("After removing product:", updatedCart);
    setCart(updatedCart);
  };

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
      const updatedProducts = [...viewedProduct, NewProduct].slice(-7);
      // Update the state and localStorage
      setViewedProduct(updatedProducts);
      localStorage.setItem("viewedProducts", JSON.stringify(updatedProducts));
    }

    // console.log(`Clicked Product : ${JSON.stringify(NewProduct)}`);
    // console.log(`Viewed products : ${JSON.stringify(viewedProduct)}`);
  };

  const handleCart = useCallback(
    async (ProductID, action) => {
      const data = {
        userID,
        ProductID,
        action,
      };

      console.log('product id : ', ProductID);      

      try {
        const res = await UpdateCart(data);
        if (res?.status === 200 || 201) {
          setCart(res.data.cart);
          console.log(`Cart: ${JSON.stringify(res.data.cart, null, 2)}`);
        }
      } catch (error) {
        console.error(
          "Error updating cart:",
          error.response?.data?.error || "An error occurred"
        );
      }
    },
    [userID]
  );

  const contextValue = {
    setCart,
    cart,
    handleCart,
    viewedProduct,
    setViewedProduct,
    handleViewedProduct,
    handleRemoveProduct,
    cartButtonBadge,
    setCartButtonBadge,
  };

  return (
    <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
