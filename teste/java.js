function updateProfilePicture(icon) {
    document.getElementById("profile-icon").src = "icons/" + icon + ".png";
  }

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



   // salvar o comentario

   document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "add_comment.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        loadComments();
      }
    };
    var comment = document.querySelector('textarea[name="comment"]').value;
    var username = document.querySelector('input[name="username"]').value;
    var icon = document.querySelector('select[name="icon"]').value;
    xhr.send("comment=" + encodeURIComponent(comment) + "&username=" + encodeURIComponent(username) + "&icon=" + encodeURIComponent(icon));
  });


   // Adicionar comentário com o ícone selecionado
   document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Recuperar dados do formulário
    var username = document.querySelector('input[name="username"]').value;
    var comment = document.querySelector('textarea[name="comment"]').value;
    var icon = document.querySelector('#icon-select').value;

    // Criar elemento HTML para o comentário
    var commentElement = document.createElement('div');
    commentElement.innerHTML = '<img src="icons/' + icon + '.png" alt="">' + username + ': ' + comment;

    // Adicionar o comentário ao div de comentários
    document.getElementById('comments').appendChild(commentElement);

    // Limpar o formulário
    document.querySelector('input[name="username"]').value = '';
    document.querySelector('textarea[name="comment"]').value = '';
  });