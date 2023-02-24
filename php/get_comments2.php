<?php
// Lê o arquivo de comentários
$comments2 = file_get_contents("../Recursos/assets/comments/comments2.txt");

// Converte cada linha em um item de lista
$comments2 = explode("\n", $comments2);

// Imprime os comentários

echo "<ul>";
foreach ($comments2 as $comment2) {
  // Verifica se a linha tem pelo menos três elementos
  $parts2 = explode(" ", $comment2);
  if (count($parts2) >= 3) {
    // Separa o ícone, nome do usuário e o comentário em variáveis distintas
    list($icon2, $username2, $first_word2) = $parts2;
    $rest_of_comment2 = implode(" ", array_slice($parts2, 3)); // Junta todas as palavras restantes do comentário
    echo "<img src='Recursos/assets/icon/icon_card_noticias/" . htmlspecialchars($icon2) . ".png'  style='max-width: 30px; margin-right: 30px;'> <strong>" . htmlspecialchars($username2) . "</strong>:<br>" . htmlspecialchars($first_word2 . " " . $rest_of_comment2) . "<br><br>";
  }
}
echo "</ul>";
?>
