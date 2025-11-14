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
