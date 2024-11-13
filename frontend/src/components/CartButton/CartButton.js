import React from 'react'
import { MdOutlineShoppingCart } from 'react-icons/md';
import CartPage from '../../pages/CartPage/CartPage';

export const CartButton = () => {
  return (
    <>
      <button
        className="btn rounded text-white fw-semibold py-2"
        id="btn-My-Cart"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
      >
        <span>
          <MdOutlineShoppingCart size={24} />
        </span>
        <span id="My-cart">My Cart</span>
      </button>

      <div
        class="offcanvas offcanvas-end"
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasWithBothOptions"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            MyCart
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">
          <CartPage/>
        </div>
      </div>
    </>
  );
}
