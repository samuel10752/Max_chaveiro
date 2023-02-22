<?php
// Lê o arquivo de comentários
$comments = file_get_contents("../Recursos/assets/comments/comments1.txt");

// Converte cada linha em um item de lista
$comments = explode("\n", $comments);

// Imprime os comentários

echo "<ul>";
foreach ($comments as $comment) {
  // Verifica se a linha tem pelo menos três elementos
  $parts = explode(" ", $comment);
  if (count($parts) >= 3) {
    // Separa o ícone, nome do usuário e o comentário em variáveis distintas
    list($icon, $username, $first_word) = $parts;
    $rest_of_comment = implode(" ", array_slice($parts, 3)); // Junta todas as palavras restantes do comentário
    echo "<img src='Recursos/assets/icon/icon_card_noticias/" . htmlspecialchars($icon) . ".png'  style='max-width: 30px; margin-right: 30px;'> <strong>" . htmlspecialchars($username) . "</strong>:<br>" . htmlspecialchars($first_word . " " . $rest_of_comment) . "<br><br>";
  }
}
echo "</ul>";

?>