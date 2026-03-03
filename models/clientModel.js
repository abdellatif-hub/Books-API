let clients = [
  {
    id: 1,
    name: "Ahmed",
    email: "ahmed@email.com",
    address: "Casablanca",
    tel: "0612345678",
    password: "123456"
  }
];


export const getClients = () => clients;


export const getClientById = (id) =>
  clients.find(client => client.id === id);


export const addClient = (data) => {
  const newClient = {
    id: clients.length ? clients[clients.length - 1].id + 1 : 1,
    ...data
  };
  clients.push(newClient);
  return newClient;
};


export const deleteClient = (id) => {
  const index = clients.findIndex(client => client.id === id);
  if (index === -1) return false;
  clients.splice(index, 1);
  return true;
};