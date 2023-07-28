const express = require('express');
const axios = require('axios');
const soap = require('soap');
const cors = require('cors');

const app = express();
app.use(cors());

// Rota para buscar endereço por CEP
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
    res.status(500).json({ message: 'Erro ao buscar endereço', error: error });
  }
});

// Rota para calcular o frete com base no CEP

// app.get('/frete/:servico/:cep', async (req, res) => {
//   try {
//     const cep = req.params.cep;
//     const servico = req.params.servico;
//     const url = 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx?wsdl';

//     let args;
//     let Valor;

//     if (servico === 'carta') {
//       Valor = 9.05; // Valor fixo da Carta Simples

//       args = {
//         nCdEmpresa: '', // Seu código de empresa nos Correios, se houver
//         sDsSenha: '', // Sua senha nos Correios, se houver
//         nCdServico: '10065', // Código do serviço - 10065 é o código para Carta Comercial à Vista
//         sCepOrigem: '37524-000', // CEP de origem
//         sCepDestino: cep, // CEP de destino
//       };

//     } else if (servico === 'pac') {
//       // argumentos para PAC
//       args = {
//         nCdEmpresa: '', // Seu código de empresa nos Correios, se houver
//         sDsSenha: '', // Sua senha nos Correios, se houver
//         nCdServico: '04510', // Código do serviço - 04510 é o código para PAC
//         sCepOrigem: '37524-000', // CEP de origem
//         sCepDestino: cep, // CEP de destino
//         nVlPeso: '0.3', // Peso da encomenda em quilogramas
//         nCdFormato: '3', // Formato da encomenda (1 é caixa/pacote)
//         nVlComprimento: '16', // Comprimento da encomenda em centímetros
//         nVlAltura: '11', // Altura da encomenda em centímetros
//         nVlLargura: '11', // Largura da encomenda em centímetros
//         nVlDiametro: '0', // Diâmetro da encomenda em centímetros
//         sCdMaoPropria: 'n', // Indica se a encomenda será entregue em mãos ('s' ou 'n')
//         nVlValorDeclarado: '0', // Valor declarado da encomenda, para fins de seguro
//         sCdAvisoRecebimento: 'n' // Indica se a encomenda requer aviso de recebimento ('s' ou 'n')
//       };
//       // ...
//     } else if (servico === 'sedex') {
//       // argumentos para SEDEX
//       args = {
//         nCdEmpresa: '', // Seu código de empresa nos Correios, se houver
//         sDsSenha: '', // Sua senha nos Correios, se houver
//         nCdServico: '04014', // Código do serviço - 04014 é o código para SEDEX à vista
//         sCepOrigem: '37524-000', // CEP de origem
//         sCepDestino: cep, // CEP de destino
//         nVlPeso: '0.3', // Peso da encomenda em quilogramas
//         nCdFormato: '3', // Formato da encomenda (1 é caixa/pacote)
//         nVlComprimento: '16', // Comprimento da encomenda em centímetros
//         nVlAltura: '11', // Altura da encomenda em centímetros
//         nVlLargura: '11', // Largura da encomenda em centímetros
//         nVlDiametro: '0', // Diâmetro da encomenda em centímetros
//         sCdMaoPropria: 'n', // Indica se a encomenda será entregue em mãos ('s' ou 'n')
//         nVlValorDeclarado: '0', // Valor declarado da encomenda, para fins de seguro
//         sCdAvisoRecebimento: 'n' // Indica se a encomenda requer aviso de recebimento ('s' ou 'n')
//       };
//       // ...
//     } else {
//       res.status(400).json({ message: 'Serviço inválido' });
//       return;
//     }

//     const client = await soap.createClientAsync(url);
//     const resultPreco = await client.CalcPrecoPrazoAsync(args);
//     const resultPrazo = await client.CalcPrazoAsync(args);

//     let response = {
//       preco: resultPreco[0].CalcPrecoPrazoResult.Servicos.cServico,
//       prazo: resultPrazo[0].CalcPrazoResult.Servicos.cServico,
//       Valor: 0,  // Valor padrão
//     }

//     // Se o serviço for 'carta', adicione o valor fixo do frete na resposta
//     if(servico === 'carta') {
//       response.Valor = Valor;
//     }


//     res.json(response);
//   } catch (error) {
//     res.status(500).json({ message: 'Erro ao calcular o frete', error: error });
//   }
// });

// // Ouvir na porta 3000
// app.listen(3000, () => {
//   console.log('API iniciada na porta 3000');
// });





// Definir um valor fixo para o frete
const freteFixo = 9.05; // Exemplo de valor fixo

app.get('/frete/:cep', async (req, res) => {
  try {
    const cep = req.params.cep;
    const url = 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx?wsdl';

    const args = {
      nCdEmpresa: '', // Seu código de empresa nos Correios, se houver
      sDsSenha: '', // Sua senha nos Correios, se houver
      nCdServico: '10065', // Código do serviço - 10065 é o código para Carta Comercial à Vista
      sCepOrigem: '37524-000', // CEP de origem
      sCepDestino: cep, // CEP de destino
      nVlPeso: '1', // Peso da encomenda, em quilogramas
      nCdFormato: '1', // Formato da encomenda (1 - Formato caixa/pacote, 2 - Formato rolo/prisma, 3 - Envelope)
      nVlComprimento: '20', // Comprimento da encomenda, em centímetros
      nVlAltura: '5', // Altura da encomenda, em centímetros
      nVlLargura: '15', // Largura da encomenda, em centímetros
      nVlDiametro: '0' // Diâmetro da encomenda, em centímetros (se aplicável)
    };

    soap.createClientAsync(url).then((client) => {
      return client.CalcPrazoAsync(args);
    }).then((result) => {
      // Alterar aqui para retornar o valor fixo
      const fixedResult = { ...result[0].CalcPrazoResult.Servicos.cServico, Valor: freteFixo.toString() };
      res.json(fixedResult);
    }).catch((err) => {
      res.status(500).json({ message: 'Erro ao calcular o frete', error: err });
    });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao calcular o frete', error: error });
  }
});

// Ouvir na porta 3000
app.listen(3000, () => {
  console.log('API iniciada na porta 3000');
});


// SEDEX à vista: 04014
// SEDEX 10: 40215
// SEDEX Hoje: 40290
// SEDEX a Cobrar: 40126
// PAC à vista: 04510
// PAC a Cobrar: 04707
// Carta Comercial: 10065
// Carta Não Comercial: 10138
// Carta Registrada: 10014
// Aerograma Nacional: 10689