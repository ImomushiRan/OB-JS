// Trabajando con Objetos
const obj = {
    id: 4,
    nombre: "Juan",
    apellido: "Gonzales",
    isDeveloper: true,
    libros_favoritos: ["El metodo,", "El codigo de la manifestacion"],
    "4-juegos": [1, 2, 3, 4]
};

console.log(obj.id);
console.log(obj.apellido);
console.log(obj["4-juegos"]);

const prop = "isDeveloper";
console.log(obj[prop]);

const obj2 = obj;
console.log(obj2);

obj2.nombre = "Iñigo";
console.log(obj2.nombre); 

console.log(obj.nombre);

let val1 = 4;
let val2 = val1;

val2 = 6;
console.log(val1);
console.log(val2);

const obj3 = { ...obj };

console.log(obj.nombre);
console.log(obj3.nombre);

obj3.nombre = "Gorka";
console.log(obj.nombre);
console.log(obj3.nombre);

// Como ordenar listas de objetos en funcion de una propiedad
const listaObjetos = [
    {titulo: "Lo que el viento se llevo", year: 1939},
    {titulo: "Titanic", year: 1997},
    {titulo: "Moana", year: 2016},
    {titulo: "El efecto mariposa", year: 2004},
    {titulo: "TED", year: 2012}
];

listaObjetos.sort((a, b) => a.year - b.year);

console.log(listaObjetos);

