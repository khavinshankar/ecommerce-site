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
    Object.keys(collections).map((key) => {
      return collections[key];
    })
);

export const selectShopCollection = (urlParam) => {
  return createSelector([selectShopCollections], (collections) => {
    return collections[urlParam];
  });
};
