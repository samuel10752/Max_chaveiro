<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css.css">
    <title>Document</title>
</head>
<body>

<div class="container">
  <div class="like-icon">
    <i class="fa fa-comment-o" aria-hidden="true"></i><img src="imagem.png" alt="">
  </div>
  <form class="form" action="add_comment.php" method="post">
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
    <textarea name="comment" placeholder="Adicionar Comentario" required></textarea>
    <input type="submit" value="Adicionar comentário">
  </form>
</div>


<script src="java.js"></script>

</body>
</html>