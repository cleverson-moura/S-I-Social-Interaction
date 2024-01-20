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

const senhar = document.querySelector(".senhar");
const btnr = document.querySelector(".btnr");

btnr.onclick = () => {
  if (senhar.type == "password") {
    senhar.type = "text";
    btnr.src = "desvisualizar.png";
  } else {
    senhar.type = "password";
    btnr.src = "visualizar.png";
  }
};
