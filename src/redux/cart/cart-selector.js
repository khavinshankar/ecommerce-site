import { createSelector } from "reselect";

const selectCart = (state) => {
  return state.cart;
};

export const selectHidden = createSelector([selectCart], (cart) => {
  return cart.hidden;
});

export const selectCartItems = createSelector([selectCart], (cart) => {
  return cart.cartItems;
});

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((acc, item) => {
      return acc + item.quantity;
    }, 0);
  }
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0);
  }
);
