import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../CartContext"; 
import "./Navbar.css";

export default function CartWidget() {
  const { cartCount } = useCart();

  return (
    <div className="cart-widget">
      <FaShoppingCart size={20} />
      {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
    </div>
  );
}
