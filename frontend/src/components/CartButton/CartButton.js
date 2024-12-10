import "./CartButton.css"
import { MdOutlineShoppingCart } from 'react-icons/md';
import CartPage from '../../pages/CartPage/CartPage';
import { IoMdHeart } from "react-icons/io";
import { Button, colors } from "@mui/material";
import { Link } from "react-router-dom";

export const CartButton = () => {
  return (
    <>
      <button
        className="btn rounded text-white fw-semibold py-2 justify-content-center"
        id="btn-My-Cart"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
      >
        <span>
          <MdOutlineShoppingCart size={24} />
        </span>
        {/* <span className="ps-1" id="My-cart">Cart</span> */}
      </button>

      <div
        className="offcanvas offcanvas-end"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
      >
        <div className="offcanvas-header">
          <h5
            className="offcanvas-title fw-bold"
            id="offcanvasWithBothOptionsLabel"
          >
            My Cart
          </h5>

          <Link to="/mywishlist">
            <Button
              variant="outlined"
              sx={{
                color: "#E73879", 
                borderColor: "#E73879", 
                "&:hover": {
                  borderColor: "#C52763", 
                },
              }}
              startIcon={<IoMdHeart />}
              className="ms-5"
            >
              My Wishlist
            </Button>
          </Link>

          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <CartPage />
        </div>
      </div>
    </>
  );
}
