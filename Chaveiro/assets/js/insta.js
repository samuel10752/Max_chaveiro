let likeCount = 0;

const likeButton = document.getElementById("like-button");
const likeCountSpan = document.getElementById("like-count");

likeButton.addEventListener("click", function() {
  likeCount++;
  likeCountSpan.innerHTML = likeCount;
});

likeButton.addEventListener("click", function() {
  likeCount++;
  likeCountSpan.innerHTML = likeCount;

  // Enviar a contagem de likes para o servidor
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "save_likes.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send("like_count=" + likeCount);
});
