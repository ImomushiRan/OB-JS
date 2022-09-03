const fechaHoy = new Date();
const fechaNacimiento = new Date("October 14, 1996");
let masTarde = fechaHoy > fechaNacimiento;
let nacimientoDia = fechaNacimiento.getDate();
let nacimientoMes = fechaNacimiento.getMonth();
let nacimientoYear = fechaNacimiento.getFullYear();

console.log(nacimientoDia, nacimientoMes, nacimientoYear);
console.log(masTarde);
console.log(fechaNacimiento);