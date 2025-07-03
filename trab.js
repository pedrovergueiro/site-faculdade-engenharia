const botao = document.getElementById("meuBotao"); // ID atualizado
const modal = document.getElementById("mensagemModal");
const fechar = document.querySelector(".fechar");

// Som leve ao abrir o modal
const audio = new Audio("https://assets.mixkit.co/sfx/download/mixkit-bell-notification-933.wav");

botao.addEventListener("click", function () {
  modal.style.display = "block";
  audio.play();
});

fechar.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

