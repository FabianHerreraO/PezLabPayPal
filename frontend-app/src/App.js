import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import ProductoCreatePage from "./pages/Producto/create";
import ProductoPage from "./pages/Producto";
import Inicio from "./pages";
import Product from "./pages/product";
import Login from "./pages/Login";
import Carrito from "./pages/Carrito";
import UsuarioPage from "./pages/usuario";
import UsuarioList from "./pages/admin";
import PaginaMedia from "./pages/paginaMedia";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/producto/:productId" element={<Product />} />
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin/producto/create" element={<ProductoCreatePage />} />
        <Route path="/admin/usuario/create" element={<UsuarioPage />} />
        <Route path="/admin/usuarios" element={<UsuarioList />} />
        <Route path="/admin/paginamedia" element={<PaginaMedia />} />
        <Route
          path="/admin/producto/edit/:productId"
          element={<ProductoCreatePage />}
        />
        <Route path="/admin/productos" element={<ProductoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
