const express = require('express');
const axios = require('axios');
const cors = require('cors'); // Importe o módulo cors

const app = express();

// Use o middleware cors
app.use(cors());
// Endpoint para buscar endereço por CEP
app.get('/endereco/:cep', async (req, res) => {
  try {
    const cep = req.params.cep;
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    if (response.status === 200) {
      const endereco = {
        logradouro: response.data.logradouro,
        bairro: response.data.bairro,
        cidade: response.data.localidade,
        estado: response.data.uf,
        cep: response.data.cep,
        dd: response.data.ddd,
      };
      res.json(endereco);
    } else {
      res.status(500).json({ message: 'Erro ao buscar endereço' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar endereço' });
  }

});

// Iniciar o servidor na porta 3000
app.listen(3000, () => {
  console.log('API de busca de endereço por CEP iniciada na porta 3000');
});
