import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from '../views/Home';
import Productos from '../views/Products';
import Servicios from '../views/Services';
import Contacto from '../views/Contact';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import About from '../views/About';
import Login from '../views/Login';
import AdminProducts from '../views/AdminProducts';
import AdminDashboard from '../views/AdminDashboard';
import AdminServicios from '../views/AdminServices';

function AppLayout() {
  const location = useLocation();

  // Rutas donde NO quieres mostrar el Navbar
  const hideNavbarRoutes = [
    '/login',
    '/admin',
    '/admin/products',
    '/admin/services',
    '/admin',
  ];

  const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Productos />} />
        <Route path="/services" element={<Servicios />} />
        <Route path="/contact" element={<Contacto />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin/products" element={<AdminProducts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/services" element={<AdminServicios />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </>
  );
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <AppLayout />
      <Footer />
    </BrowserRouter>
  );
}
