// Como obtener una lista a partir dde otra .slice()
const array = ["hola", 1, 2, 3, true, null, "adios"]; 

// No modifica el valor del array
console.log(array.slice(1,3));
console.log(array);
const array2 = array.slice(2, 5);

const array3 = array.slice(2, -2);
console.log(array3);

console.log(array2);