// Iterar los valores de una lista
const array = ["hola", 2, 5, 90, false, undefined];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Forma ES6
let suma = 0;
const arrayNums = [3, 6, 2, 77, 2, 3, 93, 19]
arrayNums.forEach(valor => {
    suma += valor;
    console.log(valor);
});
console.log(suma);

// Buscada de un valor dentro de una lista .find()
// Quiero encontrar el elemento 90 en una lista
const variable = array.find(valor => {
    if (valor === 9) {
        return true;
    }
})

console.log(variable);

const listaObjetos = [
    {nombre:"Leire", edad: 35},
    {nombre:"Gorka", edad: 34},
    {nombre:"Miguel", edad: 28},
    {nombre:"Lucia", edad: 3},
    {nombre:"Amaia", edad: 29}
]

const objeto = listaObjetos.find(o => {
    if (o.nombre === "Miguel") {
        return true
    }
})

const objeto1 = listaObjetos.find(o => o.nombre === "Miguel")

console.log(objeto.edad);
console.log(objeto1.edad);

const {edad} = listaObjetos.find(o => o.nombre === "Miguel");
console.log(edad);
