import "./Home.css";
import banner_lg from "../../assets/banner-lg.jpg";
import p1 from "../../assets/Products-image-large-screen/p1.jpeg";
import p3 from "../../assets/Products-image-large-screen/p2.png";
import p4 from "../../assets/Products-image-large-screen/p3.png";
import p5 from "../../assets/Products-image-large-screen/p4.png";
import p2 from "../../assets/Products-image-large-screen/p5.png";
import p6 from "../../assets/Products-image-large-screen/p-6.png";
import p7 from "../../assets/Products-image-large-screen/Slice-7_3.png";
import p8 from "../../assets/Products-image-large-screen/Slice-8_4.png";
import p9 from "../../assets/Products-image-large-screen/Slice-9_3.png";
import p10 from "../../assets/Products-image-large-screen/Slice-10.png";
import p11 from "../../assets/Products-image-large-screen/Slice-11.png";
import p12 from "../../assets/Products-image-large-screen/Slice-12.png";
import p13 from "../../assets/Products-image-large-screen/Slice-13.png";
import p14 from "../../assets/Products-image-large-screen/Slice-14.png";
import p15 from "../../assets/Products-image-large-screen/Slice-15.png";
import p16 from "../../assets/Products-image-large-screen/Slice-16.png";
import p17 from "../../assets/Products-image-large-screen/Slice-17.png";
import p18 from "../../assets/Products-image-large-screen/Slice-18.png";
import p19 from "../../assets/Products-image-large-screen/Slice-19.png";
import p20 from "../../assets/Products-image-large-screen/Slice-20.png";
import Slider from "react-slick";
import { useState } from "react";
import { GoDotFill } from "react-icons/go";
import { BannerComponent } from "../../components/BannerComponent/BannerComponent";
import ProductCardComponent from "../../components/ProductCardComponent/ProductCardComponent";
import { useDataContext } from "../../context/context";

const ProductsDisplay = [
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
  p14,
  p15,
  p16,
  p17,
  p18,
  p19,
  p20,
];

export const HomePage = () => {

  const {BannerData, ProductData} = useDataContext(); 

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
