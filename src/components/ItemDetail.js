import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { useCart } from "../CartContext";
import "../App.css";

export default function ItemDetail({ product }) {
  const [count, setCount] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(count);
  };

  return (
    <div className="item-detail-container">
      <div className="item-detail-info">
        <h2>{product.title}</h2>
        <p className="item-category">Categoría: {product.category}</p>
        <p className="item-price">Precio: ${product.price}</p>
        <p><strong>Descripción:</strong> {product.description}</p>
        <p><strong>Stock disponible:</strong> {product.stock}</p>

        <ItemCount
          count={count}
          stock={product.stock}
          onAdd={() => setCount((c) => (c < product.stock ? c + 1 : c))}
          onRemove={() => setCount((c) => (c > 1 ? c - 1 : 1))}
        />
        {count === product.stock && (
          <p style={{ color: "red", marginTop: "0.5rem" }}>
            Alcanzaste el stock máximo disponible.
          </p>
        )}

        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Agregar {count} unidad{count > 1 ? "es" : ""} al carrito
        </button>
      </div>
    </div>
  );
}
