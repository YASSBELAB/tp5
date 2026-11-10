
import { productRepository } from '../repositories/product.repository.js';

export const productService = {
  // Retrieve products with search and pagination
  getAllProducts: async (search = '', page = 1, limit = 10) => {
    const products = await productRepository.findAll(search);

    const total = products.length;
    const startIndex = (page - 1) * limit;

    const paginatedProducts = products.slice(
      startIndex,
      startIndex + limit
    );

    return {
      products: paginatedProducts,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit)
    };
  },

  getProductById: async (id) => {
    const product = await productRepository.findById(id);

    if (!product) {
      throw new Error('Produit non trouvé');
    }

    return product;
  },

  createProduct: async (productData) => {
    // Vérification du prix
    if (productData.price < 0) {
      throw new Error('Le prix ne peut pas être négatif');
    }

    return await productRepository.create(productData);
  },

  updateProduct: async (id, productData) => {
    await productService.getProductById(id);

    return await productRepository.update(id, productData);
  },

  // Update only the stock quantity
  updateStock: async (id, stock) => {
    if (!Number.isInteger(stock) || stock < 0) {
      throw new Error('Le stock doit être un entier positif ou nul');
    }

    await productService.getProductById(id);

    return await productRepository.updateStock(id, stock);
  },

  deleteProduct: async (id) => {
    await productService.getProductById(id);

    return await productRepository.delete(id);
  }
};
