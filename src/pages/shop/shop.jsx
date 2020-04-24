import React, { Component } from "react";

import "./shop.scss";
import SHOP_DATA from "./data";

import CollectionPreview from "../../components/collection-preview/collection-preview";

class ShopPage extends Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...otherprops }) => (
          <CollectionPreview key={id} {...otherprops} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
