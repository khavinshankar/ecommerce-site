import React from "react";
import { connect } from "react-redux";

import { CollectionsOverviewContainer } from "./collections-overview.styles";
import CollectionPreview from "../collection-preview/collection-preview";
import { selectShopCollectionsForPreview } from "../../redux/shop/shop-selector";

const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherprops }) => (
        <CollectionPreview key={id} {...otherprops} />
      ))}
    </CollectionsOverviewContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    collections: selectShopCollectionsForPreview(state),
  };
};

export default connect(mapStateToProps)(CollectionsOverview);
