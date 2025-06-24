import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Inicio</Link>
      <Link to="/category/electronica">Electrónica</Link>
      <Link to="/category/ropa">Ropa</Link>
    </nav>
  );
}
