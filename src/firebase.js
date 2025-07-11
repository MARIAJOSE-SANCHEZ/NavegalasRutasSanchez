import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBg1XHpUjeOy0VOttZzzqDB_vvJzYRXXBo",
  authDomain: "proyectofinalsanchez.firebaseapp.com",
  projectId: "proyectofinalsanchez",
  storageBucket: "proyectofinalsanchez.appspot.com", 
  messagingSenderId: "779598137559",
  appId: "1:779598137559:web:9f0278d0ee26e38dc30892",
  measurementId: "G-1YHKD1HKF0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
