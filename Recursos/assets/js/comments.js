// Função para atualizar a imagem do perfil
function updateProfilePicture(icon) {
    document.getElementById("profile-icon").src = "Recursos/assets/icon/icon_card_noticias/" + icon + ".png";
  }
  
  // Função para exibir/ocultar o formulário de comentários
  document.querySelector('.like-icon').addEventListener('click', function () {
    var form = document.querySelector('form');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
  });
  
  // Função para carregar os comentários
  function loadComments() {
    // Faz uma requisição GET para o arquivo PHP que retorna os comentários
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./php/get_comments.php", true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Insere os comentários na página
        document.getElementById("comments").innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  }
  
  // Carrega os comentários assim que a página é carregada
  window.addEventListener('load', function () {
    loadComments();
  });
  
  // Adicionar comentário com o ícone selecionado
  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Recuperar dados do formulário
    var username = document.querySelector('input[name="username"]').value;
    var comment = document.querySelector('textarea[name="comment"]').value;
    var icon = document.querySelector('#icon-select').value;
  
    // Criar elemento HTML para o comentário
    var commentElement = document.createElement('div');
    commentElement.innerHTML = '<img src="Recursos/assets/icon/icon_card_noticias/' + icon + '.png" alt="">' + username + ': ' + comment;
  
    // Substituir os espaços em branco pelo elemento HTML de espaço não quebrável
    commentElement.innerHTML = commentElement.innerHTML.replace(/ /g, '&nbsp;');
  
    // Adicionar o comentário ao div de comentários
    document.getElementById('comments').appendChild(commentElement);
  
    // Limpar o formulário
    document.querySelector('input[name="username"]').value = '';
    document.querySelector('textarea[name="comment"]').value = '';
    document.querySelector('#icon-select').value = 'padrao';
    updateProfilePicture('padrao');
  
    // Enviar o comentário para o servidor
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "./php/add_comment.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        loadComments();
      }
    };
    xhr.send("comment=" + encodeURIComponent(comment) + "&username=" + encodeURIComponent(username) + "&icon=" + encodeURIComponent(icon));
  
    // Rolar a página para o último comentário
    // var lastComment = document.getElementById('comments').lastChild;
    // lastComment.scrollIntoView();
  });
  