<?php
  $file = "like-count.txt";
  if (isset($_POST["like-count"])) {
    file_put_contents($file, $_POST["like-count"]);
  }
  $likeCount = file_get_contents($file);
?>

