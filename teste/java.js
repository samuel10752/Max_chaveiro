const likeButton = document.getElementById("likeButton");

likeButton.addEventListener("click", function() {
  // Enviando solicitação para o servidor
  fetch("like.php")
    .then(response => response.text())
    .then(likes => {
      likeButton.innerHTML = `
        <i class="fa fa-thumbs-up"></i>
        Like (${likes})
      `;
    });
});

// Carregando número de likes ao carregar a página
window.addEventListener("load", function() {
  fetch("like.php")
    .then(response => response.text())
    .then(likes => {
      likeButton.innerHTML = `
        <i class="fa fa-thumbs-up"></i>
        Like (${likes})
      `;
    });
});
