import { Link } from "react-router-dom";

export default function Card({ produto, onDelete }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: 10, marginBottom: 10 }}>
      <h3>{produto.nome}</h3>
      <p>Preço: R$ {produto.preco}</p>
      <p>Estoque: {produto.estoque}</p>
      <p>Categoria: {produto.categoria}</p>

      <Link to={`/editar/${produto.id}`}>
        <button>Editar</button>
      </Link>

      <button onClick={() => onDelete(produto.id)}>Excluir</button>
    </div>
  );
}