function salvarUsuario() {
  // alert("Botão clicado!")

  const nomeUsuario = document.getElementById('nome-usuario').value.trim();
  const emailUsuario = document.getElementById('email-usuario').value.trim();
  const cpfUsuario = document.getElementById('cpf-usuario').value.trim();
  const nascimentoUsuario = document.getElementById('nascimento-usuario').value.trim();
  const statusUsuario = document.getElementById('status-usuario').value.trim();
  const senhaUsuario = document.getElementById('senha-usuario').value.trim();

  if (!nomeUsuario || !emailUsuario || !cpfUsuario || !nascimentoUsuario || !statusUsuario || !senhaUsuario) {
    alert("Todos os campos devem ser preenchidos.");
    return;
  }

  const usuario = {
    id: Date.now(),
    nome: nomeUsuario,
    email: emailUsuario,
    cpf: cpfUsuario,
    nascimento: nascimentoUsuario,
    status: statusUsuario,
    senha: senhaUsuario
  }

  const { nome, email, cpf, nascimento, status } = usuario;

  let usuariosBancoDados = JSON.parse(localStorage.getItem('usuariosBancoDados')) || [];

  usuariosBancoDados.push(usuario);

  localStorage.setItem('usuariosBancoDados', JSON.stringify(usuariosBancoDados));

  renderizarTabelaUsuarios();

  console.log(`${nome} foi salvo com sucesso!`)

}

function renderizarTabelaUsuarios() {

  const tabela = document.getElementById('tabela-usuarios');

  if (!tabela) {
    return;
  }

  // Array
  const usuarios = JSON.parse(localStorage.getItem('usuariosBancoDados')) || [];

  tabela.innerHTML = "";

  usuarios.forEach(u => {
    tabela.innerHTML += `
      <tr>
      <th scope="row">${u.id}</th>
      <td>${u.nome}</td>
      <td>${u.cpf}</td>
      <td>${u.email}</td>
      <td>${u.nascimento}</td>
      <td>${u.status}</td>
      </tr>
    `
  });


}