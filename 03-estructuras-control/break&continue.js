// Formas de controlar los bucles
// break, continue
var lista = [1, 2, 3, 4, 5, 6, 7, 8];

for (var i = 0; i < lista.length; i++) {
    if (lista[i] == 3) {
        continue;
    }
    let j = 50;
    const k = 100;
    console.log(k)
    console.log(j)
    console.log(lista[i]);
    if (lista[i] > 5) {
        break;
    }
}


// Cual es el ambito de un bucle

console.log(i)
console.log()
/* console.log(k) */

// labels

let unidades = 0;
let decenas = 0;

bucleDecenas: while (true) {
    bucleUnidades: while (true) {
        console.log(`El numero actual es: ${decenas}${unidades}`);
        unidades ++;
        if (unidades === 10) {
            unidades = 0;
            break bucleUnidades;
        }
        if (decenas === 2) {
            break bucleDecenas;
        }
    }
    decenas++;
}
console.log("Ya hemos terminado");