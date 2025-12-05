import Sidebar from '../components/SideBar';
import Topbar from '../components/Topbar';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 w-full">
        <Topbar />

        <main className="p-8 mt-20">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
