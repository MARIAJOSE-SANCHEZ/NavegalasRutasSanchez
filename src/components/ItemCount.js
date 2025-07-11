import React from "react";
import "./ItemCount.css";

export default function ItemCount({ count, onAdd, onRemove, stock }) {
  return (
    <div className="item-counter">
      <button onClick={onRemove} disabled={count <= 1}>-</button>
      <span>{count}</span>
      <button onClick={onAdd} disabled={count >= stock}>+</button>
    </div>
  );
}


