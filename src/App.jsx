import "./index.css";
import FormularioTarefa from "./components/FormularioTarefa";
import ListaTarefas from "./components/ListaTarefas";
import Filtros from "./components/Filtros";

function App() {
  return (
    <main>
      <h1>Lista de Tarefas do Programador</h1>

      <FormularioTarefa />

      <Filtros />

      <ListaTarefas />
    </main>
  );
}

export default App;