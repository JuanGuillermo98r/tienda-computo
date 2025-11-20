import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../controllers/productController';
import ProductCard from '../components/ProductCard/';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="container">
      <h2>Catálogo de Productos</h2>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="grid">
          {products.map((p) => (
            <ProductCard key={p.id} data={p} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;
