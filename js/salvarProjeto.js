function salvarProjeto() {

  const tituloProjeto = document.getElementById('titulo-projeto').value.trim();
  const responsavelProjeto = document.getElementById('responsavel-projeto').value.trim();
  const descricaoProjeto = document.getElementById('descricao-projeto').value.trim();
  const inicioProjeto = document.getElementById('inicio-projeto').value.trim();
  const prazoProjeto = document.getElementById('prazo-projeto').value.trim();
  const statusProjeto = document.getElementById('status-projeto').value.trim();
  // const prioridadeProjeto = document.getElementById('prioridade-projeto').value.trim();

  if (!tituloProjeto) {
    alert("O título não pode ficar vazio, tente novamente.");
    alert;
  }

  const projeto = {
    id: Date.now(),
    titulo: tituloProjeto,
    descricao: descricaoProjeto,
    dataInicio: inicioProjeto,
    prazo: prazoProjeto,
    status: statusProjeto,
    // prioridade: prioridadeProjeto,
    responsavel: responsavelProjeto
  }

  const { id, titulo, descricao, dataInicio, prazo, status, prioridade } = projeto;

  let projetosBancoDados = JSON.parse(localStorage.getItem('projetosBancoDados')) || [];

  projetosBancoDados.push(projeto);

  localStorage.setItem('projetosBancoDados', JSON.stringify(projetosBancoDados));

  renderizarTabelaProjetos();

}

function renderizarTabelaProjetos() {

  const tabela = document.getElementById('tabela-projetos');

  if (!tabela) return;

  const projetos = JSON.parse(localStorage.getItem('projetosBancoDados')) || [];

  tabela.innerHTML = '';

  projetos.forEach(p => {
    tabela.innerHTML += `
    <tr>
    <th scope="row">${p.id}</th>
      <th>${p.titulo}</th>
      <th>${p.descricao}</th>
      <th>${p.dataInicio}</th>
      <th>${p.prazo}</th>
      <th>${p.status}</th>
      <th>${p.responsavel}</th>
    </tr>
    `
  });
}