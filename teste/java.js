const likeButton = document.getElementById("likeButton");
let likes = 0;

likeButton.addEventListener("click", function() {
  likes++;
  likeButton.innerHTML = `Like (${likes})`;

  // Armazenamento no site
  localStorage.setItem("likes", likes);
});

// Carregando número de likes ao carregar a página
window.addEventListener("load", function() {
  const storedLikes = localStorage.getItem("likes");
  if (storedLikes) {
    likes = parseInt(storedLikes);
    likeButton.innerHTML = `Like (${likes})`;
  }
});
