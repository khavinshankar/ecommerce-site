import React from "react";
import { withRouter } from "react-router-dom";

import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentSubtitle,
  ContentTitle,
} from "./menu-item.styles";

const MenuItem = ({ history, match, title, imageUrl, linkUrl }) => {
  return (
    <MenuItemContainer onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <BackgroundImageContainer
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <ContentContainer>
        <ContentTitle>{title}</ContentTitle>
        <ContentSubtitle>Shop Now</ContentSubtitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default withRouter(MenuItem);
