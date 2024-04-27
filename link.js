const linkHome = document.getElementById("linkHome");
const linkServicos = document.getElementById("linkServicos");
const linkSobre = document.getElementById("linkSobre");

linkHome.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "http://127.0.0.1:64240/index.html";
});

linkServicos.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "http://127.0.0.1:64240/servico.html";
});
