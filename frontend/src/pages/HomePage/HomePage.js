import banner_lg from "../../assets/banner-lg.jpg";
import Slider from "react-slick";
import { useContext, useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";
import { BannerComponent } from "../../components/BannerComponent/BannerComponent";
import {NavBar } from '../../components/NavBar/NavBar'
import ProductCardComponent from "../../components/ProductCardComponent/ProductCardComponent";
import { useDataContext } from "../../context/context";
import { BannerData, ProductsDisplay, ProductData } from "../../assets/Data/Data";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import { LoaderBounce } from "../../components/Loader/LoaderBounce";

export const HomePage = () => {

  const { viewedProduct, products } = useDataContext();
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  // console.log(`viewed product data : ${JSON.stringify(viewedProduct)} `);

  useEffect(() => {
    setRecentlyViewed(viewedProduct);
  }, [viewedProduct]);

  // Filter and sort products based on recently viewed order
  const filteredProducts = products.filter((P) =>
    recentlyViewed.slice(-6).some((item) => item.id === P._id)
  ).sort(
    (a, b) =>
      recentlyViewed.findIndex((item) => item.id === b.id) -
      recentlyViewed.findIndex((item) => item.id === a.id)
  );

  // console.log("Recently Viewed:", recentlyViewed);
  // console.log("Filtered Products:", filteredProducts);
  // console.log('Products : ', products.length);

  return (
    <>
      <NavBar />

      <main id="Home_Page">
        {/* banner section */}
        <section id="Banner" className="">
          {/* large banner */}
          <BannerSlider />

          <div className="row m-0 p-3">
            {BannerData.map((Banner, index) => (
              <div className="col-12 col-md-4 py-1 py-md-0" key={index}>
                <BannerComponent Data={Banner} />
              </div>
            ))}
          </div>
        </section>

        {/* product section */}

        <section className="px-2">
          <div className="parent_div_productDisplay m-0 p-0">
            {ProductsDisplay.map((P, index) => (
              <div
                key={index}
                className="child_div_productDisplay col-lg-1 p-0"
              >
                <img
                  src={P}
                  className="img-fluid"
                  width="100%"
                  height="auto"
                  alt="products-display"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Dairy category products display section */}
        <section className="px-0 px-md-2 px-lg-3 py-3">
          <div className="d-flex justify-content-between px-3 pb-1">
            <h5 className="fw-semibold d-inline-block m-0">
              Dairy, Breads & Eggs
            </h5>
            <Link to="/Dairy" className="text-decoration-none">
              <h6 className="text-success my-auto m-0">see all</h6>
            </Link>
          </div>

          <div id="Products" className="row m-0 py-2">
            {products.length > 0 ? (
              products
                .filter((P) => P.category === "Dairy")
                .map((P, index) => (
                  <div className="col-6 col-md-4 col-lg-2 m-0 p-1" key={index}>
                    <ProductCardComponent Data={P} />
                  </div>
                ))
            ) : (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100%"
                width="100%"
                minHeight="250px"
              >
                <LoaderBounce />
              </Box>
            )}
          </div>
        </section>

        {/* Snack category products display section */}
        <section className="px-0 px-md-2 px-lg-3 py-3">
          <div className="d-flex justify-content-between px-3 pb-1">
            <h5 className="fw-semibold d-inline-block m-0">
              Snacks & Munchies
            </h5>
            <Link to="/Snack" className="text-decoration-none">
              <h6 className="text-success my-auto m-0">see all</h6>
            </Link>
          </div>

          <div id="Products" className="row m-0 py-2">
            {products.length > 0 ? (
              products
                .filter((P) => P.category === "Snack")
                .map((P, index) => (
                  <div className="col-6 col-md-4 col-lg-2 m-0 p-1" key={index}>
                    <ProductCardComponent Data={P} />
                  </div>
                ))
            ) : (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="100%"
                width="100%"
                minHeight="250px"
              >
                <LoaderBounce />
              </Box>
            )}
          </div>
        </section>

        {/* Recently viewed products section */}
        {filteredProducts.length > 4 && (
          <section className="px-0 px-md-2 px-lg-3 py-3">
            <div className="d-flex px-3 pb-1">
              <h5 className="fw-semibold d-inline-block m-0">
                Recently viewed
              </h5>
            </div>

            <div id="Products" className="row m-0 py-2">
              {filteredProducts.length > 4
                ? filteredProducts.map((P, index) => (
                    <div
                      className="col-6 col-md-4 col-lg-2 m-0 p-1"
                      key={index}
                    >
                      <ProductCardComponent Data={P} />
                    </div>
                  ))
                : null}
            </div>
          </section>
        )}
      </main>
    </>
  );
};

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const images = [banner_lg, banner_lg, banner_lg, banner_lg, banner_lg];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex + 1), // Update currentSlide when the slide changes

    customPaging: (i) => (
      <div className="custom-dot">
        {i + 1 === currentSlide ? (
          <span className="fraction-dot">
            {currentSlide}/{images.length}
          </span>
        ) : (
          <span className="regular-dot">
            
            <GoDotFill />
          </span>
        )}
      </div>
    ),
  };

  return (
    <Slider {...settings}>
      {images.map((img, index) => (
        <div key={index}>
          <img src={img} alt="lg-banner" width="100%" height="auto" />
        </div>
      ))}
    </Slider>
  );
};
