class Student {
    nombre;
    asignatures= ['Javascript', 'html', 'css'];

    constructor(nombre) {
        this.nombre = nombre;
    }

    obtenDatos() {
        return {nombre: this.nombre, asignatures: this.asignatures};
    }
}

estudiante1 = new Student('George');
estudiante1.obtenDatos();
/* objeto = estudiante1.obtenDatos(); */
/* console.log(objeto); */
/* console.log(estudiante1); */