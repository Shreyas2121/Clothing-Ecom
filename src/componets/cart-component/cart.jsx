import React from "react";

import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
// import { withRouter } from "react-router";
import { useNavigate } from "react-router-dom";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./cart.scss";

const CartDrop = ({ cartItems, dispatch }) => {
  const navigate = useNavigate();

  return (
    <div className="cart-dropdown">
      <div className="cart-item">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          navigate("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDrop);
