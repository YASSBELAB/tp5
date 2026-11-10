
let products = [
  { id: 1, name: 'Laptop Pro', price: 1200.50, stock: 15 },
  { id: 2, name: 'Souris Sans Fil', price: 25.99, stock: 50 },
  { id: 3, name: 'Clavier Mécanique', price: 75.00, stock: 30 }
];

export const productRepository = {
  findAll: async (search = '') => {
    return products.filter(product =>
      product.name.toLowerCase().includes(search.toLowerCase())
    );
  },

  findById: async (id) => products.find(p => p.id === id),

  create: async (productData) => {
    const newId = products.length > 0
      ? products[products.length - 1].id + 1
      : 1;

    const newProduct = { id: newId, ...productData };
    products.push(newProduct);
    return newProduct;
  },

  update: async (id, productData) => {
    const index = products.findIndex(p => p.id === id);

    if (index === -1) return null;

    products[index] = { id, ...productData };
    return products[index];
  },

  // Update only the stock quantity
  updateStock: async (id, stock) => {
    const product = products.find(p => p.id === id);

    if (!product) return null;

    product.stock = stock;

    return product;
  },

  delete: async (id) => {
    const index = products.findIndex(p => p.id === id);

    if (index === -1) return false;

    products.splice(index, 1);
    return true;
  }
};
