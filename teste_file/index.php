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
  <form action="add_comment.php" method="post" enctype="multipart/form-data">
    <div id="comments">
      <!-- Comentários serão carregados aqui -->
    </div>
    <div id="profile-picture">
      <img src="" alt="" id="profile-icon">
    </div>
    <input type="file" accept="profile_pictures/*" name="profile-picture" id="profile-picture-input">
    <input type="text" name="username" placeholder="Seu nome" required>
    <textarea name="comment" placeholder="Adicionar Comentario" required></textarea>
    <input type="submit" value="Adicionar comentário">
  </form>
</div>



<script>
  document.getElementById('profile-picture-input').addEventListener('change', function() {
    var reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('profile-icon').src = e.target.result;
    };
    reader.readAsDataURL(this.files[0]);
  });
</script>


</script>

<script src="java.js"></script>

</body>
</html>