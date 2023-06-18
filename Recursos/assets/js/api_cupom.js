var cupons = JSON.parse(localStorage.getItem('cupons')) || {};
var cuponsUsados = JSON.parse(localStorage.getItem('cuponsUsados')) || {};

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
        var subtotal = parseFloat($('#subtotal').text().replace('R$', ''));
        var descontoPercentual = parseFloat(cupom.desconto);
        var desconto = subtotal * descontoPercentual / 100;
        var totalGeral = subtotal - desconto;

        $('#desconto').text(`R$${desconto.toFixed(2)}`);
        $('#totalGeral').text(`R$${totalGeral.toFixed(2)}`);

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
