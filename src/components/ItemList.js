import React from "react";
import Item from "./Item"; 

export default function ItemList({ items }) {
  return (
    <div className="catalog-container">
      {items.length === 0 ? (
        <p>No hay productos para mostrar</p>
      ) : (
        items.map(item => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
          />
        ))
      )}
    </div>
  );
}
