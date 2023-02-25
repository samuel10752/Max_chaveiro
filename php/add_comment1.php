<?php
// Verifica se o formulário foi enviado
if (isset($_POST["username1"]) && isset($_POST["comment1"])) {

  $icon1 = $_POST['icon1'];
  $username1 = $_POST['username1'];
  $comment1 = $_POST['comment1'];
  // Salvar comentário em um arquivo

  // Lê o arquivo de comentários
  $comments1 = file_get_contents("../Recursos/assets/comments/comments1.txt");

  // Adiciona o novo comentário ao final do arquivo
  $comments1 .= $_POST["icon1"] . " " . $_POST["username1"] . " " . $_POST["comment1"] . "\n";

  // Salva o arquivo de comentários
  file_put_contents("../Recursos/assets/comments/comments1.txt", $comments1);
}

?>

