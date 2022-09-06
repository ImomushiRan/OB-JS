const boton = document.getElementById('btn') 

boton.addEventListener('click', () => {
    alert('Click en el boton');
})

$(() => {
    $("#btn").click(() => {
        console.log('Hola, estoy usando jQuery')
    })
})