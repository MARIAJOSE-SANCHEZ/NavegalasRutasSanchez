import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

export default function Item({ id, title, price }) {
  return (
    <div className="product-card">
      <h3>
        <Link to={`/item/${id}`} className="product-link">
          {title}
        </Link>
      </h3>
      <p>Precio: ${price}</p>
    </div>
  );
}
