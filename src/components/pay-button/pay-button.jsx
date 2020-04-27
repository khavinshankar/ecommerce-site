import React from "react";
import StripeCheckout from "react-stripe-checkout";

const PayButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey = "pk_test_TtckJtm0QQvUrnNqH8u0x1AH00PFsDMgXn";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="E-COM project"
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your Total is ${price}`}
      amount={stripePrice}
      panelLabel="Pay Now"
      currency="INR"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default PayButton;
