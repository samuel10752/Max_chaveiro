<!DOCTYPE html>
<html>
  <head>
    <title>Chatbot</title>
    <link rel="stylesheet" href="css.css">
  </head>
  <body>

  <style>
 .chatbot-box {
    display: none;
    width: 300px;
    height: 450px;
    overflow: scroll;
    border: 5px solid #0044ff;
    padding: 10px;
}
  </style>

  <img src="image.png" onclick="toggleChatbotBox()" />
  <div id="chatbot-box" class="chatbot-box">
		<!-- Código do chatbot aqui -->
   <h1>Chatbot</h1>
    <p>Por favor, escolha uma das opções abaixo:</p>
    <ol>
      <li>Conservar com o vendendor.</li>
      <li>Deseja ver nossas novidades?</li>
      <li>Ver nossas redes socias!</li>
    </ol>
    
    <form action="index.php" method="post">
      <input type="text" name="input">
      <input type="submit" value="Enviar">
    </form>

    <?php
      if (isset($_POST['input'])) {
        $message = intval($_POST['input']);
        switch ($message) {
          case 1:
            echo "Aqui esta o contato do nosso vendendor.  <a href='https://wa.me/5535999853337?text=Serviço%20de%20chaves%20,%20fechaduras%20e%20abertura%20de%20automóveis%20.%20'>Clique aqui para ir no Whatsapp</a>.";
            break;
          case 2:
            echo "Aqui esta as novidades. <a href='http://localhost/meus_sites/Max_chaveiro/'>Clique aqui para mais informações</a>.";
            break;
          case 3:
            echo "<br> Nossas redes sociais. <br> <a href='https://wa.me/5535999853337?text=Serviço%20de%20chaves%20,%20fechaduras%20e%20abertura%20de%20automóveis%20.%20'>
            <img src='whatsapp.png'";
            break;
          default:
            echo "Desculpe, você deve digitar apenas os números 1, 2 ou 3.";
            break;
        }
      }
    ?>
    </div>

    <script>
    function toggleChatbotBox() {
      var chatbotBox = document.getElementById("chatbot-box");
      if (chatbotBox.style.display === "none") {
        chatbotBox.style.display = "block";
      } else {
        chatbotBox.style.display = "none";
      }
    }
  </script>

  </body>
</html>
