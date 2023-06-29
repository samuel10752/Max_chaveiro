var cupons = JSON.parse(localStorage.getItem('cupons')) || {};
var cuponsUsados = JSON.parse(localStorage.getItem('cuponsUsados')) || {};
var produtosCarrinho = JSON.parse(localStorage.getItem('produtosCarrinho')) || {};
var subtotal = 0;

function validarCupom() {
    var codigo = $('#codigo-cupom').val();
    var cupom = cupons[codigo];

    if (cuponsUsados[codigo]) {
        swal({
            title: "Cupom já usado",
            text: "Você não pode usar o mesmo cupom mais de uma vez.",
            icon: "error",
            timer: 2000
        });
        return;
    }

    if (cupom && cupom.desconto) {
        var subtotalTemp = parseFloat($('#subtotal').text().replace('R$', ''));
        var descontoPercentual = parseFloat(cupom.desconto);
        var desconto = subtotalTemp * descontoPercentual / 100;
        var totalGeral = subtotalTemp - desconto;

        $('#desconto').text(`R$${desconto.toFixed(2)}`);
        $('#totalGeral').text(`R$${totalGeral.toFixed(2)}`);

        subtotal = totalGeral;
        atualizarSubtotal();

        cuponsUsados[codigo] = true;
        localStorage.setItem('cuponsUsados', JSON.stringify(cuponsUsados));

        swal({
            title: "Desconto Aplicado",
            text: `Desconto de R$${desconto.toFixed(2)} aplicado com sucesso!`,
            icon: "success",
            timer: 2000
        });

        $('#pop-up-cupom').hide();
        $('#overlay').hide();

    } else {
        swal({
            title: "Cupom Inválido",
            text: "Cupom inválido ou expirado.",
            icon: "error",
            timer: 2000
        });
    }
}

function adicionarAoCarrinho(id, preco) {
    if (!produtosCarrinho[id]) {
        produtosCarrinho[id] = 1;
    } else {
        produtosCarrinho[id]++;
    }

    subtotal += preco;
    atualizarSubtotal();
    localStorage.setItem('produtosCarrinho', JSON.stringify(produtosCarrinho));
}

function atualizarSubtotal() {
    $('#subtotal').text(`R$${subtotal.toFixed(2)}`);
}

$(document).ready(function () {
    $('#addtocart_2').click(function () {
        adicionarAoCarrinho('produto_2', 70);
    });

    $('#addtocart_3').click(function () {
        adicionarAoCarrinho('produto_3', 75);
    });

    // ... e assim por diante para cada produto
});
