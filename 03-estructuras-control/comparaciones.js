// Comparaciones

// Igualdad

if (5 == 5) {
    console.log("5 es igual a 5")
}

if (5 === 5) {
    console.log("5 es muy igual a 5")
}

let a = 5;
console.log(typeof a);
let b = "5";
console.log(typeof b);

// == Solo compara el valor
// === Compara el valor y el tipo

if (a == b) {
    console.log("a es igual a b - Debil");
}

if (a === b) {
    console.log("a es igual a b - Fuerte");
}

let c = 4;
let d = "4";

if (c != d) {
    console.log("c es diferente a b - debil");
}

if (c !== d) {
    console.log("c es diferente a b - Fuerte");
}

// Comparaciones mayor que y menor que
let max = 10;
let min = 5;

if (max > min) {
    console.log("max es mayor que min");
}

if (max >= min) {
    console.log("max es mayor o igual que min");
}

if (4 < min) {
    console.log("max es menor que min");
}

if (5 <= min) {
    console.log("max es menor o igual que min");
}

