import products from "./mock/products";

export const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 500);
  });
};

export const fetchProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const found = products.find((p) => p.id === id);
      found ? resolve(found) : reject("Producto no encontrado");
    }, 500);
  });
};
