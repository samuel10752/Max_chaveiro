<?php
  // Conectar ao banco de dados
  // $servername = "localhost";
  // $username = "root";
  // $password = "";
  // $dbname = "like";

  // $conn = mysqli_connect($servername, $username, $password, $dbname);

  // Verificar se houve conexão
  if (!$conn) {
    die("Conexão falhou: " . mysqli_connect_error());
  }

  // Verificar se o formulário foi enviado
  if (isset($_POST["like_count"])) {
    $likeCount = intval($_POST["like_count"]);

    // Inserir a contagem de likes no banco de dados
    $sql = "INSERT INTO likes (like_count) VALUES ($likeCount)";

    if (mysqli_query($conn, $sql)) {
      echo "Contagem de likes salva com sucesso.";
    } else {
      echo "Erro ao salvar contagem de likes: " . mysqli_error($conn);
    }
  }
?>
