import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import "./App.css"; 

import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";

function NotFound() {
  return <h2>404 - Página no encontrada</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Inicio</Link> |{" "}
        <Link to="/category/electronica">Electrónica</Link> |{" "}
        <Link to="/category/ropa">Ropa</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
