import axios from "axios";
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { useAuthContext } from "./AuthContext";
import { ProductsData, UpdateCart } from "../apis";

const DataContext = createContext();

export const DataProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartButtonBadge, setCartButtonBadge] = useState(0);
  const [viewedProduct, setViewedProduct] = useState(
    JSON.parse(
      localStorage.getItem("viewedProducts")
        ? localStorage.getItem("viewedProducts")
        : "[]"
    )
  );

  const {userID} = useAuthContext();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await ProductsData();
        if (res.status === 200 || res.status === 201) {
          setProducts(res.data);
        }
      } catch (error) {
        console.error(
          "Error fetching products data :",
          error.response?.data?.error || "An error occurred"
        );
      }
    };
    fetchProducts();
  },[]);

  // console.log('Products : ', products);

  useEffect(() => {
    localStorage.setItem("viewedProducts", JSON.stringify(viewedProduct));
    // console.log(`Viewed product : ${JSON.stringify(viewedProduct)}`);
  }, [viewedProduct]);

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

      // console.log('product id : ', ProductID);      

      try {
        const res = await UpdateCart(data);
        if (res?.status === 200 || 201) {
          setCart(res.data.cart);
          // console.log(`Cart: ${JSON.stringify(res.data.cart, null, 2)}`);
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
    products,
    setCart,
    cart,
    handleCart,
    viewedProduct,
    setViewedProduct,
    handleViewedProduct,
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
