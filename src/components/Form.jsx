import { useState } from "react";

export default function Form({ onSubmit, initialData = {} }) {
  const [nome, setNome] = useState(initialData.nome || "");
  const [preco, setPreco] = useState(initialData.preco || "");
  const [estoque, setEstoque] = useState(initialData.estoque || "");
  const [categoria, setCategoria] = useState(initialData.categoria || "");

  function handleSubmit(e) {
    e.preventDefault();

    if (!nome || !preco || !estoque || !categoria) {
      alert("Preencha todos os campos");
      return;
    }

    onSubmit({ nome, preco, estoque, categoria });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
      <input placeholder="Preço" type="number" value={preco} onChange={(e) => setPreco(e.target.value)} />
      <input placeholder="Estoque" type="number" value={estoque} onChange={(e) => setEstoque(e.target.value)} />
      <input placeholder="Categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)} />

      <button type="submit">Salvar</button>
    </form>
  );
}