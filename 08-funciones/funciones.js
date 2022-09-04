// Que son las funciones, como se declaran y como se utilizan
const nom = "Gorka";

/* saludar("Gorka");
saludar(); */
saludar(nom);

function saludar(param1) {
    console.log("Hola "+ param1);
}

///
let nombre_2 = "Juan";
console.log(nombre_2);

despedir(nombre_2);
console.log(nombre_2);

function despedir (nombre) {
    nombre = "Diego";
    console.log(`Adios ${nombre}`)
}

////

let persona = { nombre: "Juan", apellido: "Gonzales"};

saludarPersona(persona);

console.log(persona);

function saludarPersona(objeto) {
    objeto.apellido = "Villar"
    console.log(`Hola ${objeto.nombre} ${objeto.apellido}`);
}

////////////////

function imprimeNumero(numero = 2) {
    console.log(numero);
}

imprimeNumero();

//////////////

function imprimir (...param) {
    console.log(param);
}

imprimir(1, 3, 9, 2, "hola", {id:9});

//////
function suma(...nums) {
    return (nums.reduce((a, b) => a + b));
}

const s = suma(1, 2, 3, 4, 9, 15);

console.log(s);

//////
let variable = "hola"

function multiply(a = 0, b = 0) {
    console.log(variable);
    let variable_interna = "adios";
    console.log(variable_interna);
    return a * b;
}

console.log(multiply(4, 9));