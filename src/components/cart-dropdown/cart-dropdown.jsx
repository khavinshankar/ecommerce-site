import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  CartDropdownContainer,
  CartDropdownButton,
  CartItemsContainer,
  EmptyMessageContainer,
} from "./cart-dropdown.styles";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../redux/cart/cart-selector";
import { toggleCartHidden } from "../../redux/cart/cart-actions";

const CartDropdown = ({ items, history, toggleHidden }) => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {items.length ? (
          items.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })
        ) : (
          <EmptyMessageContainer>Your cart is empty :(</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          toggleHidden();
          history.push("/checkout");
        }}
      >
        CHECKOUT
      </CartDropdownButton>
    </CartDropdownContainer>
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
