const products = [
  { id: "1", name: "Celular", category: "electronica", description: "Un celular nuevo", price: 1000 },
  { id: "2", name: "Laptop", category: "electronica", description: "Laptop potente", price: 2000 },
  { id: "3", name: "Camisa", category: "ropa", description: "Camisa elegante", price: 500 },
  { id: "4", name: "Pantalón", category: "ropa", description: "Pantalón de vestir", price: 600 }
];

// Simula una Promise asincrónica
export const fetchProducts = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve(products), 500);
  });

export const fetchProductsByCategory = (categoryId) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(products.filter(p => p.category === categoryId)), 500);
  });

export const fetchProductById = (itemId) =>
  new Promise((resolve, reject) => {
    const prod = products.find(p => p.id === itemId);
    setTimeout(() => {
      prod ? resolve(prod) : reject("Producto no encontrado");
    }, 500);
  });

  
