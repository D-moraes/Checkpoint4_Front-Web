
import Tarefa from "./Tarefa";

function ListaTarefas( {
  tarefas,
  filtro,
  onConcluirTarefa,
  onRemoverTarefa,
}) {
  
  // MÉTODO DE ARRAY: filter cria um novo array somente com as tarefas 
  // que atendem à condição do filtro selecionado.
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
        // MÉTODO DE ARRAY: map percorre as tarefas filtradas 
        // e cria um componente Tarefa para cada item do array.
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