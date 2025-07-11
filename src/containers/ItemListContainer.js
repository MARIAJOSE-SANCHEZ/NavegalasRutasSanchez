import React, { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import { getDocs, collection, query, where } from "firebase/firestore";
import db from "../firebase";
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
  const { categoryName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsCollection = collection(db, "products");
        let q;

        if (categoryName) {
          q = query(productsCollection, where("category", "==", categoryName));
        } else {
          q = query(productsCollection);
        }

        const snapshot = await getDocs(q);
        const productos = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(productos);
      } catch (error) {
        console.error("Error al cargar los productos:", error);
      }
    };

    fetchProducts();
  }, [categoryName]);

  return <ItemList products={products} />;
}
