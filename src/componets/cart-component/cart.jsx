import React from "react";

import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";

import "./cart.scss";

const CartDrop = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-item">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDrop);
