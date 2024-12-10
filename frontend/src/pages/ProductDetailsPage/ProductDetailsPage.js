import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDataContext } from '../../context/context';
import { AddCartButton } from '../../components/AddCartButton/AddCartButton';
import { ProductData } from '../../assets/Data/Data';
import NotFoundPage from '../404/NotFoundPage';
import ProductCardComponent from '../../components/ProductCardComponent/ProductCardComponent';
import { NavBar } from '../../components/NavBar/NavBar';
import { IconButton } from '@mui/material';
import { IoMdHeart } from 'react-icons/io';
import {LoaderCircle} from '../../components/Loader/LoaderCircle';

export default function ProductDetailsPage() {
  //Page Loading state
  const [isPageLoading, setIsPageLoading] = useState(true);
  // WishList button loading state
  const [loadingWishListButton, setLoadingWishListButton] = useState(false);
  // wishlist product
  const [isWishListed, setIsWishListed] = useState(false);

  const { productID } = useParams();
  const { products, handleWishList, wishList } = useDataContext();

  // State to hold product details
  const [Details, setDetails] = useState(null);
  // state for product image
  const [DetailsProduct, setDetailsProduct] = useState(null);

  useEffect(() => {
    if (products?.length > 0) {
      const productDetails = products.find((P) => P._id === Number(productID));

      const productImageDetails = ProductData.find(
        (P) => productDetails?._id === P.id
      );

      const productWishListed = wishList.some((P) => P._id === Number(productID));

      setDetails(productDetails || null);
      setDetailsProduct(productImageDetails || null);
      setIsPageLoading(false);
      if (productWishListed) {
        setIsWishListed(true);
      }
    }
  }, [products, productID]);

  if (!Details) {
    return <NotFoundPage />; // Redirect to 404 Page
  }

  const handleWishListButtonClick = () => {
    const ProductID = Details._id;
    if(isWishListed) {
      handleWishList(ProductID, "remove", setLoadingWishListButton);
      setIsWishListed(false);
    } else {
      handleWishList(ProductID, "add", setLoadingWishListButton);
      setIsWishListed(true);
    }
  };

  const Offers = [
    {
      icon: "🚀",
      title: "Superfast Delivery",
      description:
        "Get your order delivered to your doorstep at the earliest from dark stores near you.",
    },
    {
      icon: "💸",
      title: "Best Prices & Offers",
      description:
        "Best price destination with offers directly from the manufacturers.",
    },
    {
      icon: "📦",
      title: "Wide Assortment",
      description:
        "Choose from 5000+ products across food, personal care, household & other categories.",
    },
  ];

  return (
    <>
      <NavBar />
      {isPageLoading ? (
        <LoaderCircle />
      ) : (
        <div className="container mt-5 mb-3">
          <div className="row">
            {/* Bread crumbs */}
            <nav className=" fw-semibold mb-4">
              <Link to="/" className="text-decoration-none text-muted">
                Home
              </Link>
              /
              <Link
                to={`/${Details.category}`}
                className="text-decoration-none text-muted"
              >
                {Details.category}
              </Link>
              /
              <span className="fw-bold" id="color-G">
                {Details.name}
              </span>
            </nav>
          </div>

          <div className="row">
            {/* Product Image Section */}
            <div className="col-md-5 d-flex flex-column m-0 align-content-around text-center">
              <img
                src={DetailsProduct.img}
                alt="product"
                className="img-fluid mb-3 col-12"
              />

              <div className="d-flex px-2">
                <div className="p-2">
                  <img
                    src={DetailsProduct.img}
                    alt="product"
                    height="auto"
                    width="25%"
                    className="img-fluid mb-3 col-12"
                  />
                </div>
                <div className="p-2">
                  <img
                    src={DetailsProduct.img}
                    alt="product"
                    height="auto"
                    width="25%"
                    className="img-fluid mb-3 col-12"
                  />
                </div>
                <div className="p-2">
                  <img
                    src={DetailsProduct.img}
                    alt="product"
                    height="auto"
                    width="25%"
                    className="img-fluid mb-3 col-12"
                  />
                </div>
                <div className="p-2">
                  <img
                    src={DetailsProduct.img}
                    alt="product"
                    height="auto"
                    width="25%"
                    className="img-fluid mb-3 col-12"
                  />
                </div>
              </div>
            </div>

            {/* Product Information Section */}
            <div className="col-md-7 px-4 pt-xl-4 py-3 py-lg-0 px-lg-2">
              <h1 className="h4 mb-2">{Details.name}</h1>
              <p className="text-muted small badge text-bg-warning">
                ⏱️ {Details.duration} MINS
              </p>
              <p>
                <a href="/" className="text-success">
                  View all by {Details.brand} &rarr;
                </a>
              </p>

              <div className="my-3">
                <span className="display-6 fw-medium">₹{Details.price}</span>
                <span className="text-muted ms-2 text-decoration-line-through">
                  MRP ₹{Details.mrp}
                </span>
              </div>
              <p className="text-muted small">{Details.description}</p>

              {/* Quantity Control and wishlist button */}
              <div className="d-flex">
                <AddCartButton ProductID={Details._id} />
                <IconButton
                  className="ms-3"
                  onClick={handleWishListButtonClick}
                  disabled={loadingWishListButton}
                >
                  <IoMdHeart color={isWishListed ? `#E73879` : null} />
                </IconButton>
              </div>

              {/* Why Shop Section */}
              <h3 className="h6 mt-4">Why shop from us?</h3>
              <div className="d-flex flex-column gap-3">
                {Offers.map((offer, index) => (
                  <div key={index} className="d-flex align-items-start gap-2">
                    <span className="fs-4">{offer.icon}</span>
                    <div>
                      <h4 className="h6 m-0">{offer.title}</h4>
                      <p className="small text-muted m-0">
                        {offer.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Recommended Products section */}
      <section className="">
        <div className="d-flex justify-content-between px-4 pb-1">
          <h5 className="fw-semibold d-inline-block m-0">
            Recommended Products
          </h5>
          <h6 className="text-success my-auto m-0">see all</h6>
        </div>

        <div
          id="Products"
          className="d-flex justify-content-evenly m-0 overflow-y-hidden px-3 py-2"
        >
          {products
            .filter(
              (P) => P.category === Details.category && P.name !== Details.name
            )
            .map((P, index) => (
              <div className="col-6 col-md-4 col-lg-2 m-0 p-1" key={index}>
                <ProductCardComponent Data={P} />
              </div>
            ))}
        </div>
      </section>

      {/* Recently Viewed Products section */}
      <section className=""></section>
    </>
  );
};
