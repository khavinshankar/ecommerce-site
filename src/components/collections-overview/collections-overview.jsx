import React from "react";
import { connect } from "react-redux";

import "./collections-overview.scss";
import CollectionPreview from "../collection-preview/collection-preview";
import { selectShopCollectionsForPreview } from "../../redux/shop/shop-selector";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherprops }) => (
        <CollectionPreview key={id} {...otherprops} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    collections: selectShopCollectionsForPreview(state),
  };
};

export default connect(mapStateToProps)(CollectionsOverview);
