import { db } from './firebaseConfig';
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
} from 'firebase/firestore';

// export const getProducts = async () => {
//   const snapshot = await getDocs(collection(db, 'products'));
//   return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
// };

export const getProductById = async (id) => {
  const docRef = doc(db, 'products', id);

  const snapshot = await getDoc(docRef);

  if (snapshot.exists()) {
    return {
      id: snapshot.id,
      ...snapshot.data(),
    };
  }

  return null;
};

export const searchProducts = async (text) => {
  const q = query(
    collection(db, 'products'),
    where('name', '>=', text),
    where('name', '<=', text + '\uf8ff'),
  );

  const snapshot = await getDocs(q);

  const results = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return results;
};

// ----- Obtener productos -----
export const getProducts = async () => {
  const snapshot = await getDocs(collection(db, 'products'));
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

// ----- Agregar nuevo producto -----
export const addProduct = async (product) => {
  return await addDoc(collection(db, 'products'), product);
};

// ----- Eliminar producto -----
export const deleteProduct = async (id) => {
  return await deleteDoc(doc(db, 'products', id));
};
