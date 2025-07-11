import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { useCart } from "../context/CartContext";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";

export default function ItemDetail({ product }) {
  const [count, setCount] = useState(1);
  const [addedMessage, setAddedMessage] = useState("");
  const [stockError, setStockError] = useState("");
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const { categoryName } = useParams();

  if (!product) return <p>Cargando producto...</p>;

  const handleAddToCart = () => {
    if (count > product.stock) {
      setStockError("No hay más stock disponible.");
      return;
    }
    addToCart(product, count);
    setAddedMessage(
      `✅ Agregaste ${count} unidad${count > 1 ? "es" : ""} de "${product.title}" a tu carrito.`
    );
    setStockError("");
  };

  const handleAdd = () => {
    if (count < product.stock) {
      setCount(count + 1);
      setStockError("");
    } else {
      setStockError("No hay más stock disponible.");
    }
  };

  const handleRemove = () => {
    if (count > 1) {
      setCount(count - 1);
      setStockError("");
    }
  };

  return (
    <div className="item-detail-container">
      <div className="item-detail-info">
        <h2>{product.title}</h2>
        <p><strong>Descripción:</strong> {product.description}</p>
        <p><strong>Precio:</strong> ${product.price}</p>
        <p><strong>Stock:</strong> {product.stock}</p>
        <p><strong>Categoría:</strong> {product.category}</p>

        <ItemCount count={count} onAdd={handleAdd} onRemove={handleRemove} />

        {stockError && <p style={{ color: "red", marginTop: "10px" }}>{stockError}</p>}

        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Agregar al carrito
        </button>

        {addedMessage && (
          <div className="added-message-container">
            <p className="added-message-text">{addedMessage}</p>
            <button
              className="back-to-category-btn"
              onClick={() => navigate(categoryName ? `/category/${categoryName}` : "/")}
            >
              Volver a la categoría
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
