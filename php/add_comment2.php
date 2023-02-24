<?php
// Verifica se o formulário foi enviado
if (isset($_POST["username2"]) && isset($_POST["comment2"])) {

  $icon2 = $_POST['icon2'];
  $username2 = $_POST['username2'];
  $comment2 = $_POST['comment2'];
  // Salvar comentário em um arquivo

  // Lê o arquivo de comentários
  $comments2 = file_get_contents("../Recursos/assets/comments/comments2.txt");

  // Adiciona o novo comentário ao final do arquivo
  $comments2 .= $_POST["icon2"] . " " . $_POST["username2"] . " " . $_POST["comment2"] . "\n";

  // Salva o arquivo de comentários
  file_put_contents("../Recursos/assets/comments/comments2.txt", $comments2);
}

?>

