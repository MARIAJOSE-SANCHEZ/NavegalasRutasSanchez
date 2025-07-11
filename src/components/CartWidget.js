import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext"; 
import { Link } from "react-router-dom"; 
import "./Navbar.css";

export default function CartWidget() {
  const { cartCount } = useCart();

  return (
    <div className="cart-widget">
      <Link to="/cart" className="cart-link"> 
        <FaShoppingCart size={20} className="cart-icon" />
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </Link>
    </div>
  );
}
