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

// Precarga de imágenes
function precargarImagenes() {
    imagenes.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

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
    precargarImagenes(); // Llama a la función de precarga
    swal({
        title: "PRINCESA ENOJONA",
        text: "GRACIAS POR REGALARME UN LINDO AÑO A TU LADO",
        icon: "success",
        buttons: false,
        timer: 5000,
        content: {
            element: "div",
            attributes: {
                style: "background-color: #98FF98; color: black; font-family: Arial; font-size: 16px; padding: 20px; border-radius: 10px; text-align: center;"
            }
        }
    });
    iniciarPresentacion();
};
