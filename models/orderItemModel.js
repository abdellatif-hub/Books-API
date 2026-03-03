let orderItems = [
  {
    id: 1,
    quantity: 2,
    orderId: 1,
    bookId: 1
  }
];

export const getOrderItems = () => orderItems;

export const getOrderItemById = (id) =>
  orderItems.find(item => item.id === id);

export const addOrderItem = (data) => {
  const newItem = {
    id: orderItems.length ? orderItems[orderItems.length - 1].id + 1 : 1,
    ...data
  };
  orderItems.push(newItem);
  return newItem;
};

export const deleteOrderItem = (id) => {
  const index = orderItems.findIndex(item => item.id === id);
  if (index === -1) return false;
  orderItems.splice(index, 1);
  return true;
};