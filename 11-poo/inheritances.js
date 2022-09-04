// Inheritance - Herencia
class Persona {
    constructor(nombre, edad) {
        this._nombre = nombre
        this._edad = edad
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`);
    }
}

class Desarrollador extends Persona {
    constructor(nombre, edad, lenguaje) {
        super(nombre, edad);
        this.lenguaje = lenguaje;
    }

    saludo() { // Override
        super.saludo()
        console.log(`Y soy desarrollador de ${this.lenguaje}`);
    }
}

const nuevodev = new Desarrollador('Gorka', 50, 'Javascript');
console.log(nuevodev);
nuevodev.saludo();

// Polimorfismo => Varias formas
