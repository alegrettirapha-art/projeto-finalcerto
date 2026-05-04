import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "10px", background: "#333" }}>
      <Link to="/" style={{ color: "#fff" }}>Home</Link>
      <Link to="/produtos" style={{ color: "#fff" }}>Produtos</Link>
      <Link to="/criar" style={{ color: "#fff" }}>Cadastrar</Link>
    </nav>
  );
}