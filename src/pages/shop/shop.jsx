import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop-actions";
import Spinner from "../../components/spinner/spinner";

const CollectionsOverviewContainer = lazy(() =>
  import("../../components/collections-overview/collections-overview.container")
);
const CollectionPageContainer = lazy(() =>
  import("../collection/collection.container")
);

const ShopPage = (props) => {
  const { fetchCollections, match } = props;

  useEffect(() => {
    fetchCollections();
  }, [fetchCollections]);

  return (
    <div>
      <Suspense fallback={Spinner}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCollections: () => {
      return dispatch(fetchCollectionsStart());
    },
  };
};

export default connect(null, mapDispatchToProps)(ShopPage);
