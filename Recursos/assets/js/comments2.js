// Função para atualizar a imagem do perfil
function updateProfilePicture2(icon2) {
  document.getElementById("profile-icon2").src = "Recursos/assets/icon/icon_card_noticias/" + icon2 + ".png";
}

// Função para exibir/ocultar o formulário de comentários
document.querySelector('.like-icon2').addEventListener('click', function () {
  var form = document.querySelector('.form2');
  form.style.display = form.style.display === 'none' ? 'block' : 'none';
});

// Função para carregar os comentários
function loadComments2() {
  // Faz uma requisição GET para o arquivo PHP que retorna os comentários
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "./php/get_comments2.php", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // Insere os comentários na página
      document.getElementById("comments2").innerHTML = xhr.responseText;
    }
  };
  xhr.send();
}

// Carrega os comentários assim que a página é carregada
window.addEventListener('load', function () {
  loadComments2();
});

// Adicionar comentário com o ícone selecionado
document.querySelector('.form2').addEventListener('submit', function (event) {
  event.preventDefault();

  // Recuperar dados do formulário
  var username2 = document.querySelector('input[name="username2"]').value;
  var comment2 = document.querySelector('textarea[name="comment2"]').value;
  var icon2 = document.querySelector('#icon-select2').value;

  // Criar elemento HTML para o comentário
  var commentElement = document.createElement('div');
  commentElement.innerHTML = '<img src="Recursos/assets/icon/icon_card_noticias/' + icon2 + '.png" alt="">' + username2 + ': ' + comment2;

  // Substituir os espaços em branco pelo elemento HTML de espaço não quebrável
  commentElement.innerHTML = commentElement.innerHTML.replace(/ /g, '&nbsp;');

  // Adicionar o comentário ao div de comentários
  document.getElementById('comments2').appendChild(commentElement);

  // Limpar o formulário
  document.querySelector('input[name="username2"]').value = '';
  document.querySelector('textarea[name="comment2"]').value = '';
  document.querySelector('#icon-select2').value = 'padrao';
  updateProfilePicture2('padrao');

  // Enviar o comentário para o servidor
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "./php/add_comment2.php", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      loadComments2();
    }
  };
  xhr.send("comment2=" + encodeURIComponent(comment2) + "&username2=" + encodeURIComponent(username2) + "&icon2=" + encodeURIComponent(icon2));

  // Rolar a página para o último comentário
  // var lastComment = document.getElementById('comments').lastChild;
  // lastComment.scrollIntoView();
});
