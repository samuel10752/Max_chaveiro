<?php
// Verifica se o formulário foi enviado
if (isset($_POST["username3"]) && isset($_POST["comment3"])) {

  $icon3 = $_POST['icon3'];
  $username3 = $_POST['username3'];
  $comment3 = $_POST['comment3'];
  // Salvar comentário em um arquivo

  // Lê o arquivo de comentários
  $comments3 = file_get_contents("../Recursos/assets/comments/comments3.txt");

  // Adiciona o novo comentário ao final do arquivo
  $comments3 .= $_POST["icon3"] . " " . $_POST["username3"] . " " . $_POST["comment3"] . "\n";

  // Salva o arquivo de comentários
  file_put_contents("../Recursos/assets/comments/comments3.txt", $comments3);
}

?>

