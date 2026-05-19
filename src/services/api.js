import { PRODUCTS } from '../utils/constants.js';

export function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(PRODUCTS), 300);
  });
}

export function getProductById(id) {
  return new Promise((resolve, reject) => {
    const product = PRODUCTS.find((item) => item.id === id);
    setTimeout(() => {
      if (product) {
        resolve(product);
      } else {
        reject(new Error('Product not found'));
      }
    }, 200);
  });
}
