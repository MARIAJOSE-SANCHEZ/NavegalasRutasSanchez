import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css"; // O cambiar si usás otro archivo de estilos

export default function CartWidget({ count = 0 }) {
  return (
    <div className="cart-widget">
      <FaShoppingCart size={20} />
      {count > 0 && <span className="cart-count">{count}</span>}
    </div>
  );
}