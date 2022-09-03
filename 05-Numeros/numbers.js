// Numbers
// Declaracion de variables numericas (Enteros y decimales)
let a = 5;

console.log(a);

let b = 0.1;

console.log(b);

// Precision 
let c = 0.2;

console.log(b + c);

// Pequeño truco para obtener valores reales
console.log(Math.round((0.1 + 0.2) * 100)/100);


// Principales operaciones aritmeticas
a = 3.5;
b = 4.8;

// suma (+)
console.log(a + b);
// Resta (-)
console.log(a - b);
// Multiplicacion (*)
console.log(a * b);
// Division (/)
console.log(a / b);

// Representacion de los numeros en cadenas de texto
console.log(typeof a);
let a_s = a.toString();

console.log(a_s);
console.log(typeof a_s);

// Redondeo de numeros decimales
c = 3.3;
let d = c * 3;

console.log(d);

// .toFixed(x) - Limitar el numero de decimales al valor x 
console.log(d.toFixed(4));
console.log(typeof d.toFixed(4));

let e = 1839.123456789;
let f = 2213556153215;
console.log(e.toFixed(2));
console.log(f.toFixed(2));

// .toPrecision(x) - Limita el numero de cifras significativas
console.log(e.toPrecision(7));
console.log(f.toPrecision(7));

console.log(typeof f.toPrecision(7));

// Operador .valueOf() - Obtener valores numericos a partir de literales
a = 2;
let g = new Number(3);

console.log(a);
console.log(g);
console.log(a + g);
console.log(a.valueOf() + g.valueOf());

console.log(g.valueOf());

let str = new String("Hola soy un string");
console.log(str);
console.log(str.valueOf());

// NaN - Infinity (Not a Number)
let n = Number('adios');
console.log(n);
console.log(isNaN(n));

let numerador = 19;
let divisor = 0;
let divisor_2 = null;

console.log(numerador / divisor);
console.log(numerador / divisor_2);

// Como convertir los string a valores numericos con Number, parseInt y parseFloat
let numero = '5.89';
let num2 = 17.2

console.log(typeof numero);
console.log(numero + num2); // Error de concepto

console.log(Number(numero) + num2);

console.log(parseInt(numero));
console.log(parseFloat(numero));

let num3 = 4
console.log(parseInt(num3));
console.log(parseFloat(num3));

// Numeros hexadecimales
let numHex = '0x3a5b7';
console.log(parseInt(numHex));

// Obtener los valores maximo y minimo en Javascript
let min_precision = Number.EPSILON;
let min_value = Number.MIN_VALUE;
let max_value = Number.MAX_VALUE;

console.log(min_precision);
console.log(min_value);
console.log(max_value);

