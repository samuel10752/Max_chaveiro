<ul>
  <?php
  // Lê o arquivo de comentários
  $comments = file_get_contents("comments.txt");
  // Converte cada linha em um item de lista
  $comments = explode("\n", $comments);

  foreach ($comments as $comment) {
    // Verifica se a linha tem pelo menos três elementos
    $parts = explode(" ", $comment);
    if (count($parts) >= 3) {
      // Separa o ícone, nome do usuário e o comentário em variáveis distintas
      list($icon, $username, $comment) = $parts;
      echo "<img src='data:image" . htmlspecialchars($icon) . "'>  <strong>" . htmlspecialchars($username) . " </strong>: " . htmlspecialchars($comment) . "<br>";
    }
  }
  ?>
</ul>
