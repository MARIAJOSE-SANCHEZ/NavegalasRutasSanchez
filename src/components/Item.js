import React from "react";
import { Link } from "react-router-dom";
import "./Item.css"; // 👈 Agregalo

export default function Item({ id, name, price }) {
  return (
    <div className="product-card">
      <h3>
        <Link to={`/item/${id}`} className="product-link">
          {name}
        </Link>
      </h3>
      <p>Precio: ${price}</p>
    </div>
  );
}

