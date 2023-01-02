import React from "react";
import { useSelector } from "react-redux";
import { CartIcon } from "../icons";
const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);

  return (
    <>
      <nav>
        <div className="nav-center">
          <h3>redux cart</h3>
          <div className="nav-container">
            <CartIcon />
            <div className="amount-container">
              <div className="total-amount">{amount}</div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
