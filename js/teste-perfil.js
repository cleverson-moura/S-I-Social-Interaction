function abrirModalEdicao() {
  const modalEdicao = document.getElementById("modal-edicao");
  modalEdicao.style.display = "block";
}

function fecharModalEdicao() {
  const modalEdicao = document.getElementById("modal-edicao");
  modalEdicao.style.display = "none";
}

function salvarEdicao() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const novaCidade = document.getElementById("novaCidade").value;

  console.log("Alterações salvas:");
  console.log("Novo Nome: ", nome);
  console.log("Novo Email: ", email);

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Nova Cidade: ", novaCidade);
      console.log("Latitude: ", position.coords.latitude);
      console.log("Longitude: ", position.coords.longitude);
    });
  } else {
    console.error("Geolocalização não suportada pelo navegador.");
  }

  fecharModalEdicao();
}

function compartilharPostagem(nomeUsuario) {
  alert("Postagem compartilhada por: " + nomeUsuario);
  // Adicione aqui a lógica para compartilhar a postagem, se necessário
}

function likePost(postElement) {
  alert("Liked!");
}

function commentOnPost(postElement) {
  const comentariosSection = postElement.querySelector(".comentarios");
  comentariosSection.classList.toggle("visible");
}

function enviarComentario(postElement) {
  const inputComentario = postElement.querySelector(".comentario input");
  const comentario = inputComentario.value;

  if (comentario.trim() !== "") {
    const comentariosSection = postElement.querySelector(".comentarios");
    const novoComentario = document.createElement("div");
    novoComentario.className = "comentario";
    novoComentario.textContent = "Novo Usuário: " + comentario;
    comentariosSection.appendChild(novoComentario);

    // Limpar o campo de input após enviar o comentário
    inputComentario.value = "";
  }
}

function sharePost(postElement, nomeUsuario) {
  alert("Post shared by: " + nomeUsuario);
  // Adicione aqui a lógica para compartilhar a postagem, se necessário
}

document.addEventListener("DOMContentLoaded", function () {
  const likeButtons = document.querySelectorAll(".acoes-postagem .like-button");
  const commentButtons = document.querySelectorAll(
    ".acoes-postagem .comment-button"
  );
  const shareButtons = document.querySelectorAll(
    ".acoes-postagem .share-button"
  );

  likeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      likePost(button.closest(".postagem-usuario"));
    });
  });

  commentButtons.forEach((button) => {
    button.addEventListener("click", function () {
      commentOnPost(button.closest(".postagem-usuario"));
    });
  });

  shareButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const nomeUsuario = button
        .closest(".info-usuario")
        .querySelector("p").textContent;
      sharePost(button.closest(".postagem-usuario"), nomeUsuario);
    });
  });
});

function enviarComentario(postElement) {
  const inputComentario = postElement.querySelector(".comentario input");
  const comentario = inputComentario.value;

  if (comentario.trim() !== "") {
    const comentariosSection = postElement.querySelector(".comentarios");
    const novoComentario = document.createElement("div");
    novoComentario.className = "comentario";
    const username = postElement.querySelector(".info-usuario p").textContent;
    novoComentario.textContent = `${username}: ${comentario}`;
    comentariosSection.appendChild(novoComentario);

    // Limpar o campo de input após enviar o comentário
    inputComentario.value = "";
  }
}

function enviarComentario(postElement) {
  const inputComentario = postElement.querySelector(".comentario input");
  const comentario = inputComentario.value;

  if (comentario.trim() !== "") {
    const comentariosSection = postElement.querySelector(".comentarios");
    const novoComentario = document.createElement("div");
    novoComentario.className = "comentario";
    const username = postElement.querySelector(".info-usuario p").textContent;
    const userAvatarSrc = postElement.querySelector(".info-usuario img").src;
    novoComentario.innerHTML = `<img src="${userAvatarSrc}" alt="Avatar">${username}: ${comentario}`;
    comentariosSection.appendChild(novoComentario);

    // Limpar o campo de input após enviar o comentário
    inputComentario.value = "";
  }
}

function enviarComentario(postElement) {
  const inputComentario = postElement.querySelector(".comentario input");
  const comentario = inputComentario.value;

  if (comentario.trim() !== "") {
    const comentariosSection = postElement.querySelector(".comentarios");
    const novoComentario = document.createElement("div");
    novoComentario.className = "comentario";
    const username = postElement.querySelector(".info-usuario p").textContent;
    const userAvatarSrc = postElement.querySelector(".info-usuario img").src;

    const dataAtual = new Date();
    const dataFormatada = `${dataAtual.toLocaleDateString()} ${dataAtual.toLocaleTimeString()}`;

    novoComentario.innerHTML = `
                    <time>${dataFormatada}</time>
                    <img src="${userAvatarSrc}" alt="Avatar">
                    ${username}: ${comentario}
                `;
    comentariosSection.appendChild(novoComentario);

    // Limpar o campo de input após enviar o comentário
    inputComentario.value = "";

    notificarNovidade();
  }
}
