import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../views/Home";
import Productos from "../views/Products";
import Servicios from "../views/Services";
import Contacto from "../views/Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import About from "../views/About";
import Admin from "../views/Admin";
import Login from "../views/Login";


const AppRouter = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Productos />} />
      <Route path="/services" element={<Servicios />} />
      <Route path="/contact" element={<Contacto />} />
      <Route path="/about" element={<About />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
export default AppRouter;
