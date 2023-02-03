<?php
// ...
$item_id = (int) $_POST["item_id"];
$user_id = (int) $_POST["user_id"];

// Connect to the database
$conn = new mysqli("localhost", "user", "password", "database");

// Insert a new like into the database
$stmt = $conn->prepare("INSERT INTO likes (item_id, user_id) VALUES (?, ?)");
$stmt->bind_param("ii", $item_id, $user_id);
$stmt->execute();

// Close the database connection
$stmt->close();
$conn->close();
// ...
?>