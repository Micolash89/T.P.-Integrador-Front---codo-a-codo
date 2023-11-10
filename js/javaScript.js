const resumen = document.getElementById("resumen")

function calcularDescuento() {

    const cantidadMeses = parseInt(document.getElementById('cantidadMeses').value);
    const tipoDescuento = document.getElementById('tipoDescuento').value;
    const valorMes = parseInt(document.getElementById('valorMes').textContent);

    const card1 = document.getElementById('card1').textContent;
    const card2 = document.getElementById('card2').textContent;
    const card3 = document.getElementById('card3').textContent;

    const card1Descuento = parseInt(document.getElementById('card1-descuento').textContent) / 100;
    const card2Descuento = parseInt(document.getElementById('card2-descuento').textContent) / 100;
    const card3Descuento = parseInt(document.getElementById('card3-descuento').textContent) / 100;

    let descuento = 0, resultado = 0;

    switch (tipoDescuento) {

        case card1:
            if (cantidadMeses > 1)
                resultado = cantidadMeses * valorMes - valorMes * card1Descuento;
            break;

        case card2:
            resultado = cantidadMeses * valorMes * card2Descuento;
            break;

        case card3:
            resultado = cantidadMeses * valorMes * card3Descuento;
            break;

        default:
            descuento = 2500 * cantidadMeses;
            resultado = `${descuento} - no tiene descuento`;

    }

    document.getElementById('totalPago').textContent = resultado;
}

resumen.addEventListener("submit", (e) => {
    e.preventDefault();
    calcularDescuento()
});