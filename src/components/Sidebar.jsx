import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-gray-100 h-screen fixed p-6 shadow-xl">
      <h2 className="text-xl font-bold mb-8">Admin Panel</h2>

      <nav className="flex flex-col gap-3">
        <Link
          to="/admin"
          className="px-4 py-2 rounded-md hover:bg-gray-800 transition"
        >
          Dashboard
        </Link>

        <Link
          to="/admin/products"
          className="px-4 py-2 rounded-md hover:bg-gray-800 transition"
        >
          Productos
        </Link>

        <Link
          to="/admin/services"
          className="px-4 py-2 rounded-md hover:bg-gray-800 transition"
        >
          Servicios
        </Link>

        <div className="border-t border-gray-700 my-3"></div>

        <button className="px-4 py-2 text-left rounded-md hover:bg-red-700/40 transition">
          Cerrar sesión
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
