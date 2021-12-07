// import { createSelector } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce((accQun, cartItem) => accQun + cartItem.quantity, 0)
);
