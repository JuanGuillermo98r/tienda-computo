const Topbar = () => {
  return (
    <header className="fixed left-64 top-0 w-[calc(100%-16rem)] h-16 bg-white shadow flex items-center justify-between px-6 z-10">
      <h1 className="text-xl font-semibold text-gray-700">
        Panel Administrativo
      </h1>

      <div className="flex items-center gap-4">
        <span className="text-gray-600">Administrador</span>
        <div className="w-10 h-10 bg-gray-300 rounded-full" />
      </div>
    </header>
  );
};

export default Topbar;
