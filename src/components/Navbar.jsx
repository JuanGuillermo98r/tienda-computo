import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header className="navbar">
    <div
      className="container"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 0',
      }}
    >
      <h2 style={{ margin: 0 }}>Tienda de Cómputo</h2>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/products">Productos</Link>
        <Link to="/services">Servicios</Link>
        <Link to="/about">Nosotros</Link>
        <Link to="/contact">Contacto</Link>
      </nav>
    </div>
  </header>
);

export default Navbar;
