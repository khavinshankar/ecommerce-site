import React from "react";
import { connect } from "react-redux";

import "./collection.scss";
import CollectionItem from "../../components/collection-item/collection-item";
import { selectShopCollection } from "../../redux/shop/shop-selector";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => {
          return <CollectionItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    collection: selectShopCollection(props.match.params.collectionId)(state),
  };
};

export default connect(mapStateToProps)(CollectionPage);
