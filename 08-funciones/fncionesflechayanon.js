// Funciones de tipo flecha - anonimas
const arr = [1, 5, 6, 2, 7, 12, 8, 92];

const arr2 =arr.map(valor => valor *2);
console.log(arr2);

/* const dobleDelvalor = valor => {
    return valor * 2
} */

const dobleDelValor = valor => valor * 2;

variable = 7;
console.log(doble(6));
console.log(dobleDelValor(6));

const arr3 = arr.map(dobleDelValor);

console.log(arr3);

function doble(valor) {
    return valor *2
}

var variable;