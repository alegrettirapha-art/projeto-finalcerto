import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { createProduto } from "../services/api";

export default function Create() {
  const navigate = useNavigate();

  async function handleCreate(dados) {
    try {
      await createProduto(dados);
      alert("Criado com sucesso!");
      navigate("/produtos");
    } catch {
      alert("Erro ao criar");
    }
  }

  return (
    <div>
      <h2>Cadastrar Produto</h2>
      <Form onSubmit={handleCreate} />
    </div>
  );
}