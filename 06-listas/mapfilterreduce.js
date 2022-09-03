// Trabajar con metodos mas avanzados
// .map() .filter() .reduce()

const array = ["San sebastian", "Madrid", "barcelona", "Alicante", "Bilbao"];

const val = array.forEach(v => {
    console.log(v);
    return v;
});

console.log(val);

// .map()
const array1 = array.map((valor, index) => `${index + 1}- ${valor}`)
console.log(array1);

// .filter()
const listaObjetos = [
    {nombre:"Leire", edad: 35},
    {nombre:"Gorka", edad: 34},
    {nombre:"Miguel", edad: 28},
    {nombre:"Lucia", edad: 3},
    {nombre:"Amaia", edad: 29}
]

/* const mayores = listaObjetos.filter(obj=> {
    if (obj.edad > 30) {
        return true;
    } else {
        return false;
    }
}) */
const mayores = listaObjetos.filter(obj=> obj.edad > 30)
console.log(mayores);

const nuevaLista = listaObjetos.filter(obj => obj.nombre != "Miguel")
console.log(nuevaLista);

const suma = listaObjetos.reduce((agr, cur) => agr + cur.edad);
console.log(suma);

const valores = [3, 56, 23, 5, 90, 100];

const redsuma = valores.reduce((ant, cur, i, arrayOriginal) => {
    console.log(ant);
    console.log(cur);
    console.log(i);
    console.log(arrayOriginal);
    return ant + cur
})

console.log(redsuma);
