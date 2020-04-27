import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./checkout.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import PayButton from "../../components/pay-button/pay-button";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart-selector";

const CheckoutPage = ({ items, cartTotal }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {items.map((item) => {
        return <CheckoutItem key={item.id} item={item} />;
      })}

      <div className="total">
        <span>TOTAL: {cartTotal}</span>
      </div>
      {!cartTotal ? <PayButton price={cartTotal} /> : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
