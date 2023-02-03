<?php
// Increment the like count for the item
$like_count = file_get_contents("like_count.txt");
$like_count = (int) $like_count + 1;
file_put_contents("like_count.txt", $like_count);
?>