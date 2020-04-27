import React from "react";
import { connect } from "react-redux";

import {
  CheckoutItemContainer,
  ImageContainer,
  QuantityContainer,
  RemoveButtonContainer,
  TextContainer,
} from "./checkout-item.styles";
import { removeItem, addItem, reduceItem } from "../../redux/cart/cart-actions";

const CheckoutItem = ({ item, removeItem, addItem, reduceItem }) => {
  const { name, imageUrl, price, quantity } = item;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div
          onClick={() => {
            return reduceItem(item);
          }}
        >
          &#10094;
        </div>
        <span>{quantity}</span>
        <div
          onClick={() => {
            return addItem(item);
          }}
        >
          &#10095;
        </div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer
        onClick={() => {
          return removeItem(item);
        }}
      >
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (item) => {
      return dispatch(removeItem(item));
    },
    addItem: (item) => {
      return dispatch(addItem(item));
    },
    reduceItem: (item) => {
      return dispatch(reduceItem(item));
    },
  };
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
