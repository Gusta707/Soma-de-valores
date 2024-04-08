
function somar() {
    var valor1 = document.getElementById("valor1").value;
    var valor2 = document.getElementById("valor2").value;
    var resultado = parseInt(valor1) + parseInt(valor2);
    document.getElementById("resultado")
    .innerHTML = "Resultado: " + resultado;
    }
