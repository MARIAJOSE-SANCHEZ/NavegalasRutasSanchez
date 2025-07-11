import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../firebase"; 
import ItemDetail from "../components/ItemDetail";

export default function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "products", itemId); 
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          setError("Producto no encontrado");
        }
      } catch (err) {
        setError("Error al obtener el producto");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [itemId]);

  if (loading) return <p>Cargando detalle del producto...</p>;
  if (error) return <p>{error}</p>;

  return <ItemDetail product={product} />;
}
