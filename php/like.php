<?php
  $file = "Recursos/assets/arquivos_like/like-count1.txt";
  if (isset($_POST["like-count1"])) {
    file_put_contents($file, $_POST["like-count1"]);
  }
  $likeCount1 = file_get_contents($file);
?>

<?php
  $file = "Recursos/assets/arquivos_like/like-count2.txt";
  if (isset($_POST["like-count2"])) {
    file_put_contents($file, $_POST["like-count2"]);
  }
  $likeCount2 = file_get_contents($file);
?>


<?php
  $file = "Recursos/assets/arquivos_like/like-count3.txt";
  if (isset($_POST["like-count3"])) {
    file_put_contents($file, $_POST["like-count3"]);
  }
  $likeCount3 = file_get_contents($file);
?>
