import { db } from './firebase';
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore';

// export const getProducts = async () => {
//   const snapshot = await getDocs(collection(db, 'products'));
//   return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
// };

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
