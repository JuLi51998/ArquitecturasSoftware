'use strict'

const $button = document.getElementById('');

$button.addEventListener('click', () => {
    // DOM Elements
    const $numero = document.getElementById('');
    const $result = document.getElementById('');

    const number = Number.parseInt($numero.value);
    //igual a la funcion que use alejandro
    const resultado = suma(number);

    // imprimir el resultado

    $result.innerHTML = resultado;
});