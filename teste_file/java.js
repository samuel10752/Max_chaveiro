// Atualizar imagem de perfil
function updateProfilePicture(icon) {
  document.getElementById("profile-icon").src = "icons/" + icon + ".png";
}

// Mostrar/esconder formulário ao clicar no ícone de like
document.querySelector('.like-icon').addEventListener('click', function() {
  document.querySelector('form').style.display = 
    document.querySelector('form').style.display === 'none' ? 'block' : 'none';
});

// Função para carregar os comentários
function loadComments() {
  // Faz uma requisição GET para o arquivo PHP que retorna os comentários
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "get_comments.php", true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Insere os comentários na página
      document.getElementById("comments").innerHTML = xhr.responseText;
    }
  };
  xhr.send();
}

// Carrega os comentários assim que a página é carregada
window.onload = function() {
  loadComments();
};

// Adicionar comentário
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Recuperar dados do formulário
  var username = document.querySelector('input[name="username"]').value;
  var comment = document.querySelector('textarea[name="comment"]').value;
  var icon = document.querySelector('#profile-icon').value;

  // Enviar dados para o servidor via requisição POST
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "add_comment.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Atualizar a lista de comentários na página
      loadComments();
    }
  };
  xhr.send("comment=" + encodeURIComponent(comment) + "&username=" + encodeURIComponent(username) + "&icon=" + encodeURIComponent(icon));
});
