import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProdutos, updateProduto } from "../services/api";
import Form from "../components/Form";

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    async function carregar() {
      const lista = await getProdutos();
const data = lista.find(p => String(p.id) === String(id));
      setProduto(data);
    }
    carregar();
  }, [id]);

  async function handleUpdate(dados) {
    try {
      await updateProduto(id, dados);
      alert("Atualizado!");
      navigate("/produtos");
    } catch {
      alert("Erro ao atualizar");
    }
  }

  if (!produto) return <p>Carregando...</p>;

  return (
    <div>
      <h2>Editar Produto</h2>
      <Form onSubmit={handleUpdate} initialData={produto} />
    </div>
  );
}