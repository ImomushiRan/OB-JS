const secciones = document.querySelectorAll('.seccion');
const parrafos = document.querySelectorAll('.parrafo');
const bins = document.querySelectorAll('bin');
const bins2 = document.querySelectorAll('bin2');

parrafos.forEach(parrafo =>{
    parrafo.addEventListener('dragstart', event => {
        parrafo.classList.add('dragging');
        event.dataTransfer.setData('id', parrafo.id)
    })
    parrafo.addEventListener('dragend', event => {
        parrafo.classList.remove('dragging');
    })
})

secciones.forEach(seccion =>{
    seccion.addEventListener('dragover', event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = copy;
    })
    seccion.addEventListener('drop', event => {
        const id_parrafo = event.dataTransfer.getData('id');
        const parrafo = document.getElementById(id_parrafo);
        seccion.appendChild(parrafo);
    })
})

bins2.forEach(bin =>{
    bin.addEventListener('dragover', event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = move;
    })
    bin.addEventListener('drop', event => {
        const id_parrafo = event.dataTransfer.getData('id');
        const parrafo = document.getElementById(id_parrafo);
        bin.appendChild(parrafo)
    })
})