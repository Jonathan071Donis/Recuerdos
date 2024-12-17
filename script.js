const imagenes = [
    'img/enojona1.jpg',
    'img/enojona2.jpg',
    'img/enojona3.jpg',
    'img/enojona4.jpg',
    'img/enojona5.jpg'
];

let indice = 0;
const imagenElement = document.getElementById('imagen');
const musica = document.getElementById('musica');

function cambiarImagen() {
    imagenElement.src = imagenes[indice];
    indice = (indice + 1) % imagenes.length;
}

function iniciarPresentacion() {
    cambiarImagen();
    setInterval(cambiarImagen, 5000);
}

document.getElementById('reproducir').addEventListener('click', () => {
    musica.play();
});

// Al cargar la página
window.onload = function() {
    swal({
        title: "PRINCESA ENOJONA",
        text: "GRACIAS POR REGALARME UN LINDO AÑO A TU LADO",
        icon: "success",
        buttons: false, // Eliminar el botón "OK"
        timer: 5000, // Dura 5 segundos
        content: {
            element: "div",
            attributes: {
                style: "background-color: #98FF98; color: black; font-family: Arial; font-size: 16px; padding: 20px; border-radius: 10px; text-align: center;"
            }
        }
    });
    iniciarPresentacion();
};
