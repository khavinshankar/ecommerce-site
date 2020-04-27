import React from "react";
import { connect } from "react-redux";

import {
  CartContainer,
  ItemCountContainer,
  ShoppingIcon,
} from "./cart-icon.styles";
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import { selectCartItemsCount } from "../../redux/cart/cart-selector";

const CartIcon = (props) => {
  return (
    <CartContainer onClick={props.toggleCartHidden}>
      <ShoppingIcon />
      <ItemCountContainer>{props.itemCount}</ItemCountContainer>
    </CartContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    itemCount: selectCartItemsCount(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCartHidden: () => {
      return dispatch(toggleCartHidden());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
