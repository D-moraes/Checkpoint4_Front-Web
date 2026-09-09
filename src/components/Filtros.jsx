
function Filtros({filtroAtual, onAlterarFiltro}) {
  return (
    <>
     <section>
      <h2>Filtrar tarefas</h2>

      <button
      // CALLBACK: a função será executada somente quando o botão
      // for clicado, alterando o filtro para "todas".
        onClick={() => onAlterarFiltro("todas")}
        disabled={filtroAtual === "todas"}
      >
        Todas
      </button>

      <button
      // CALLBACK: a função será executada quando o botão for clicado
      // e altera o filtro para mostrar somente tarefas pendentes.
        onClick={() => onAlterarFiltro("pendentes")}
        disabled={filtroAtual === "pendentes"}
      >
        Pendentes
      </button>

      <button
      // CALLBACK: a função será executada quando o botão for clicado
      // e altera o filtro para mostrar somente tarefas concluídas.
        onClick={() => onAlterarFiltro("concluidas")}
        disabled={filtroAtual === "concluidas"}
      >
        Concluídas
      </button>
    </section>
    </>
  );
}

export default Filtros;