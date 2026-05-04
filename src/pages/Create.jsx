<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { createProduto } from "../services/api";
=======
import Form from "../components/Form";
import { createProduto } from "../services/api";
import { useNavigate } from "react-router-dom";
>>>>>>> afea21ab519f41e4acf856e9bab0594681d43938

export default function Create() {
  const navigate = useNavigate();

<<<<<<< HEAD
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
=======
  const handleSubmit = async (form) => {
    await createProduto(form);
    alert("Criado com sucesso");
    navigate("/list");
  };

  return (
    <div>
      <h2>Novo Produto</h2>
      <Form onSubmit={handleSubmit} />
>>>>>>> afea21ab519f41e4acf856e9bab0594681d43938
    </div>
  );
}