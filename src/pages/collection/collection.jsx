import React from "react";
import { connect } from "react-redux";

import {
  CollectionPageContainer,
  CollectionItemsContainer,
  CollectionTitle,
} from "./collection.styles";
import CollectionItem from "../../components/collection-item/collection-item";
import { selectShopCollection } from "../../redux/shop/shop-selector";

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item) => {
          return <CollectionItem key={item.id} item={item} />;
        })}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, props) => {
  return {
    collection: selectShopCollection(props.match.params.collectionId)(state),
  };
};

export default connect(mapStateToProps)(CollectionPage);
