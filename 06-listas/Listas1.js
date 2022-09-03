// Como trabajar con listas (Arrays, arreglos, vectores...)
let var1 = 45;

let array = [1, 2, 3, 4, 5, 6];

let array1 = [var1, "hola", false, {id: 5}, null, undefined];
console.log(array1);

// Acceder a los valores de un array a traves de su posicion
// array[index] => 0, 1, 2, 3, 4, 5,....
console.log(array1[0]);
console.log(array1[1]);
console.log(array1[2]);
console.log(array1[3]);

// Metodos introducir nuevos valores en nuestros arrays
// .push() .unshift() => Mutan el valor de nuestro array
array.push("final", "final 2", 3); // Agregar al final
console.log(array);

array.unshift("Principio"); // Agregar al principio
console.log(array);

// Metodos eliminar nuevos valores en nuestros arrays
// .pop() .shift() => Mutan el valor de nuestro array
array.pop(); // eliminar al final
console.log(array);

array.shift(); // Eliminar al principio
console.log(array);

// Metodos eliminar, modificar o añadir nuevos valores en nuestros arrays
// .splice(x, y, z)
const array3 = [1, 2, 3, 4, 5, 6];

// Eliminar valores .splice (index, valoresAEliminar)
array3.splice(2, 2);
console.log(array3);

// Añadir valores .splice(Index, 0, valores)
array3.splice(2, 0, "hola");
console.log(array3);

// Añadir valores .splice(Index, 1, valor)
array3.splice(2, 1, 3, 4);
console.log(array3);