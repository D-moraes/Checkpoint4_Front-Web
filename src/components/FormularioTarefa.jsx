import { useState } from "react";
function FormularioTarefa({ onAdicionarTarefa }) {
  const [nome, setNome] = useState("");
  const [data, setData] = useState("");
  const [descricao, setDescricao] = useState("");
  const [prioridade, setPrioridade] = useState("");
  const [erro, setErro] = useState("");
  
  function handleSubmit(evento) {
  evento.preventDefault();

  if (!nome || !data || !descricao || !prioridade) {
    setErro("Preencha todos os campos da tarefa.");
    return;
  }

  setErro("");

  const novaTarefa = {
    id: Date.now(),
    nome,
    data,
    descricao,
    prioridade,
    concluida: false,
  };

  onAdicionarTarefa(novaTarefa);

  setNome("");
  setData("");
  setDescricao("");
  setPrioridade("");
}

  return (
    <section>
      <h2>Nova Tarefa</h2>

      <form onSubmit={handleSubmit}>
        {erro && <p>{erro}</p>}
        
        <div>
          <label htmlFor="nome">Nome da tarefa</label>
          <input
          id = "nome"
          type = "text"
          value = {nome}
          onChange = {(evento) => setNome(evento.target.value)}
          />
        </div>

        <div>
          <label htmlFor="data">Data</label>
          <input
          id = "data"
          type = "date"
          value = {data}
          onChange = {(evento) => setData(evento.target.value)}
          />
        </div>

        <div>
          <label htmlFor="descricao">Descrição</label>
          <textarea
          id = "descricao"
          value = {descricao}
          onChange = {(evento) => setDescricao(evento.target.value)}
          />
        </div>

        <div>
          <label htmlFor="prioridade">Nível de prioridade</label>
          <select
          id = "prioridade"
          value = {prioridade}
          onChange = {(evento) => setPrioridade(evento.target.value)}
          >
            <option value="">Selecione uma prioridade</option>
            <option value="Baixa">Baixa</option>
            <option value="Média">Média</option>
            <option value="Alta">Alta</option>
          </select>
        </div>
        <button type="submit">Adicionar Tarefa</button>
      </form>
    </section>
  );
}

export default FormularioTarefa;