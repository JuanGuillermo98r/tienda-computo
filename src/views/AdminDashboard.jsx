import AdminLayout from '../layouts/AdminLayout';

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <h2 className="text-2xl font-bold mb-6">Resumen</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <p className="text-gray-500">Productos</p>
          <p className="text-3xl font-bold mt-2">152</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <p className="text-gray-500">Servicios</p>
          <p className="text-3xl font-bold mt-2">15</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <p className="text-gray-500">Ventas</p>
          <p className="text-3xl font-bold mt-2">S/ 3,820</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <p className="text-gray-500">Pendientes</p>
          <p className="text-3xl font-bold mt-2">8</p>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
