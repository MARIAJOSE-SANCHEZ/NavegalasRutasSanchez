const products = [
    {
        id: "1",
        name: "Celular Samsung",
        price: 150000,
        category: "electronica",
        stock: 10,
    },
    {
        id: "2",
        name: "Remera Blanca",
        price: 5000,
        category: "ropa",
        stock: 25,
    },
    {
        id: "3",
        name: "Auriculares Bluetooth",
        price: 12000,
        category: "electronica",
        stock: 15,
    },
    {
        id: "4",
        name: "Campera Negra",
        price: 18000,
        category: "ropa",
        stock: 8,
    },
  {
        id: "5",
        name: "Laptop Gamer",
        price: 450000,
        category: "electronica",
        stock: 5,
    },
    {
        id: "6",
        name: "Zapatillas Deportivas",
        price: 8000,
        category: "ropa",
        stock: 20,
    },
    {
        id: "7",
        name: "Tablet 10\"",
        price: 250000,
        category: "electronica",
        stock: 7,
    },
    {
        id: "8",
        name: "Camisa Formal",
        price: 12000,
        category: "ropa",
        stock: 15,
    },
];

export function fetchProducts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
}

export function fetchProductById(id) {
    return new Promise((resolve, reject) => {
        const product = products.find((p) => p.id === id);
        setTimeout(() => {
            if (product) resolve(product);
            else reject("Producto no encontrado");
        }, 500);
    });
}
