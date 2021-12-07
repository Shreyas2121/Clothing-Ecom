import React from "react";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

// import "./cart-icon.scss";
import "./card-icon.scss";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispach) => ({
  toggleCartHidden: () => dispach(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
