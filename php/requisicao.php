<?php
// URL da página onde você deseja enviar o "like"
$url = 'https://maxchaveiro.lovestoblog.com';

// Inicializa a sessão cURL
$ch = curl_init();

// Define as opções da solicitação
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // Desabilita a verificação SSL

// Adiciona o conteúdo da requisição, se necessário
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, [
    'post_id' => 123,
    'action' => 'like',
]);

// Executa a solicitação
$response = curl_exec($ch);

// Verifica se a solicitação foi bem-sucedida
if (curl_errno($ch)) {
    echo 'Erro ao enviar solicitação: ' . curl_error($ch);
} else {
    echo 'Solicitação enviada com sucesso';
}

// Fecha a sessão cURL
curl_close($ch);
// <?php include 'php/like.php' ?>
// <?php include 'php/requisicao.php' ?>