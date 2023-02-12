<?php
// Verifica se o formulário foi enviado
if (isset($_POST["username"]) && isset($_POST["comment"])) {
  // Lê o arquivo de comentários
  $comments = file_get_contents("comments.txt");

  // Adiciona o novo comentário ao final do arquivo
  $comments .= $_POST["username"] . " " . $_POST["icon"] . " " . $_POST["comment"] . "\n";

  // Salva o arquivo de comentários
  file_put_contents("comments.txt", $comments);
}

// Lê o arquivo de comentários
$comments = file_get_contents("comments.txt");

// Converte cada linha em um item de lista
$comments = explode("\n", $comments);

// Imprime os comentários
echo "<ul>";
foreach ($comments as $comment) {
  // Verifica se a linha tem pelo menos três elementos
  $parts = explode(" ", $comment);
  if (count($parts) >= 3) {
    // Separa o nome do usuário, o ícone e o comentário em variáveis distintas
    list($username, $icon, $comment) = $parts;
    echo "<li><img src='icons/" . htmlspecialchars($icon) . ".png'> " . htmlspecialchars($username) . ": " . htmlspecialchars($comment) . "</li>";
  }
}
echo "</ul>";
?>