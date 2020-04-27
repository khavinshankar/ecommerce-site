import React from "react";
import { connect } from "react-redux";

import "./directory.scss";

import MenuItem from "../menu-item/menu-item";
import { selectDirectorySections } from "../../redux/directory/directory-selector";

const Directory = ({ sections }) => {
  return (
    <div className="directory">
      {sections.map(({ id, ...otherprops }) => (
        <MenuItem key={id} {...otherprops} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sections: selectDirectorySections(state),
  };
};

export default connect(mapStateToProps)(Directory);
