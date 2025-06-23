import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../data"; // esto debería devolver todos los productos
import ItemList from "../components/ItemList";

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    fetchProducts()
      .then((data) => {
        if (categoryId) {
          const filtered = data.filter((item) => item.category === categoryId);
          setItems(filtered);
        } else {
          setItems(data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al cargar productos:", error);
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) return <p>Cargando productos...</p>;

  return <ItemList items={items} />;
}

