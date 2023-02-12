<?php

if (isset($_POST['comment']) && isset($_POST['username']) && isset($_POST['icon'])) {
  $comment = $_POST['comment'];
  $name = $_POST['username'];
  $icon = $_POST['icon'];

  $file = fopen("comments.txt", "a");
  fwrite($file, $name . " " . $icon . " " . $comment . "\n");
  fclose($file);
}

?>