import products from "./mock/products";

export const fetchProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const fetchProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find(p => p.id === id);
      product ? resolve(product) : reject("Producto no encontrado");
    }, 500);
  });
};

