class Persona {
    // Private -> # (Solo se puede acceder desde dentro de la clase)
    #nombre
    #edad

    //Protected -> _ (Solo se puede acceder desde dentro de la clase y clases descendientes)
    _isDeveloper = true;
    constructor(nombre, edad) {
        this.#nombre = nombre
        this.#edad = edad
    }

    saludo() {
        console.log(`Hola, mi nombre es ${this.#nombre}, tengo ${this.#edad} años.`);
    }

    obtenNombre() {
        return this.#nombre;
    }
    getEdad() {
        return this.#edad;
    }
    setEdad(nuevaedad) {
        this.#edad = nuevaedad;
    }
}

const persona = new Persona('Gorka', 70);
/* console.log(persona);
console.log(persona.nombre); */
persona.saludo();
console.log(persona.obtenNombre());
/* console.log(persona.#obtenEdad()); */
/* persona.nombre = "Adios";
console.log(persona.nombre); */
/* console.log(persona._isDeveloper); */

// Getter -> Metodos que nos permiten obtener atributos/metodos privados o protegidos
const edad = persona.getEdad();
console.log(edad);

// Setter -> Metodos que nos permiten cambiar atributos/metodos privados o protegidos
persona.setEdad(34);
console.log(persona.getEdad());