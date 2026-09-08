
import Tarefa from "./Tarefa";


function ListaTarefas( {
  tarefas,
  filtro,
  onConcluirTarefa,
  onRemoverTarefa,
}) {
  // filter() cria uma nova lista contendo apenas as tarefas
  // que correspondem ao filtro selecionado pelo usuário.
  const tarefasFiltradas = tarefas.filter((tarefa) => {
    if (filtro === "pendentes") {
      return !tarefa.concluida;
    }

    if (filtro === "concluidas") {
      return tarefa.concluida;
    }

    return true;
  });


  return (
    <>
     <section>
      <h2>Minhas Tarefas</h2>

      {tarefasFiltradas.length === 0 ? (
        <p>Nenhuma tarefa encontrada.</p>
      ) : (
        // map() percorre a lista filtrada e cria um componente
        // Tarefa para cada tarefa existente.
        tarefasFiltradas.map((tarefa) => (
          <Tarefa
            key={tarefa.id}
            tarefa={tarefa}
            onConcluirTarefa={onConcluirTarefa}
            onRemoverTarefa={onRemoverTarefa}
          />
        ))
      )}
    </section>
    </>
  );
}

export default ListaTarefas;