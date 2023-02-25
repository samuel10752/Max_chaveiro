// Função para atualizar a imagem do perfil
function updateProfilePicture1(icon1) {
    document.getElementById("profile-icon1").src = "Recursos/assets/icon/icon_card_noticias/" + icon1 + ".png";
  }
  
  // Função para exibir/ocultar o formulário de comentários
  document.querySelector('.like-icon1').addEventListener('click', function () {
    var form1 = document.querySelector('.form1');
    form1.style.display = form1.style.display === 'none' ? 'block' : 'none';
  });
  
  // Função para carregar os comentários
  function loadComments1() {
    // Faz uma requisição GET para o arquivo PHP que retorna os comentários
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./php/get_comments1.php", true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // Insere os comentários na página
        document.getElementById("comments1").innerHTML = xhr.responseText;
      }
    };
    xhr.send();
  }
  
  // Carrega os comentários assim que a página é carregada
  window.addEventListener('load', function () {
    loadComments1();
  });
  
  // Adicionar comentário com o ícone selecionado
  document.querySelector('.form1').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Recuperar dados do formulário
    var username1 = document.querySelector('input[name="username1"]').value;
    var comment1 = document.querySelector('textarea[name="comment1"]').value;
    var icon1 = document.querySelector('#icon-select1').value;
  
    // Criar elemento HTML para o comentário
    var commentElement = document.createElement('div');
    commentElement.innerHTML = '<img src="Recursos/assets/icon/icon_card_noticias/' + icon1 + '.png" alt="">' + username1 + ': ' + comment1;
  
    // Substituir os espaços em branco pelo elemento HTML de espaço não quebrável
    commentElement.innerHTML = commentElement.innerHTML.replace(/ /g, '&nbsp;');
  
    // Adicionar o comentário ao div de comentários
    document.getElementById('comments1').appendChild(commentElement);
  
    // Limpar o formulário
    document.querySelector('input[name="username1"]').value = '';
    document.querySelector('textarea[name="comment1"]').value = '';
    document.querySelector('#icon-select1').value = 'padrao';
    updateProfilePicture1('padrao');
  
    // Enviar o comentário para o servidor
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "./php/add_comment1.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        loadComments1();
      }
    };
    xhr.send("comment1=" + encodeURIComponent(comment1) + "&username1=" + encodeURIComponent(username1) + "&icon1=" + encodeURIComponent(icon1));
  
    // Rolar a página para o último comentário
    // var lastComment = document.getElementById('comments').lastChild;
    // lastComment.scrollIntoView();
  });
  