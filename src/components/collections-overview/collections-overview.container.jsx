import { connect } from "react-redux";
import { compose } from "redux";

import CollectionsOverview from "./collections-overview";
import WithSpinner from "../with-spinner/with-spinner";
import { selectIsFetching } from "../../redux/shop/shop-selector";

const mapStateToProps = (state) => {
  return {
    isLoading: selectIsFetching(state),
  };
};

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
