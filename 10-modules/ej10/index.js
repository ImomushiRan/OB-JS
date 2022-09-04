import chalk from 'chalk';
import {multiplicacion, suma } from './controller.js';

const log = console.log;

let resultado = multiplicacion(suma(1, 2), suma(4, 5));
log(chalk.green(resultado))