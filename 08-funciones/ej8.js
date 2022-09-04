function tru() {
    return true;
}

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Hola soy una promesa")
        resolve()
    }, 5000);
})

function* generaIdPar() {
    let id = 0;
    while (true) {
        id += 2
        yield id;
    }
}

const idPar = generaIdPar();
console.log(idPar.next().value);