'use strict'

const $button = document.getElementById('button');

$button.addEventListener('click', () => {
    // DOM Elements
    const $numero = document.getElementById('number');
    const $result = document.getElementById('res');

    const number = Number.parseInt($numero.value);
    //igual a la funcion que use alejandro
    const resultado = contadorDigitos(number);

    // imprimir el resultado
    $result.innerHTML = resultado;
});