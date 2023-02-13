<?php


// Recebe os dados do formulário
$username = $_POST['username'];
$comment = $_POST['comment'];
$image = $_FILES['profile-picture'];

// Verifica se o arquivo foi enviado corretamente
if ($image['error'] == 0) {
  // Salva o arquivo na pasta desejada
  move_uploaded_file($image['tmp_name'], 'icons/' . $image['name']);
} else {
  // Usa o ícone padrão
  $image['name'] = 'padrao.png';
}

// Adiciona o comentário ao arquivo de comentários
$line = "$image[name] $username $comment\n";
file_put_contents("comments.txt", $line, FILE_APPEND);

// Redireciona para a página inicial
header('Location: index.php');



// // Verifica se o formulário foi enviado
// if (isset($_POST["username"]) && isset($_POST["comment"])) {

//   $icon = $_POST['profile-icon'];
//   $username = $_POST['username'];
//   $comment = $_POST['comment'];
//   // Salvar comentário em um arquivo
//   // ...


//   // Lê o arquivo de comentários
//   $comments = file_get_contents("comments.txt");

//   // Adiciona o novo comentário ao final do arquivo
//   $comments .= $_POST["profile-icon"] . " " . $_POST["username"] . " " . $_POST["comment"] . "\n";

//   // Salva o arquivo de comentários
//   file_put_contents("comments.txt", $comments);
// }
?>
