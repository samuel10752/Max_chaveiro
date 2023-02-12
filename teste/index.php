<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>


<form action="add_comment.php" method="post" style="display: none;">
<div id="comments">
  <!-- Comentários serão carregados aqui -->
</div>
  <textarea name="comment" required></textarea>
  <input type="submit" value="Adicionar comentário">

</form>


<img src="imagem.png" class="like-icon">


<script>
  document.querySelector('.like-icon').addEventListener('click', function() {
    document.querySelector('form').style.display = 
      document.querySelector('form').style.display === 'none' ? 'block' : 'none';
  });

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
    xhr.send("comment=" + encodeURIComponent(document.querySelector('textarea[name="comment"]').value));
  });

  // Carrega os comentários ao carregar a página
  window.onload = function() {
    loadComments();
  };

  // Função para carregar os comentários
  function loadComments() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "get_comments.php", true);
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        document.getElementById("comments").innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  }
</script>


<style>
  form {
    background-color: #f2f2f2;
    border-radius: 10px;
    padding: 20px;
    position: fixed;
    bottom: 100;
    right: 1250px;
    left: 0;
    width: 500px;
    margin: auto;
    box-shadow: 0px 0px 10px #ccc;
    display: none;
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
    padding: 15px 190px;
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