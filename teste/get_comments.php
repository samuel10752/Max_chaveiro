<?php
// Lê o arquivo de comentários
$comments = file_get_contents("comments.txt");

// Converte cada linha em um item de lista
$comments = explode("\n", $comments);
// Imprime os comentários
echo "<ul>";
foreach ($comments as $comment) {
  echo "<li>" . htmlspecialchars($comment) . "</li>";
}
echo "</ul>";
?>
