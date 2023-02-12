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
            echo "<br> Nossas redes sociais. <br><br> <a
            href='https://wa.me/5535999853337?text=Serviço%20de%20chaves%20,%20fechaduras%20e%20abertura%20de%20automóveis%20.%20'>
            <img src='whatsapp.png'";
            break;
          default:
            echo "Desculpe, você deve digitar apenas os números 1, 2 ou 3.";
            break;
        }
      }
    ?>