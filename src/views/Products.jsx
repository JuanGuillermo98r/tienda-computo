import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../controllers/productController';
import ProductCard  from '../components/ProductCard/';

const Products = () => {
  const [productos, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(data => setProducts(data));
  }, []);

  return (
    <div className="container">
      <h2>Catálogo de Productos</h2>
      <div className="grid">
        {productos.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
