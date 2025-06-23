
import React, { useState } from "react";
import "../App.css"; // si vas a separar los estilos luego

export default function ItemDetail({ product }) {
  const [count, setCount] = useState(1);

  const addUnit = () => setCount(prev => prev + 1);
  const removeUnit = () => setCount(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="item-detail-container">
            <div className="item-detail-info">
        <h2>{product.name}</h2>
        <p className="item-category">Categoría: {product.category}</p>
        <p className="item-price">Precio: ${product.price}</p>

        <div className="item-counter">
          <button onClick={removeUnit}>-</button>
          <span>{count}</span>
          <button onClick={addUnit}>+</button>
        </div>

        <button className="add-to-cart-btn">
          Agregar {count} unidad{count > 1 ? "es" : ""} al carrito
        </button>
      </div>
    </div>
  );
}
