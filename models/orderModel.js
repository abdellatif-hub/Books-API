let orders = [
  {
    id: 1,
    orderDate: new Date(),
    status: "Pending",
    total: 0,
    clientId: 1
  }
];

export const getOrders = () => orders;

export const getOrderById = (id) =>
  orders.find(order => order.id === id);

export const addOrder = (data) => {
  const newOrder = {
    id: orders.length ? orders[orders.length - 1].id + 1 : 1,
    ...data
  };
  orders.push(newOrder);
  return newOrder;
};

export const deleteOrder = (id) => {
  const index = orders.findIndex(order => order.id === id);
  if (index === -1) return false;
  orders.splice(index, 1);
  return true;
};