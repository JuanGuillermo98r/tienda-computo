import React, { useState, useEffect } from "react";
import { getProducts, addProduct, deleteProduct } from "../models/productModel";
import { auth } from "../models/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";



const Admin = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: ""
  });


  const fetchData = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
     onAuthStateChanged(auth, (user) => {
    if (!user) navigate("/login");
  });

    fetchData();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    await addProduct(form);
    setForm({ name: "", description: "", price: "", image: "" });
    fetchData();
    alert("Producto agregado exitosamente");
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchData();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Panel de Administración</h1>

      <h2>Agregar producto</h2>
      <form onSubmit={handleAddProduct} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="name"
          placeholder="Nombre del producto"
          value={form.name}
          onChange={handleChange}
        /><br /><br />

        <input
          type="text"
          name="description"
          placeholder="Descripción"
          value={form.description}
          onChange={handleChange}
        /><br /><br />

        <input
          type="number"
          name="price"
          placeholder="Precio"
          value={form.price}
          onChange={handleChange}
        /><br /><br />

        <input
          type="text"
          name="image"
          placeholder="URL de la imagen"
          value={form.image}
          onChange={handleChange}
        /><br /><br />

        <button type="submit">Agregar</button>
      </form>

      <h2>Productos registrados</h2>
      {products.map((p) => (
        <div key={p.id} style={{ marginBottom: "15px" }}>
          <b>{p.name}</b> - S/ {p.price}
          <button
            onClick={() => handleDelete(p.id)}
            style={{ marginLeft: "10px", color: "red" }}
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
  );
};

export default Admin;




