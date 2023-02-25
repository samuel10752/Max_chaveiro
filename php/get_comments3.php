<?php
// Lê o arquivo de comentários
$comments3 = file_get_contents("../Recursos/assets/comments/comments3.txt");

// Converte cada linha em um item de lista
$comments3 = explode("\n", $comments3);

// Imprime os comentários

echo "<ul>";
foreach ($comments3 as $comment3) {
  // Verifica se a linha tem pelo menos três elementos
  $parts3 = explode(" ", $comment3);
  if (count($parts3) >= 3) {
    // Separa o ícone, nome do usuário e o comentário em variáveis distintas
    list($icon3, $username3, $first_word3) = $parts3;
    $rest_of_comment3 = implode(" ", array_slice($parts3, 3)); // Junta todas as palavras restantes do comentário
    echo "<img src='Recursos/assets/icon/icon_card_noticias/" . htmlspecialchars($icon3) . ".png'  style='max-width: 30px; margin-right: 30px;'> <strong>" . htmlspecialchars($username3) . "</strong>:<br>" . htmlspecialchars($first_word3 . " " . $rest_of_comment3) . "<br><br>";
  }
}
echo "</ul>";
?>
