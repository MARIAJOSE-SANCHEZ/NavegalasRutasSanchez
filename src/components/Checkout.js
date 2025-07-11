import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import db from "../firebase"; // Asegúrate que exportás Firestore en firebase.js

export default function Checkout() {
  const { cart, clearCart } = useCart();

  const [buyer, setBuyer] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [error, setError] = useState(null);

  // Calcular total
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar campos simples
    if (!buyer.name || !buyer.email || !buyer.phone) {
      setError("Por favor completa todos los campos.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Referencia a la colección "orders"
      const ordersRef = collection(db, "orders");

      // Datos para guardar
      const orderData = {
        buyer,
        items: cart.map(({ id, title, price, quantity }) => ({
          id,
          title,
          price,
          quantity,
        })),
        total,
        date: Timestamp.fromDate(new Date()),
      };

      // Guardar orden
      const docRef = await addDoc(ordersRef, orderData);

      setOrderId(docRef.id);
      clearCart();
    } catch (err) {
      console.error("Error al crear la orden:", err);
      setError("Ocurrió un error al crear la orden.");
    } finally {
      setLoading(false);
    }
  };

  if (orderId) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>¡Gracias por tu compra!</h2>
        <p>Tu número de orden es: <strong>{orderId}</strong></p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>Confirmar compra</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "10px" }}>
          <label>Nombre:</label><br />
          <input
            type="text"
            name="name"
            value={buyer.name}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={buyer.email}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Teléfono:</label><br />
          <input
            type="tel"
            name="phone"
            value={buyer.phone}
            onChange={handleChange}
            required
          />
        </div>

        <h3>Total: ${total}</h3>

        <button type="submit" disabled={loading}>
          {loading ? "Procesando..." : "Confirmar compra"}
        </button>
      </form>
    </div>
  );
}
