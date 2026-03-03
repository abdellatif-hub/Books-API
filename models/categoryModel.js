let categories = [
  { id: 1, name: "Programming" },
  { id: 2, name: "Science" }
];

export const getCategories = () => categories;

export const getCategoryById = (id) =>
  categories.find(cat => cat.id === id);

export const addCategory = (name) => {
  const newCategory = {
    id: categories.length ? categories[categories.length - 1].id + 1 : 1,
    name
  };
  categories.push(newCategory);
  return newCategory;
};

export const deleteCategory = (id) => {
  const index = categories.findIndex(cat => cat.id === id);
  if (index === -1) return false;
  categories.splice(index, 1);
  return true;
};