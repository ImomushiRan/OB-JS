/* import { suma, eleva, nombre, nombre1 } from './modulos/matematicas.js'; */
import * as moduloMatematicas from './modulos/matematicas.js';
import getAutor, { libro} from './modulos/literatura.js';


const sum = moduloMatematicas.suma(4, 12);
console.log(sum);

const potencia = moduloMatematicas.eleva(2, 12);
console.log(potencia);
/* const sum; */

console.log(moduloMatematicas.nombre);
console.log(moduloMatematicas.nombre1);

console.log(getAutor());
console.log(libro);