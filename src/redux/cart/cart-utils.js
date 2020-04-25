export const addItemToCart = (existingItems, itemToAdd) => {
  const exists = existingItems.find((item) => {
    return item.id === itemToAdd.id;
  });

  if (exists) {
    return existingItems.map((item) => {
      return item.id === itemToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  }

  return [...existingItems, { ...itemToAdd, quantity: 1 }];
};
