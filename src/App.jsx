import { useState } from "react";
import "./index.css";
import FormularioTarefa from "./components/FormularioTarefa";
import ListaTarefas from "./components/ListaTarefas";
import Filtros from "./components/Filtros";

function App() {
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa(novaTarefa) {
    setTarefas((tarefasAtuais) => [
      ...tarefasAtuais,
      novaTarefa,
    ]);
  }

  return (
    <main>
      <h1>Lista de Tarefas do Programador</h1>

      <FormularioTarefa onAdicionarTarefa={adicionarTarefa} />

      <Filtros />

      <ListaTarefas />
    </main>
  );
}

export default App;