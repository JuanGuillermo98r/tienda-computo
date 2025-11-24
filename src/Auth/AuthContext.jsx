import { createContext, useContext, useEffect, useState } from "react";
import { listenAuth } from "./auth"; // importa función creada antes

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = listenAuth((u) => {
      setUser(u);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook para acceder al usuario
export function useAuth() {
  return useContext(AuthContext);
}

