import React from "react";

import CustomButton from "../custom-button/custom-button";

import "./cart.scss";

const CartDrop = () => (
  <div className="cart-dropdown">
    <div className="cart-item" />
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default CartDrop;
