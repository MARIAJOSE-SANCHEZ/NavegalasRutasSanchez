import React from "react";
import { Link } from "react-router-dom";

export default function ItemList({ items }) {
  return (
    <div className="catalog-container">
      {items.length === 0 ? (
        <p>No hay productos para mostrar</p>
      ) : (
        items.map(item => (
          <div key={item.id} className="product-card">
            <h3>
              <Link to={`/item/${item.id}`} className="product-link">
                {item.name}
              </Link>
            </h3>
            <p>Precio: ${item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}
