const boton = document.querySelector('.btn');

console.log(boton);

boton.addEventListener('click', () => {
    /* alert('Se ha hecho click'); */
    /* confirm('Estas de acuerdo?') && console.log('ok'); */
    /* confirm('Estas de acuerdo?') ? console.log('ok') : console.log('no'); */
    const respuesta = confirm('Seguro?');
    if (respuesta) {
        console.log('Ok')
    } else {
        console.log('No')
    }
})

const botonInfo = document.querySelector('.info');

botonInfo.addEventListener('click', () => {
    const nombre = prompt('Cual es tu nombre?')
    if (nombre) {
        console.log('Tu nombre es ' + nombre);
    } else {
        console.log("No has introducido nada");
    }
})

const lista = [{
    nombre: 'Gorka',
    edad: 34
},{
    nombre: 'Julen',
    edad: 21
},{
    nombre: 'Amaia',
    edad: 30
}]

/* console.log(lista); */
console.table(lista);