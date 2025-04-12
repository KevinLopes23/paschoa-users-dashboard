const apiBase = "http://localhost:5234/api/users";

async function carregarUsuarios() {
  const res = await fetch(apiBase);
  const usuarios = await res.json();
  const tbody = document.getElementById("tabelaUsuarios");
  tbody.innerHTML = "";

  usuarios.forEach((u) => {
    tbody.innerHTML += `
      <tr>
        <td>${u.id}</td>
        <td><img src="${u.fotoUrl}" /></td>
        <td>${u.nome}</td>
        <td>${u.email}</td>
        <td>${u.genero}</td>
        <td>${u.cidade}</td>
        <td>
          <button class="edit" onclick='abrirModal(${JSON.stringify(
            u
          )})'><i class="fas fa-pencil-alt"></i></button>
          <button class="delete" onclick="deletarUsuario(${
            u.id
          })"><i class="fas fa-trash-alt"></i></button>
        </td>
      </tr>
    `;
  });
}

async function criarUsuario() {
  await fetch(`${apiBase}/random`, { method: "POST" });
  carregarUsuarios();
}

async function deletarUsuario(id) {
  await fetch(`${apiBase}/${id}`, { method: "DELETE" });
  carregarUsuarios();
}

function abrirModal(user) {
  document.getElementById("editModal").style.display = "flex";
  document.getElementById("editId").value = user.id;
  document.getElementById("editNome").value = user.nome;
  document.getElementById("editEmail").value = user.email;
  document.getElementById("editGenero").value = user.genero;
  document.getElementById("editCidade").value = user.cidade;
  document.getElementById("editFotoUrl").value = user.fotoUrl;
  document.getElementById("editAvatar").src = user.fotoUrl;
}

function fecharModal() {
  document.getElementById("editModal").style.display = "none";
}

async function salvarEdicao() {
  const id = document.getElementById("editId").value;
  const user = {
    id: parseInt(id),
    nome: document.getElementById("editNome").value,
    email: document.getElementById("editEmail").value,
    genero: document.getElementById("editGenero").value,
    cidade: document.getElementById("editCidade").value,
    fotoUrl: document.getElementById("editFotoUrl").value,
  };

  await fetch(`${apiBase}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  fecharModal();
  carregarUsuarios();
}


carregarUsuarios();
