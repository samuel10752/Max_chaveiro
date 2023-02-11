<!DOCTYPE html>
<html>
  <head>
    <title>Chatbot</title>
  </head>
  <body>
    <h1>Chatbot</h1>
    <p>Por favor, escolha uma das opções abaixo:</p>
    <ol>
      <li>Pergunta 1</li>
      <li>Pergunta 2</li>
      <li>Pergunta 3</li>
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
            echo "A resposta à pergunta 1 é X. <a href='https://www.example.com/pergunta1'>Clique aqui para mais informações</a>.";
            break;
          case 2:
            echo "A resposta à pergunta 2 é Y. <a href='https://www.example.com/pergunta2'>Clique aqui para mais informações</a>.";
            break;
          case 3:
            echo "A resposta à pergunta 3 é Z. <a href='https://www.example.com/pergunta3'>Clique aqui para mais informações</a>.";
            break;
          default:
            echo "Desculpe, você deve digitar apenas os números 1, 2 ou 3.";
            break;
        }
      }
    ?>
  </body>
</html>
