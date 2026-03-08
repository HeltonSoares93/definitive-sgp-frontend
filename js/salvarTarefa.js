function salvarTarefa() {

  const tituloTarefa = document.getElementById('titulo-tarefa').value.trim();
  const descricaoTarefa = document.getElementById('descricao-tarefa').value.trim();
  const inicioTarefa = document.getElementById('inicio-tarefa').value.trim();
  const prazoTarefa = document.getElementById('prazo-tarefa').value.trim();
  const statusTarefa = document.getElementById('status-tarefa').value.trim();
  const prioridadeTarefa = document.getElementById('prioridade-tarefa').value.trim();

  if (!tituloTarefa) {
    alert("O título não pode ficar vazio, tente novamente.");
    return;
  }

  const tarefa = {
    id: Date.now(),
    titulo: tituloTarefa,
    descricao: descricaoTarefa,
    dataInicio: inicioTarefa,
    prazo: prazoTarefa,
    status: statusTarefa,
    prioridade: prioridadeTarefa
  }

  const { id, titulo, descricao, dataInicio, prazo, status, prioridade } = tarefa;

  let tarefasBancoDados = JSON.parse(localStorage.getItem('tarefasBancoDados')) || [];

  tarefasBancoDados.push(tarefa);

  localStorage.setItem('tarefasBancoDados', JSON.stringify(tarefasBancoDados));

  renderizarTabelaTarefas();


  console.log(`${titulo} criada em ${dataInicio} salva com sucesso.`)

}

function renderizarTabelaTarefas() {

  const tabela = document.getElementById('tabela-tarefas');

  if (!tabela) return;

  const tarefas = JSON.parse(localStorage.getItem('tarefasBancoDados')) || [];

  tabela.innerHTML = '';

  tarefas.forEach(t => {
    tabela.innerHTML += `
    <tr>
      <th scope="row">${t.id}</th>
      <td>${t.titulo}</td>
      <td>${t.prioridade}</td>
      <td>${''}</td>
      <td>${''}</td>
      <td>${t.dataInicio}</td>
      <td>${t.prazo}</td>
      <td>${t.status}</td>
      </tr>
    `
  });
}