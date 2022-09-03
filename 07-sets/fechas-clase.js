// Trabajando con fechas
const fecha = new Date();

console.log(fecha);

const fecha2 = new Date(1987, 10, 20, 1, 23, 52, 192);

console.log(fecha2);

const fecha3 = new Date();
console.log(fecha3);

const fecha4 = new Date("October 13, 1979 12:14:04");
console.log(fecha4);

console.log(fecha < fecha2);

const fecha5 = new Date(1987, 10, 20, 1, 23, 52, 192);
console.log(fecha5);

console.log(fecha2 == fecha5);

console.log(fecha2.getTime() === fecha5.getTime());

// Obtener el dia, mes y el año de una fecha
// obtener el dia .getDate()

console.log(fecha2.getDate());

// Obtener el mes .getMonth() (0 - Enero, 11 - diciembre)
console.log(fecha2.getMonth());

// Obtener el año .getFullYear()
console.log(fecha2.getFullYear());
console.log(fecha2);

// .toLocaleDateString
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
console.log(fecha2.toLocaleDateString());