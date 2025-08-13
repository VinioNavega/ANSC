import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  // IMPORTANTE: Substitua pelas suas credenciais reais do Firebase
  // Você pode encontrar essas informações em Project Settings > General > Your apps
  apiKey: "AIzaSyC...", // Sua API Key aqui
  authDomain: "associacao-surf.firebaseapp.com", // Seu domínio aqui
  projectId: "associacao-surf", // Seu Project ID aqui
  storageBucket: "associacao-surf.appspot.com", // Seu Storage Bucket aqui
  messagingSenderId: "123456789", // Seu Sender ID aqui
  appId: "1:123456789:web:abc123def456" // Seu App ID aqui
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;