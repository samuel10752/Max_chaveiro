// botao do like no primeiro card  
// const likeButton = document.querySelector(".like_1like-button1");
// const heartIcon = likeButton.querySelector(".fa-heart-o");
// const likeCount = likeButton.querySelector(".like_1like-count1");

// likeButton.addEventListener("click", function() {
//   heartIcon.classList.toggle("fa-heart-o");
//   heartIcon.classList.toggle("fa-heart");
  
//   if (heartIcon.classList.contains("fa-heart")) {
//     likeCount.textContent = parseInt(likeCount.textContent) + 1;
//   } else {
//     likeCount.textContent = parseInt(likeCount.textContent) - 1;
//   }
// });

// botao do like no primeiro card 2  
const likeButton2 = document.querySelector(".like_2like-button2");
const heartIcon2 = likeButton2.querySelector(".fa-heart-o");
const likeCount2 = likeButton2.querySelector(".like_2like-count2");

likeButton2.addEventListener("click", function() {
  heartIcon2.classList.toggle("fa-heart-o");
  heartIcon2.classList.toggle("fa-heart");
  
  if (heartIcon2.classList.contains("fa-heart")) {
    likeCount2.textContent = parseInt(likeCount2.textContent) + 1;
  } else {
    likeCount2.textContent = parseInt(likeCount2.textContent) - 1;
  }
});


// botao do like no primeiro card 3  
const likeButton3 = document.querySelector(".like_3like-button3");
const heartIcon3 = likeButton3.querySelector(".fa-heart-o");
const likeCount3 = likeButton3.querySelector(".like_3like-count3");

likeButton3.addEventListener("click", function() {
  heartIcon3.classList.toggle("fa-heart-o");
  heartIcon3.classList.toggle("fa-heart");
  
  if (heartIcon3.classList.contains("fa-heart")) {
    likeCount3.textContent = parseInt(likeCount3.textContent) + 1;
  } else {
    likeCount3.textContent = parseInt(likeCount3.textContent) - 1;
  }
});


