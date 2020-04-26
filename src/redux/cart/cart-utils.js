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

export const removeItemFromCart = (existingItems, itemToRemove) => {
  return existingItems.filter((item) => {
    return item.id !== itemToRemove.id;
  });
};

export const reduceItemFromCart = (existingItems, itemToReduce) => {
  const exists = existingItems.find((item) => {
    return item.id === itemToReduce.id;
  });

  if (exists.quantity === 1) {
    return existingItems.filter((item) => {
      return item.id !== itemToReduce.id;
    });
  }

  return existingItems.map((item) => {
    return item.id === itemToReduce.id
      ? { ...item, quantity: item.quantity - 1 }
      : item;
  });
};
