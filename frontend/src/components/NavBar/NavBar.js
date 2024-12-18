import { Badge, Box, IconButton } from "@mui/material";
import "./NavBar.css";
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import Slider from "react-slick";
import { CartButton } from "../CartButton/CartButton";
import { useAuthContext } from "../../context/AuthContext";
import { GetUserLocation } from "../../apis";
import { CgProfile } from "react-icons/cg";
import { useDataContext } from "../../context/context";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const NavBar = () => {
  const [locationData, setLocationData] = useState(null);
  const [isFilterPage, setIsFilterPage] = useState(false);
  // const [isHomePage, setIsHomePage] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  
  const {isAuth,handleLogOut} = useAuthContext();
  const {cartButtonBadge, isEditing, setIsEditing, searchText, setSearchText} = useDataContext();

  const handleClick = () => {
    setIsEditing(true);
    navigate('/products?search');
  };

  const handleMouseLeave = () => {
    if (searchText === "") {
      setIsEditing(false);
      // setIsFilterPage(false);
    }
  };

  const handleBlur = () => {
    if (searchText === "") {
      setIsEditing(false);
      setIsFilterPage(false);
      // setIsHomePage(true);
    }
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setSearchText(query);
    navigate(`/products?search=${encodeURIComponent(query)}`); 
  };

  const handleBack = () => {
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/products?search=${encodeURIComponent(searchText)}`);
  };

  useEffect(() => {
    if (location.pathname === "/products") {
      setIsFilterPage(true);
    } else {
      setIsFilterPage(false); 
    }
  }, [location.pathname]);

  const placeholders = [
    `Search "paneer"`,
    `Search "cheese"`,
    `Search "tofu"`,
    `Search "milk"`,
  ];

  // Fetching Network Location  --- 
  //// method 1  (api is used directly inside the component  with the help of axios and useEffect ) 
  // useEffect(() => {
  //     axios
  //       .get(`http://ip-api.com/json/`)
  //       .then((res) => setLocationData(res.data))
  //       .catch((err) => console.log("Error in fetching location ", err));
  // }, []);

  //// method 2 (api is used inside the api folder , so we need to import the function  from that folder and store the response and call the function using useEffect inside the component  )
  const UserLocation = async () => {
      try {
        const response = await GetUserLocation();
        if(response?.status === 200){
          // console.log('User location data fetched successfully');
          setLocationData(response.data);
        }
      }catch(err) {
        console.log('Eror fetching user location : ',err);
      }
  };
  useEffect(() => {
    UserLocation();
  }, []);

  return (
    <header id="header" className="border-bottom">
      <nav className="navbar row m-0 p-0 py-4">
        <div className="col-12 col-lg-5 col-xl-4 d-flex ">
          <div className="px-md-2">
            <Link to="/" className="text-decoration-none">
              <h2 className=" Logo m-0 d-inline ps-md-3 m-0">
                <span id="color-Y">blink</span>
                <span id="color-G">it</span>
              </h2>
            </Link>
          </div>

          <div className="ps-md-4 d-flex flex-column px-2 justify-content-center">
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

          <div className="d-inline-block d-lg-none ms-auto ">
            <IconButton className="bg-warning" onClick={handleLogOut}>
              <CgProfile />
            </IconButton>
          </div>
        </div>

        <div
          className="col-12 col-lg-5 col-xl-6 pt-3 pt-lg-0 px-3 "
          id="SearchBar_div"
        >
          <div
            className="d-flex search-container border border-1 rounded-3 px-2 overflow-hidden"
            onClick={handleClick}
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
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    className="border border-0 px-2 search_input"
                    placeholder="Search Product"
                    value={searchText}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                  />
                </form>
              </Box>
            ) : (
              <PlaceHolder PlaceHolder={placeholders} />
            )}
          </div>
        </div>

        <div
          className="d-flex col-lg-2 pt-3 pt-lg-0 gap-2"
          id="Cart_Button_sm_screen"
        >
          {isFilterPage ? (
            <div>
              <button
                className="btn btn-outline-secondary h-100"
                onClick={handleBack}
              >
                Back
              </button>
            </div>
          ) : (
            <div className="d-none d-lg-block align-content-around">
              <button className="btn btn-light border-0" onClick={handleLogOut}>
                {isAuth ? "LogOut" : "LogIn"}
              </button>
            </div>
          )}

          {isFilterPage ? (
            <div className="d-none d-md-block mx-auto">
              <Badge
                sx={{ fontWeight: "bold" }}
                color="error"
                badgeContent={cartButtonBadge}
              >
                <CartButton />
              </Badge>
            </div>
          ) : (
            <div className="mx-auto">
              <Badge
                sx={{ fontWeight: "bold" }}
                color="error"
                badgeContent={cartButtonBadge}
              >
                <CartButton />
              </Badge>
            </div>
          )}
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