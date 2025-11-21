import { getProducts } from '../models/productModel';

export const fetchProducts = async () => {
  try {
    const data = await getProducts();
    return data;
  } catch (error) {
    console.error('Error al cargar productos:', error);
    return [];
  }
};

/* import { productsData } from '../data/productsData';

export const fetchProducts = async () => {
  // Simulate latency
  await new Promise((res) => setTimeout(res, 300));
  return productsData;
};
 */
