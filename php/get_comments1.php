<?php
// Lê o arquivo de comentários
$comments1= file_get_contents("../Recursos/assets/comments/comments1.txt");

// Converte cada linha em um item de lista
$comments1 = explode("\n", $comments1);

// Imprime os comentários

echo "<ul>";
foreach ($comments1 as $comment1) {
  // Verifica se a linha tem pelo menos três elementos
  $parts1 = explode(" ", $comment1);
  if (count($parts1) >= 3) {
    // Separa o ícone, nome do usuário e o comentário em variáveis distintas
    list($icon1, $username1, $first_word1) = $parts1;
    $rest_of_comment1 = implode(" ", array_slice($parts1, 3)); // Junta todas as palavras restantes do comentário
    echo "<img src='Recursos/assets/icon/icon_card_noticias/" . htmlspecialchars($icon1) . ".png'  style='max-width: 30px; margin-right: 30px;'> <strong>" . htmlspecialchars($username1) . "</strong>:<br>" . htmlspecialchars($first_word1 . " " . $rest_of_comment1) . "<br><br>";
  }
}
echo "</ul>";

?>

