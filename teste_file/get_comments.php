<?php
// Obtém todas as linhas do arquivo de comentários
$lines = file("comments.txt");

// Loop pelas linhas do arquivo
foreach ($lines as $line) {
  // Divide a linha em partes
  list($icon, $username, $comment) = explode(" ", $line, 3);
  
  // Exibe o comentário na tela
  echo "
    <div class='comment'>
      <div class='comment-header'>
        <img src='$icon' alt=''>
        <h3>$username</h3>
      </div>
      <p>$comment</p>
    </div>
  ";
}
?>
