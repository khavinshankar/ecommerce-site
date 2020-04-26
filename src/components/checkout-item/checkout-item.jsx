import React from "react";
import { connect } from "react-redux";

import "./checkout-item.scss";
import { removeItem, addItem, reduceItem } from "../../redux/cart/cart-actions";

const CheckoutItem = ({ item, removeItem, addItem, reduceItem }) => {
  const { name, imageUrl, price, quantity } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div
          className="arrow"
          onClick={() => {
            return reduceItem(item);
          }}
        >
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div
          className="arrow"
          onClick={() => {
            return addItem(item);
          }}
        >
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => {
          return removeItem(item);
        }}
      >
        &#10005;
      </div>
    </div>
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
