import React from "react";
import Item from "./Item"; 

export default function ItemList({ products = [] }) {
  if (!products.length) {
    return <p>Cargando productos...</p>; // o un loader
  }

  return (
    <div className="item-list">
      {products.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </div>
  );
}

