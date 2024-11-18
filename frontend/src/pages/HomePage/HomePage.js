import "./Home.css";
import banner_lg from "../../assets/banner-lg.jpg";
import Slider from "react-slick";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { BannerComponent } from "../../components/BannerComponent/BannerComponent";
import ProductCardComponent from "../../components/ProductCardComponent/ProductCardComponent";
import { useDataContext } from "../../context/context";
import { BannerData, ProductsDisplay, ProductData } from "../../assets/Data/Data";

export const HomePage = () => {

  const {} = useDataContext(); 

  return (
    <main id="Home_Page">
      {/* banner section */}
      <section id="Banner" className="">
        {/* large banner */}
        <BannerSlider />

        <div className="row m-0 p-3">
          {BannerData.map((Banner, index) => (
            <div className="col-12 col-md-4 py-1 py-md-0" key={index}>
              <BannerComponent Data={Banner}  />
            </div>
          ))}
        </div>
      </section>

      {/* product section */}

      <section className="">
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
      <section className="px-3 py-3">
        <div className="d-flex justify-content-between pb-1">
          <h5 className="fw-semibold d-inline-block m-0">
            Dairy, Bread & Eggs
          </h5>
          <h6 className="text-success my-auto m-0">see all</h6>
        </div>

        <div id="Products" className="row m-0 py-2">
          {ProductData.map((P, index) => (
            <div className="col-6 col-md-4 col-lg-2 m-0 px-2 py-2" key={index}>
              <ProductCardComponent Data={P} />
            </div>
          ))}
        </div>
      </section>
    </main>
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
