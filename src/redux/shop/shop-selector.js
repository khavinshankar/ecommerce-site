import { createSelector } from "reselect";

const selectShop = (state) => {
  return state.shop;
};

export const selectShopCollections = createSelector([selectShop], (shop) => {
  return shop.collections;
});

export const selectShopCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) =>
    collections
      ? Object.keys(collections).map((key) => {
          return collections[key];
        })
      : []
);

export const selectShopCollection = (urlParam) => {
  return createSelector([selectShopCollections], (collections) => {
    return collections ? collections[urlParam] : null;
  });
};

export const selectIsFetching = createSelector([selectShop], (shop) => {
  return shop.isFetching;
});

export const selectIsCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => {
    return !!shop.collections;
  }
);
