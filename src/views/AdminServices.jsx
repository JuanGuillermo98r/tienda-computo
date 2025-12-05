import AdminLayout from '../layouts/AdminLayout';

const AdminServicios = () => {
  return (
    <AdminLayout>
      <h2 className="text-2xl font-bold mb-6">Gestión de Servicios</h2>

      <p className="text-gray-600">
        Aquí podrás agregar servicios, editar, eliminar y administrarlos.
      </p>
    </AdminLayout>
  );
};

export default AdminServicios;
