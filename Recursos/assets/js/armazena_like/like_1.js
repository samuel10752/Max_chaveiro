var likeButton1 = document.getElementById("LikeButton1");
var likeCount1 = document.getElementById("like-count1");

likeButton1.addEventListener("click", function() {
  var count1 = parseInt(likeCount1.innerHTML) + 1;
  likeCount1.innerHTML = count1;
  var xhr = new XMLHttpRequest();
  xhr.open("POST", window.location.href, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send("like-count1=" + count1);
});

var likeButton2 = document.getElementById("LikeButton2");
var likeCount2 = document.getElementById("like-count2");

likeButton2.addEventListener("click", function() {
  var count2 = parseInt(likeCount2.innerHTML) + 1;
  likeCount2.innerHTML = count2;
  var xhr = new XMLHttpRequest();
  xhr.open("POST", window.location.href, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send("like-count2=" + count2);
});

var likeButton3 = document.getElementById("LikeButton3");
var likeCount3 = document.getElementById("like-count3");

likeButton3.addEventListener("click", function() {
  var count3 = parseInt(likeCount3.innerHTML) + 1;
  likeCount3.innerHTML = count3;
  var xhr = new XMLHttpRequest();
  xhr.open("POST", window.location.href, true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.send("like-count3=" + count3);
});