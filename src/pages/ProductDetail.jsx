import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductById } from '../models/productModel';

const ProductDetail = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      const data = await getProductById(id);
      setProduct(data);
    };

    loadProduct();
  }, [id]);

  if (!product) {
    return <div className="p-10 text-center">Cargando producto...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-8 grid md:grid-cols-2 gap-10">
      {/* IMAGEN */}
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* INFO */}
      <div>
        <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

        <p className="text-gray-600 mb-6">{product.description}</p>

        <p className="text-2xl font-bold text-purple-700 mb-6">
          S/ {product.price}
        </p>

        <button className="bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition">
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
