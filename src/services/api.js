const URL = "http://localhost:3000/produtos";

export async function getProdutos() {
  const res = await fetch(URL);
  if (!res.ok) throw new Error("Erro ao buscar");
  return res.json();
}

export async function createProduto(dados) {
  const res = await fetch(URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  });
  if (!res.ok) throw new Error("Erro ao criar");
  return res.json();
}

export async function updateProduto(id, dados) {
  const res = await fetch(`${URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  });
  if (!res.ok) throw new Error("Erro ao atualizar");
  return res.json();
}

export async function deleteProduto(id) {
  const res = await fetch(`${URL}/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Erro ao deletar");
}