// Bucles
// for (inicializacion; condicion, actualizacion) {
//      Esto es el bucle
// }

/*
    i = i +1
    i += 1
    i++ 
*/

for (let i = 0 ; i < 10 ; i++) {
    console.log(i);
}

let lista = [1, 4, 6, 2, 3, 7, 10, 12, 800];

for (let i = 0; i < lista.length; i++) {
    console.log(lista[i] * 2);
}

// For of 

for (let valor of lista) {
    console.log(valor);
}

// For each

lista.forEach(valor => {
    console.log(valor);
});

// For in

let persona = {
    nombre: "gorka",
    apellido: "Villar",
    edad: 34,
    isDeveloper: true
};

console.log(persona.nombre);

let prop = "edad";
console.log(persona[prop]);

for (let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad]);
}

// Bucles while
let i = 0;
let max = 10;

while (i < max) {
    i++;
    console.log(i);
}

i = 0;

do {
    console.log(i);
    i++;
} while (i < max);