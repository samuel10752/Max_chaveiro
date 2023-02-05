const likeButton = document.getElementById("LikeButton1");
let likes = 0;

likeButton.addEventListener("click", function() {
  likes++;
  likeButton.innerHTML = `
    <i class="fa fa-thumbs-up"></i>
    Like (${likes})
  `;

  // Armazenamento no site
  localStorage.setItem("likes", likes);
});

// Carregando número de likes ao carregar a página
window.addEventListener("load", function() {
  const storedLikes = localStorage.getItem("likes");
  if (storedLikes && !isNaN(storedLikes)) {
    likes = parseInt(storedLikes);
    likeButton.innerHTML = `
      <i class="fa fa-thumbs-up"></i>
      Like (${likes})
    `;
  }
});


const likeButton2 = document.getElementById("LikeButton2");
let likes2 = 0;

likeButton2.addEventListener("click", function() {
  likes2++;
  likeButton2.innerHTML = `
    <i class="fa fa-thumbs-up"></i>
    Like (${likes2})
  `;

  // Armazenamento no site
  localStorage.setItem("likes2", likes2);
});

// Carregando número de likes ao carregar a página
window.addEventListener("load", function() {
  const storedLikes = localStorage.getItem("likes2");
  if (storedLikes && !isNaN(storedLikes)) {
    likes2 = parseInt(storedLikes);
    likeButton2.innerHTML = `
      <i class="fa fa-thumbs-up"></i>
      Like (${likes2})
    `;
  }
});


const likeButton3 = document.getElementById("LikeButton3");
let likes3 = 0;

likeButton3.addEventListener("click", function() {
  likes3++;
  likeButton3.innerHTML = `
    <i class="fa fa-thumbs-up"></i>
    Like (${likes2})
  `;

  // Armazenamento no site
  localStorage.setItem("likes3", likes3);
});

// Carregando número de likes ao carregar a página
window.addEventListener("load", function() {
  const storedLikes = localStorage.getItem("likes3");
  if (storedLikes && !isNaN(storedLikes)) {
    likes3 = parseInt(storedLikes);
    likeButton3.innerHTML = `
      <i class="fa fa-thumbs-up"></i>
      Like (${likes3})
    `;
  }
});

