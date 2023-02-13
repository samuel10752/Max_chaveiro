<?php
// Verifica se o formulário foi enviado
if (isset($_POST["username"]) && isset($_POST["comment"])) {

  $icon = $_POST['icon'];
  $username = $_POST['username'];
  $comment = $_POST['comment'];
  // Salvar comentário em um arquivo
  // ...


  // Lê o arquivo de comentários
  $comments = file_get_contents("comments.txt");

  // Adiciona o novo comentário ao final do arquivo
  $comments .= $_POST["icon"] . " " . $_POST["username"] . " " . $_POST["comment"] . "\n";

  // Salva o arquivo de comentários
  file_put_contents("comments.txt", $comments);
}
?>
