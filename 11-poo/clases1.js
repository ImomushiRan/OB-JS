// Clases
class Persona {
    nombre;
    edad;
    isDeveloper;
    constructor(nombre, edad, isDeveloper) {
        this.nombre = nombre
        this.edad = edad
        this.isDeveloper = isDeveloper
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años.`);
    }
}

const nueva_persona = new Persona('Gorka',34,true);
console.log(nueva_persona);
nueva_persona.saludo();

let numero = 60; // Initialize
console.log(typeof numero);

let persona_2 = new Persona("Maria", 34, false);
console.log(typeof persona_2);
console.log(persona_2 instanceof Persona);


// instanceof -> similar to typeof but for classes