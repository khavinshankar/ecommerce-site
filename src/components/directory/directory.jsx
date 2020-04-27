import React from "react";
import { connect } from "react-redux";

import { DirectoryMenuContainer } from "./directory.styles";

import MenuItem from "../menu-item/menu-item";
import { selectDirectorySections } from "../../redux/directory/directory-selector";

const Directory = ({ sections }) => {
  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...otherprops }) => (
        <MenuItem key={id} {...otherprops} />
      ))}
    </DirectoryMenuContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    sections: selectDirectorySections(state),
  };
};

export default connect(mapStateToProps)(Directory);
