import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <h1>Tienda de Cómputo</h1>
    <ul>
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/products">Productos</Link></li>
      <li><Link to="/services">Servicios</Link></li>
      <li><Link to="/about">Nosotros</Link></li>
      <li><Link to="/contact">Contacto</Link></li>
    </ul>
  </nav>
);

export default Navbar;