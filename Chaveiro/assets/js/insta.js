let likeButton = document.querySelector("#likeButton");
let likeCount = document.querySelector("#likeCount");

likeButton.addEventListener("click", function () {
  likeButton.innerHTML = '<i class="fa fa-thumbs-up"></i>' + (parseInt(likeCount.innerHTML) + 1);
  likeCount.innerHTML = parseInt(likeCount.innerHTML) + 1;
});
