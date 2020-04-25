import React from "react";
import { connect } from "react-redux";

import "./cart-icon.scss";
import { ReactComponent as ShoppingBag } from "../../asserts/cart.svg";
import { toggleCartHidden } from "../../redux/cart/cart-actions";
import { selectCartItemsCount } from "../../redux/cart/cart-selector";

const CartIcon = (props) => {
  return (
    <div className="cart-icon" onClick={props.toggleCartHidden}>
      <ShoppingBag className="shopping-icon" />
      <span className="item-count">{props.itemCount}</span>
    </div>
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
