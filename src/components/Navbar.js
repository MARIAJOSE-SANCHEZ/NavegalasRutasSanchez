import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import "./Navbar.css";
import logo from "./logo.png"; // ← Importá tu logo

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Logo" className="logo-img" />
      </Link>
      <div>
        <Link to="/">Inicio</Link>
        <Link to="/category/electronica">Electrónica</Link>
        <Link to="/category/ropa">Ropa</Link>
      </div>
      <CartWidget count={3} />
    </nav>
  );
}


