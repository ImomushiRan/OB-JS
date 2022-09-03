const obj = {
    nombre: "George",
    apellido: "Villarroel",
    edad: "25",
    altura: 181,
    esDesarrollador: true
};

let edad = obj.edad;
console.log(edad);

const lista = [obj, {
    nombre: "Pri",
    apellido: "Jaque",
    edad: "23",
    altura: 165,
    esDesarrollador: true
}, {
    nombre: "Kait",
    apellido: "Savedra",
    edad: "25",
    altura: 152,
    esDesarrollador: true
}];

console.log(lista);

lista.sort ((a, b) => a.edad - b.edad);

console.log(lista);