import React, { useEffect, useState } from 'react'
import { useDataContext } from '../../context/context'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { NavBar } from '../../components/NavBar/NavBar';
import ProductCardComponent from '../../components/ProductCardComponent/ProductCardComponent';
import { SearchedProducts } from '../../apis';
import { LoaderCircle } from '../../components/Loader/LoaderCircle';
import { Box } from '@mui/material';

export const FilterPage = () => {
  const [searchedProduct, setSearchedProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const { searchText, setSearchText, products } = useDataContext();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("search") || "";
    setSearchText(query);
    fetchProducts(query);
    // console.log("query : ", query);
  }, [location.search]);

  const fetchProducts = async (query) => {
    setIsLoading(true); 
    try {
      const res = await SearchedProducts(query);
      if (res.status === 200) {
        setSearchedProduct(res.data);
      }
    } catch (error) {
      console.error(
        "Error finding products :",
        error.response?.data?.message || "An error occurred"
      );
    } finally {
      setIsLoading(false); 
    }
  };
  // console.log(searchedProduct);
  // console.log("search text : ",searchText);

  return (
    <>
      <NavBar />
      <div className="container">
        <h6 className="my-3 px-1 fw-bold">
          {searchText ? `Showing Results for: ${searchText}` : `All Products`}
        </h6>

        {isLoading ? (
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="100%"
            minHeight="100vh"
          >
            <LoaderCircle />
          </Box>
        ) : (
          <div className="row m-0 p-0 pb-5 mb-2">
            {searchText ? (
              searchedProduct.length > 0 ? (
                searchedProduct.map((item, index) => (
                  <div className="col-6 col-md-4 col-lg-2 m-0 p-1" key={index}>
                    <ProductCardComponent Data={item} />
                  </div>
                ))
              ) : (
                <div className="my-5 py-5">
                  <h1 className="py-2 fw-bold text-center text-warning">
                    No Products Found
                  </h1>
                </div>
              )
            ) : products && products.length > 0 ? (
              products.map((item, index) => (
                <div className="col-6 col-md-4 col-lg-2 m-0 p-1" key={index}>
                  <ProductCardComponent Data={item} />
                </div>
              ))
            ) : (
              <div className="my-5 py-3">
                <h3 className="fw-bold text-center text-warning">
                  No Products Available
                </h3>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

