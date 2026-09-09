import { useState, useEffect } from "react";
import "./index.css";
import FormularioTarefa from "./components/FormularioTarefa";
import ListaTarefas from "./components/ListaTarefas";
import Filtros from "./components/Filtros";

function App() {
  // HOOK: useState cria e controla os estados do componente. 
  // "tarefas" armazena a lista de tarefas e "setTarefas" atualiza essa lista.
  const [tarefas, setTarefas] = useState(()=>{
    const tarefasSalvas = localStorage.getItem("tarefas");

    return tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
  });
  
  useEffect(()=> {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  // HOOK: useState também é utilizado para controlar qual filtro está selecionado.
  const [filtro, setFiltro] = useState("todas");

  function adicionarTarefa(novaTarefa) {
    // CALLBACK: a função passada para setTarefas recebe o estado atual 
    // e retorna uma nova lista contendo a tarefa adicionada.
    setTarefas((tarefasAtuais) => [
      ...tarefasAtuais,
      novaTarefa,
    ]);
  }

    function concluirTarefa(id) {
    // CALLBACK: a função passada para setTarefas recebe as tarefas atuais 
    // e atualiza a lista com base no ID da tarefa.
    setTarefas((tarefasAtuais) =>
    // MÉTODO DE ARRAY: map percorre todas as tarefas e cria um novo array. 
    // A tarefa correspondente ao ID recebido tem seu status alterado.
      tarefasAtuais.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa
      )
    );
  }

    function removerTarefa(id) {
    // CALLBACK: a função passada para setTarefas recebe o estado atual 
    // das tarefas e retorna a lista atualizada.
    setTarefas((tarefasAtuais) =>
      // MÉTODO DE ARRAY: filter cria um novo array contendo somente 
      // as tarefas cujo ID é diferente do ID que será removido.
      tarefasAtuais.filter((tarefa) => tarefa.id !== id)
    );
  }


  return (
    <main>
      <h1>Lista de Tarefas do Programador</h1>

      <FormularioTarefa onAdicionarTarefa={adicionarTarefa} />

      <Filtros
        filtroAtual={filtro}
        onAlterarFiltro={setFiltro}
      />

      <ListaTarefas
        tarefas={tarefas}
        filtro={filtro}
        onConcluirTarefa={concluirTarefa}
        onRemoverTarefa={removerTarefa}
      />
    </main>
  );
}

export default App;