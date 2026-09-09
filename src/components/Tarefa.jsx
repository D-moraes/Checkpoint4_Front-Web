

function Tarefa({
  tarefa,
  onConcluirTarefa,
  onRemoverTarefa,
}) {
  return (
    <>
    <article>
      <h3>{tarefa.nome}</h3>

      <p>
        <strong>Data:</strong> {tarefa.data}
      </p>

      <p>
        <strong>Descrição:</strong> {tarefa.descricao}
      </p>

      <p>
        <strong>Prioridade:</strong> {tarefa.prioridade}
      </p>

      <p>
        <strong>Status:</strong>{" "}
        {tarefa.concluida ? "Concluída" : "Pendente"}
      </p>

      <button
      // CALLBACK: uma função é passada para o evento onClick. 
      // Ela será executada quando o botão for clicado.
        onClick={() => onConcluirTarefa(tarefa.id)}
      >
        {tarefa.concluida
          ? "Marcar como pendente"
          : "Marcar como concluída"}
      </button>

      <button
      // CALLBACK: a função será executada quando o botão for clicado
      // e chama onRemoverTarefa passando o ID da tarefa.
        onClick={() => onRemoverTarefa(tarefa.id)}
      >
        Remover
      </button>
    </article>
    </>
  );
}

export default Tarefa;