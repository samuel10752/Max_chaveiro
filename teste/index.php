<?php include 'like.php' ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    
</head>
<body>

    <style>
        #like-button {
  background-color: blue;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
}

    </style>

    <button id="like-button">Like</button>
<p id="like-count">0</p>



<script>
    var likeButton = document.getElementById("like-button");
    var likeCount = document.getElementById("like-count");
  
    likeButton.addEventListener("click", function() {
      var count = parseInt(likeCount.innerHTML) + 1;
      likeCount.innerHTML = count;
      var xhr = new XMLHttpRequest();
      xhr.open("POST", window.location.href, true);
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.send("like-count=" + count);
    });
  </script>


  
</body>
</html>