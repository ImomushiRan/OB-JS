let listaCompras = ["huevo", "pollo", "arroz", "pimienta", "pan"];

listaCompras.push("Aceite de Girasol");
console.log(listaCompras);

listaCompras.pop();
console.log(listaCompras);

const listaPeliculas = [
    {name: "watchmen", director: "zack snyder", year:"2009"},
    {name: "v for vendetta", director: "james mcteigue", year:"2006"},
    {name: "joker", director: "todd philips", year:"2019"},
]

const listaReciente = listaPeliculas.filter (value => value.year >= 2010);

console.log(listaReciente);

const listaDirector = listaPeliculas.map(value => value.director);
console.log(listaDirector);
const listaTitulo = listaPeliculas.map(value => value.name);
console.log(listaTitulo);

const listaTituloD = listaTitulo.concat(listaDirector);
console.log(listaTituloD);

const listaSpread = [...listaTitulo, ...listaDirector];
console.log(listaSpread);