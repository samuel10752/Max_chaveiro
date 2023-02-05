<?php

// Conectando ao banco de dados
$conn = new mysqli("localhost:3306", "root", "M0n0br@c0.", "likes");

if ($conn->connect_error) {
  die("Falha na conexão: " . $conn->connect_error);
}

// Verificando se a tabela já existe
$result = $conn->query("SHOW TABLES LIKE 'likes'");
if ($result->num_rows === 0) {
  // Criando tabela se não existir
  $conn->query("CREATE TABLE likes (id INT AUTO_INCREMENT PRIMARY KEY, count INT DEFAULT 0)");
  $conn->query("INSERT INTO likes (count) VALUES (0)");
}

// Incrementando o número de likes
$conn->query("UPDATE likes SET count = count + 1");

// Recuperando o número de likes
$result = $conn->query("SELECT count FROM likes");
$row = $result->fetch_assoc();
$likes = $row["count"];

echo $likes;

$conn->close();

?>