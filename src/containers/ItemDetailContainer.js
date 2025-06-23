import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../data";
import ItemDetail from "../components/ItemDetail";

export default function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetchProductById(itemId)
      .then(prod => {
        setProduct(prod);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, [itemId]);

  if (loading) return <p>Cargando detalle del producto...</p>;
  if (error) return <p>Error: {error}</p>;

  return <ItemDetail product={product} />;
}
