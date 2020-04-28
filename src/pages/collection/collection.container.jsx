import { connect } from "react-redux";
import { compose } from "redux";

import CollectionPage from "./collection";
import WithSpinner from "../../components/with-spinner/with-spinner";
import { selectIsCollectionsLoaded } from "../../redux/shop/shop-selector";

const mapStateToProps = (state) => {
  return {
    isLoading: !selectIsCollectionsLoaded(state),
  };
};

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
