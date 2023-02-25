// Função para atualizar a imagem do perfil
function updateProfilePicture3(icon3) {
  document.getElementById("profile-icon3").src = "Recursos/assets/icon/icon_card_noticias/" + icon3 + ".png";
}

// Função para exibir/ocultar o formulário de comentários
document.querySelector('.like-icon3').addEventListener('click', function () {
  var form = document.querySelector('.form3');
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
});

// Função para carregar os comentários
function loadComments3() {
  // Faz uma requisição GET para o arquivo PHP que retorna os comentários
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "./php/get_comments3.php", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Insere os comentários na página
      document.getElementById("comments3").innerHTML = xhr.responseText;
    }
  };
  xhr.send();
}

// Carrega os comentários assim que a página é carregada
window.addEventListener('load', function () {
  loadComments3();
});

// Adicionar comentário com o ícone selecionado
document.querySelector('.form3').addEventListener('submit', function (event) {
  event.preventDefault();

  // Recuperar dados do formulário
  var username3 = document.querySelector('input[name="username3"]').value;
  var comment3 = document.querySelector('textarea[name="comment3"]').value;
  var icon3 = document.querySelector('#icon-select3').value;

  // Criar elemento HTML para o comentário
  var commentElement = document.createElement('div');
  commentElement.innerHTML = '<img src="Recursos/assets/icon/icon_card_noticias/' + icon3 + '.png" alt="">' + username3 + ': ' + comment3;

  // Substituir os espaços em branco pelo elemento HTML de espaço não quebrável
  commentElement.innerHTML = commentElement.innerHTML.replace(/ /g, '&nbsp;');

  // Adicionar o comentário ao div de comentários
  document.getElementById('comments3').appendChild(commentElement);

  // Limpar o formulário
  document.querySelector('input[name="username3"]').value = '';
  document.querySelector('textarea[name="comment3"]').value = '';
  document.querySelector('#icon-select3').value = 'padrao';
  updateProfilePicture3('padrao');

  // Enviar o comentário para o servidor
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "./php/add_comment3.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      loadComments3();
    }
  };
  xhr.send("comment3=" + encodeURIComponent(comment3) + "&username3=" + encodeURIComponent(username3) + "&icon3=" + encodeURIComponent(icon3));

  // Rolar a página para o último comentário
  // var lastComment = document.getElementById('comments').lastChild;
  // lastComment.scrollIntoView();
});
