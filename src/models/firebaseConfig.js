// Configuración base para conectar Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBLQyqDQPubpwhhWJpUIAe6Uq0g78WxoQ0',
  authDomain: 'tienda-computo-64bda.firebaseapp.com',
  projectId: 'tienda-computo-64bda',
  storageBucket: 'tienda-computo-64bda.firebasestorage.app',
  messagingSenderId: '787660662436',
  appId: '1:787660662436:web:035b3abd474b631e59a831',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

// Registrar usuario
export function register(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

// Iniciar sesión
export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

// Cerrar sesión
export function logout() {
  return signOut(auth);
}

// Detectar usuario logueado
export function listenAuth(callback) {
  return onAuthStateChanged(auth, callback);
}
