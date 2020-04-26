import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "./cart-dropdown.scss";
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../redux/cart/cart-selector";
import { toggleCartHidden } from "../../redux/cart/cart-actions";

const CartDropdown = ({ items, history, toggleHidden }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.length ? (
          items.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })
        ) : (
          <span className="empty-message">Your cart is empty :(</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          toggleHidden();
          history.push("/checkout");
        }}
      >
        CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: selectCartItems(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleHidden: () => {
      dispatch(toggleCartHidden());
    },
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
