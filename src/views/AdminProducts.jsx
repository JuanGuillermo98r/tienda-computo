import React, { useState, useEffect } from 'react';
import { getProducts, addProduct, deleteProduct } from '../models/productModel';
import { auth } from '../models/firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';

const AdminProducts = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
  });

  const fetchData = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) navigate('/login');
    });

    fetchData();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    await addProduct(form);
    setForm({ name: '', description: '', price: '', image: '' });
    fetchData();
    alert('Producto agregado exitosamente');
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchData();
  };

  return (
    <AdminLayout>
      <h1 className="text-3xl font-bold mb-6">Gestión de Productos</h1>

      {/* -------- FORMULARIO -------- */}
      <form
        onSubmit={handleAddProduct}
        className="bg-white shadow-lg rounded-xl p-6 mb-10 max-w-xl space-y-4 border border-gray-100"
      >
        <h2 className="text-xl font-semibold mb-4">Agregar producto</h2>

        <input
          type="text"
          name="name"
          placeholder="Nombre del producto"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

        <textarea
          name="description"
          placeholder="Descripción"
          value={form.description}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

        <input
          type="number"
          name="price"
          placeholder="Precio"
          value={form.price}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

        <input
          type="text"
          name="image"
          placeholder="URL de la imagen"
          value={form.image}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

        <button
          type="submit"
          className="bg-purple-700 hover:bg-purple-800 text-white px-5 py-2 rounded-lg transition font-medium"
        >
          Agregar
        </button>
      </form>

      {/* -------- LISTA DE PRODUCTOS -------- */}
      <h2 className="text-2xl font-semibold mb-4">Productos registrados</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.length === 0 && (
          <p className="text-gray-500">No hay productos registrados.</p>
        )}

        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white shadow-md hover:shadow-lg transition p-5 rounded-xl border border-gray-100"
          >
            <h3 className="text-lg font-bold">{p.name}</h3>
            <p className="text-gray-600 text-sm">{p.description}</p>

            <p className="font-semibold text-purple-700 mt-2">S/ {p.price}</p>

            {p.image && (
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-40 object-cover rounded-lg mt-3 border"
              />
            )}

            <button
              onClick={() => handleDelete(p.id)}
              className="mt-4 text-red-600 font-semibold hover:text-red-800"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </AdminLayout>
  );
};

export default AdminProducts;
