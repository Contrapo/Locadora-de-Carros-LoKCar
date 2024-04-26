$(function() {
    $("#data_locacao").datepicker($.datepicker.regional['pt-BR']);
    $("#data_devolucao").datepicker($.datepicker.regional['pt-BR']);

    $("#rentalForm").on("submit", function(event) {
        event.preventDefault();

        var dataLocacao = new Date($("#data_locacao").val());
        var dataDevolucao = new Date($("#data_devolucao").val());
        var diffTime = Math.abs(dataDevolucao - dataLocacao);
        var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        var valorLocacaoSelect = document.getElementById("valor_locacao");
        var valorLocacao = parseFloat(valorLocacaoSelect.options[valorLocacaoSelect.selectedIndex].value);

        var valorTotal = diffDays * valorLocacao;

        var responseElement = document.getElementById("response");

        responseElement.innerHTML = "Quantidade de dias locados: " + diffDays + "<br>";
        responseElement.innerHTML += "Valor a ser pago: R$" + valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    });
});