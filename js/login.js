const senha = document.querySelector(".senha");
const btn = document.querySelector(".btn");

btn.onclick = () => {
  if (senha.type == "password") {
    senha.type = "text";
    btn.src = "desvisualizar.png";
  } else {
    senha.type = "password";
    btn.src = "visualizar.png";
  }
};
