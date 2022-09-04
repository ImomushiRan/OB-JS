// Funciones generadoras

function* generaId () {
    let id = 0;
    while(true) {
        id++
        if (id >= 10) {
            return id
        }
        yield id // Se queda esperando que la vuelva a llamar
    }
}

const gen = generaId();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);