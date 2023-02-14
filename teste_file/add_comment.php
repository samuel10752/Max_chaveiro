<?php
// Recebe os dados do formulário
$username = $_POST['username'];
$comment = $_POST['comment'];
$image = $_FILES['profile-picture'];

// Verifica se o usuário enviou uma imagem
if (isset($_FILES['profile-picture']) && $_FILES['profile- picture']['error'] == 0) {
  // Define o nome do arquivo como o ID único da imagem
  $filename = uniqid() . ".png";
  // Move a imagem para a pasta "profile_pictures"
  move_uploaded_file($_FILES['profile-picture']['tmp_name'], "profile_pictures/$filename");
  // Define a URL da imagem
  $icon = "profile_pictures/$filename";
} else {
  // Caso contrário, use a imagem padrão
  $icon = "padrao.png";
}

// Adiciona o comentário ao arquivo de comentários
$line = "$icon $username $comment\n";
file_put_contents("comments.txt", $line, FILE_APPEND);

// Redireciona para a página inicial
header('Location: index.php');
?>
