import React from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import "./Cart.css";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return <p className="empty-cart">El carrito está vacío.</p>;
  }

  return (
    <div className="cart-container">
      <h2>Carrito de compras</h2>
      <ul className="cart-list">
        {cart.map((item) => (
          <li key={item.id} className="cart-item">
            <div>
              <strong>{item.title}</strong> <br />
              {item.quantity} x ${item.price} = ${item.quantity * item.price}
            </div>
            <button
              className="remove-btn"
              onClick={() => removeFromCart(item.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>

      <h3>Total: ${total.toFixed(2)}</h3>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button className="clear-cart-btn" onClick={clearCart}>
          Vaciar carrito
        </button>

        <button
          className="clear-cart-btn finalize-btn"
          style={{ backgroundColor: "#2ecc71", marginLeft: "10px" }}
          onClick={() => navigate("/")}
        >
          Seguir comprando
        </button>

        <button
          className="clear-cart-btn"
          style={{ backgroundColor: "#2ecc9aff", marginLeft: "10px" }}
          onClick={() => navigate("/checkout")}>
          Finalizar compra
        </button>
      </div>
    </div>
  );
}
