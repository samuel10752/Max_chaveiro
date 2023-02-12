<!-- <?php
// Verifica se o formulário foi enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Lê o conteúdo do arquivo de comentários
  $comments = file_get_contents("comments.txt");

  // Adiciona o novo comentário ao final do arquivo
  $comments .= $_POST["comment"] . "\n";

  // Salva o arquivo de comentários
  file_put_contents("comments.txt", $comments);
}

// Redireciona de volta para a página principal
header("Location: index.php");
?> -->

