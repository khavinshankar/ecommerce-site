import { takeLatest, call, put, all } from "redux-saga/effects";

import ShopActionTypes from "./shop-types";
import {
  firestore,
  convertCollectSnapshotToMap,
} from "../../utils/firebase/firebase";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop-actions";

function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectSnapshotToMap, snapshot);
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollections() {
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollections)]);
}
