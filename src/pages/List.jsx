import { useEffect, useState } from "react";

export default function List() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    carregar();
  }, []);

  async function carregar() {
    try {
      const res = await fetch("http://localhost:3000/questoes");

      if (!res.ok) {
        throw new Error("Erro ao buscar questões");
      }

      const data = await res.json();
      console.log("DADOS:", data);

      setDados(data);
    } catch (error) {
      console.error("Erro ao buscar:", error);
    }
  }

  return (
    <div className="container">
      <h2>Lista de Questões</h2>

      {dados.length === 0 && <p>Sem dados</p>}

      {Array.isArray(dados) &&
        dados.map((q) => (
          <div key={q.idq} style={{ border: "1px solid #ccc", margin: 10, padding: 10 }}>
            <p><b>ID Topico:</b> {q.topid}</p>
            <p><b>Enunciado:</b> {q.enunciado}</p>
            <p><b>Resposta:</b> {q.resposta}</p>
            <p><b>Link:</b> {q.linkbib}</p>
            <p><b>Data:</b> {q.dtpesq}</p>
          </div>
        ))}
    </div>
  );
}