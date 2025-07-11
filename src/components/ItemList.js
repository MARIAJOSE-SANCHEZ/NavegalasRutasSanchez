import React from "react";
import Item from "./Item"; 
import './ItemList.css';


export default function ItemList({ products = [] }) {
  if (!products.length) {
    return <p>Cargando productos...</p>; 
  }

  return (
    <div className="item-list">
      {products.map((product) => (
        <Item key={product.id} {...product} />
      ))}
    </div>
  );
}

