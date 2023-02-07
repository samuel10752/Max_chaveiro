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