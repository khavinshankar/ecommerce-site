import React from "react";

import {
  CollectionPreviewContainer,
  PreviewContainer,
  TitleContainer,
} from "./collection-preview.styles";
import CollectionItem from "../collection-item/collection-item";

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer>{title}</TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, i) => i < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default CollectionPreview;
