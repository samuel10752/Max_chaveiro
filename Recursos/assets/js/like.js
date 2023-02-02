const likeButton = document.querySelector(".like-button");
const heartIcon = likeButton.querySelector(".fa-heart-o");
const likeCount = likeButton.querySelector(".like-count");

likeButton.addEventListener("click", function() {
  heartIcon.classList.toggle("fa-heart-o");
  heartIcon.classList.toggle("fa-heart");
  
  if (heartIcon.classList.contains("fa-heart")) {
    likeCount.textContent = parseInt(likeCount.textContent) + 1;
  } else {
    likeCount.textContent = parseInt(likeCount.textContent) - 1;
  }
});


