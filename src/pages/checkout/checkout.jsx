import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
} from "./checkout.styles";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import PayButton from "../../components/pay-button/pay-button";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart-selector";

const CheckoutPage = ({ items, cartTotal }) => {
  return (
    <CheckoutPageContainer>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {items.map((item) => {
        return <CheckoutItem key={item.id} item={item} />;
      })}

      <TotalContainer>
        <span>TOTAL: {cartTotal}</span>
      </TotalContainer>
      {!cartTotal ? <PayButton price={cartTotal} /> : null}
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
