<?php

if (isset($_POST['comment']) && isset($_POST['username'])) {
  $comment = $_POST['comment'];
  $name = $_POST['username'];

  $file = fopen("comments.txt", "a");
  fwrite($file, $name . ": " . $comment . "\n");
  fclose($file);
}

?>
