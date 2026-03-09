import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle =
    "text-gray-600 hover:text-purple-700 transition font-medium";

  const activeStyle = "text-purple-700 font-semibold";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center py-4">

          {/* LOGO */}
          <Link to="/" className="text-xl font-bold text-gray-800">
            Tienda de Cómputo
          </Link>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-6">

            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeStyle : linkStyle
              }
            >
              Inicio
            </NavLink>

            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? activeStyle : linkStyle
              }
            >
              Productos
            </NavLink>

            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? activeStyle : linkStyle
              }
            >
              Servicios
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeStyle : linkStyle
              }
            >
              Nosotros
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? activeStyle : linkStyle
              }
            >
              Contacto
            </NavLink>

          </nav>

          {/* BUSCADOR */}
          <div className="hidden md:flex items-center border rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Buscar productos..."
              className="px-3 py-1 outline-none"
            />
            <button className="bg-purple-700 text-white px-3 py-1 hover:bg-purple-800 transition">
              🔍
            </button>
          </div>

          {/* BOTON ADMIN */}
          <div className="hidden md:block">
            <Link
              to="/login"
              className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-800 transition"
            >
              Admin
            </Link>
          </div>

          {/* BOTON MOVIL */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

        </div>

        {/* MENU MOVIL */}
        {menuOpen && (
          <div className="md:hidden pb-4 flex flex-col gap-3">

            <Link to="/">Inicio</Link>
            <Link to="/products">Productos</Link>
            <Link to="/services">Servicios</Link>
            <Link to="/about">Nosotros</Link>
            <Link to="/contact">Contacto</Link>

            <Link
              to="/login"
              className="bg-purple-700 text-white px-4 py-2 rounded-lg w-fit"
            >
              Admin
            </Link>

          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;