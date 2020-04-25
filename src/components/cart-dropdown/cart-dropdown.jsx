import React from "react";
import { connect } from "react-redux";

import "./cart-dropdown.scss";
import CustomButton from "../custom-button/custom-button";
import CartItem from "../cart-item/cart-item";
import { selectCartItems } from "../../redux/cart/cart-selector";

const CartDropdown = ({ items }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
      <CustomButton>CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: selectCartItems(state),
  };
};

export default connect(mapStateToProps)(CartDropdown);
