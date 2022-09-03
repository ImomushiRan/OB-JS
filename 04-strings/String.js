// Sesion 4 - Strings (cadena de caracteres)
let str = "hola soy un texto";
let str_sng = 'Hola soy un texto con comillas simples';
let str_dbl = "Hola soy un texto con comillas dobles";

console.log(str_sng);
console.log(str_dbl);

let str_comillas = "El otro me dijo literalmente \"ve a sacar la basura\"";
let str_comillas_simples = 'El otro dia me dijo literalmente \'ve a sacar la basura\'';
let str_comillas_dobles = "El otro dia me dijo literalmente 've a sacar la basura'";
let str_comillas_simples_2 = 'El otro dia me dijo literalmente "ve a sacar la basura"';

console.log(str_comillas);
console.log(str_comillas_simples);
console.log(str_comillas_dobles);
console.log(str_comillas_simples_2);

// backticks 
let str_backticks = `Hola esto es un string con backticks`; 

console.log(str_backticks);

let nombre = "Gorka";
let saludo = `Hola, ${nombre} bienvenido`;

console.log(saludo);

// Plantillas HTML
let plantilla = `
<html>
    <h1>Pagina web de ${nombre} </h1>
    <p>Este es un párrafo</p>
</html>
`
console.log(plantilla);

// Introduccion de variables en html
let libros = ["Empieza por el porque", "El monje que vendio su Ferrari", "El poder del ahora"];

// Metodos mas utilizados con cadenas de caracteres
let str1 ="Hola soy un string";

// Como obtenerl a longitud de un string
console.log(str1.length);

// Obtener partes de cadenas de caracteres
let slice_str = str1.slice(0, 10);
console.log(slice_str);

let substring_str = str.substring(5, 10);
console.log(substring_str);

let substr_str = str.substr(0, 10);
console.log(substr_str)

// reemplazar parte dle contenido de una cadena de texto
let cadena = "Hola mi nombre es Gorka";
console.log(cadena);

// solo reemplaza la primera
console.log(cadena.replace('Gorka', 'Miguel'));

let texto_largo = "Tito no es un mono cualquiera. A tito no le gusta trepar por los arboles y odia comer platanos. El prefiere pasar por el cosque, oler las flores y recoger las nueces que se caen de los arboles"

console.log(texto_largo.replace('los', 'cinco'));

// Al utilizar la expresion regular /g (global), reemplaza todas las instancias
console.log(texto_largo.replace(/los/g, 'cinco'));

// Convertir cadena en mayusculas
let input = "Escorpio";
let db = "escorpio";
console.log(input.toLowerCase() === db.toLowerCase());

// Convertir cadena en minusculas
console.log(input.toUpperCase() === db.toUpperCase());

// Formas de concatenar dos cadenas de caracteres
let cad1 = "Hola soy la primera cadena.";
let cad2 = "Y yo soy la segunda cadena.";
console.log(cad1.concat(" ",cad2));
console.log(cad1 + " " + cad2);
console.log(`${cad1} ${cad2}}`);

// Eliminar espacios al inicio y al final
let cad3 = " Hola soy un string con espacios al final.  ";
console.log(cad3.length);

console.log(cad3.trim().lenght);
console.log(cad3.trimStart().lenght);
console.log(cad3.trimEnd().lenght);

// Obtener el caracter que hay en cierta posicion
let cad4 = "Hola soy el string numero 4"; // ["H", "o", "l", "a"]

console.log(cad4.charAt(5));
console.log(cad4[5]);

// Obtener la posicion de una palabra dentro de una cadena
let cad5 = "Hola soy Gorka y me gusta el surk";
console.log(cad5.indexOf("Gorka"));
console.log(cad5.charAt(9));
console.log(str.lastIndexOf("Gorka"));

// Metodos de cadenas de texto
// https://regexr.com

console.log(texto_largo.match(/no/g));

// Existe la palabra
console.log(texto_largo.includes("terremoto"));

// Saber si empieza con palabra
console.log(texto_largo.startsWith("Tito no es un mono"));

// Saber si termina con palabra
console.log(texto_largo.endsWith("arboles"));