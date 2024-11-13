import { Box } from "@mui/material";
import "./NavBar.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { IoSearch } from "react-icons/io5";
import Slider from "react-slick";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CartButton } from "../CartButton/CartButton";

export const NavBar = () => {
  const [IP, setIP] = useState("");
  const [locationData, setLocationData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleClick = () => setIsEditing(true);
  const handleMouseLeave = () => {
    if (searchText === "") setIsEditing(false);
  };

  const handleBlur = () => {
    if (searchText === "") setIsEditing(false);
  };

  const placeholders = [
    `Search "paneer"`,
    `Search "cheese"`,
    `Search "tofu"`,
    `Search "milk"`,
  ];

  // Fetching IP Address  ---
  useEffect(() => {
    axios
      .get("https://api.ipify.org?format=json")
      .then((response) => setIP(response.data.ip))
      .catch((error) => console.error("Unable to fetch IP address", error));
  }, []);

  // Fetching Network Location  ---
  useEffect(() => {
    if (IP) {
      axios
        .get(`http://ip-api.com/json/${IP}`)
        .then((res) => setLocationData(res.data))
        .catch((err) => console.log("Error in fetching location ", err));
    }
  }, [IP]);

  return (
    <header id="header" className="border-bottom">
      <nav className="navbar row m-0 p-0 py-4">
        <div className="col-12 col-lg-4 d-flex ">
          <div className="px-2">
            <h2 className=" Logo m-0 d-inline ps-3 m-0">
              <span id="color-Y">blink</span>
              <span id="color-G">it</span>
            </h2>
          </div>

          <div className="ps-4 d-flex flex-column px-2">
            <h6 className="fw-bold m-0 " id="Delivery_text">
              Delivery in 8 minutes
            </h6>
            <p className="text-secondary m-0 " id="Delivery_location">
              {locationData ? (
                <span>
                  {locationData.city}, {locationData.regionName}
                </span>
              ) : (
                <span>Fetching Location...</span>
              )}
            </p>
          </div>
        </div>

        <div className="col-12 col-lg-6 px-3 pt-3 pt-lg-0" id="SearchBar_div">
          <div
            className="d-flex search-container border border-1 rounded-3 px-2 overflow-hidden"
            onClick={handleClick}
            onMouseOver={handleClick}
            onMouseLeave={handleMouseLeave}
          >
            <div className="px-1 my-auto">
              <IoSearch />
            </div>

            {isEditing ? (
              <Box
                sx={{
                  paddingY: "0.7rem",
                  width: "100%",
                }}
              >
                <input
                  type="text"
                  className="border border-0 px-2 search_input"
                  placeholder="Search"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  onBlur={handleBlur}
                />
              </Box>
            ) : (
              <PlaceHolder PlaceHolder={placeholders} />
            )}
          </div>
        </div>

        <div
          className="d-flex col-lg-2 pt-3 pt-lg-0"
          id="Cart_Button_sm_screen"
        >
          <div className="d-none d-lg-block align-content-around">
            <button className="btn btn-light border-0">Login</button>
          </div>
          <div className="ps-3">
            

            <CartButton/>

          </div>
        </div>
      </nav>
    </header>
  );
};

// placeholder slider
function PlaceHolder(props) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    accessibility: false,
	arrows: false,
  };
  return (
    <div className="slider-container text-secondary overflow-hidden">
      <Slider {...settings}>
        {props.PlaceHolder.map((item, index) => (
			<Box sx={{
				paddingY: "0.7rem",
			}} key={index}>
				<span className="px-2">{item}</span>
			</Box>
		))}
      </Slider>
    </div>
  );
}