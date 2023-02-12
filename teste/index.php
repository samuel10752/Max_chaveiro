<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

<div class="container">
  <div class="like-icon">
    <i class="fa fa-comment-o" aria-hidden="true"></i><img src="imagem.png" alt="">
  </div>
  <form action="add_comment.php" method="post">
    <div id="comments">
      <!-- Comentários serão carregados aqui -->
    </div>
    <div id="profile-picture">
      <img src="icons/padrao.png" alt="" id="profile-icon">
    </div>
    <select name="icon" id="icon-select" onchange="updateProfilePicture(this.value)">
      <option value="padrao">Padrão</option>
      <option value="f">F</option>
      <option value="m">M</option>
    </select>
    <input type="text" name="username" placeholder="Seu nome" required>
    <textarea name="comment" required></textarea>
    <input type="submit" value="Adicionar comentário">
  </form>
</div>


<script>
  function updateProfilePicture(icon) {
    // Atualiza a imagem de perfil com base na seleção do usuário
    document.getElementById("profile-icon").src = "icons/" + icon + ".png";
  }
</script>

<!-- Código JavaScript -->

<script>
  document.querySelector('.like-icon').addEventListener('click', function() {
    document.querySelector('form').style.display = 
      document.querySelector('form').style.display === 'none' ? 'block' : 'none';
  });

   function updateProfilePicture(icon) {
    document.getElementById('profile-icon').src = 'icons/' + icon + '.png';
  }

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
</script>




<style>

  #icon-select{
    margin-top: 15px;
  }

  #profile-picture {
  float: left;
  margin-right: 10px;
}

#profile-picture img {
  width: 50px;
  height: 50px;
  border-radius: 25px;
}


  form {
    background-color: #f2f2f2;
    border-radius: 10px;
    padding: 20px;
    position: fixed;
    bottom: 100;
    right: 1470px;
    left: 0;
    width: 300px;
    margin: auto;
    box-shadow: 0px 0px 10px #ccc;
    display: none;
  }

  input[type="text"] {
    width: 100%;
    padding: 10px;
    font-family: Arial, sans-serif;
    font-size: 14px;
    border-radius: 4px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    resize: none;
    margin-top: 10px;
  }

  textarea {
    width: 100%;
    padding: 10px;
    font-family: Arial, sans-serif;
    font-size: 14px;
    border-radius: 10px;
    border: 1px solid #ccc;
    box-sizing: border-box;
    resize: none;
    margin-top: 10px;
  }

  input[type="submit"] {
    background-color: #4CAF50;
    color: white;
    padding: 15px 90px;
    border: none;
    border-radius: 4px;
    margin-right: 0px;
    cursor: pointer;
    float: right;
    margin-top: 10px;
  }

  #comments {
    margin-top: 20px;
  }
</style>


</body>
</html>