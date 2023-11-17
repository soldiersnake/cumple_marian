document.body.onload = function() {
    setInterval(changeBackgroundColor, 1200);
};

function changeBackgroundColor() {
    document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 75%)`;
}

document.addEventListener('DOMContentLoaded', (event) => {
    const music = document.getElementById('backgroundMusic');
    // Para reproducir automáticamente la música (nota: algunos navegadores pueden bloquearlo)
    music.play();

    // O, si prefieres, puedes usar un botón para controlar la reproducción
    document.getElementById('playButton').addEventListener('click', () => {
        if (music.paused) {
            music.play();
        } else {
            music.pause();
        }
    });
});

// Array con las rutas de tus imágenes
const images = [
    '/img/random/1.jpeg',
    '/img/random/2.jpeg',
    '/img/random/3.jpeg',
    '/img/random/4.jpeg',
    '/img/random/5.jpeg',
    '/img/random/6.jpeg',
    '/img/random/7.jpeg',
    '/img/random/8.jpeg',
    '/img/random/9.jpeg',
    '/img/random/10.jpeg',
    '/img/random/11.jpeg',
    '/img/random/12.jpeg',
    '/img/random/13.jpeg',
    '/img/random/14.jpeg',
    '/img/random/15.jpeg',
    '/img/random/16.jpeg',
    '/img/random/17.jpeg',
    '/img/random/18.jpeg',
    '/img/random/19.jpeg',
    '/img/random/20.jpeg',
    '/img/random/21.jpeg',
    '/img/random/22.jpeg',
    '/img/random/23.jpeg',
    '/img/random/24.jpeg',
    '/img/random/25.jpeg',
    '/img/random/26.jpeg',
    '/img/random/27.jpeg',
    '/img/random/28.jpeg',
    '/img/random/29.jpeg',
    '/img/random/30.jpeg',
    '/img/random/31.jpeg',
    '/img/random/32.jpeg',
    '/img/random/33.jpeg',
    '/img/random/34.jpeg',
    '/img/random/35.jpeg',
    '/img/random/36.jpeg',
    // Añade tantas rutas de imágenes como necesites
  ];
  
 // Esta función creará y mostrará imágenes aleatorias en la pantalla
function createRandomImage() {
    const container = document.getElementById('imageContainer');
    const img = document.createElement('img');
    img.style.position = 'absolute';
    img.style.opacity = 0; // Inicia invisible para la transición
    img.style.transition = 'opacity 2s ease-in-out'; // Transición suave para la opacidad

    // Selecciona una imagen aleatoria de tu array de imágenes
    const randomImage = images[Math.floor(Math.random() * images.length)];
    img.src = randomImage;

    // Asigna el tamaño y la rotación aleatorios antes de añadir al DOM para calcular la posición correctamente
    const randomSize = Math.random() * 100 + 35; // Tamaño aleatorio entre 25px y 125px
    img.style.width = `${randomSize}px`;
    img.style.transform = `rotate(${Math.random() * 360}deg)`;

    // Agrega la imagen al contenedor
    container.appendChild(img);

    // Calcula la posición después de que la imagen haya cargado para obtener las dimensiones correctas
    img.onload = function() {
        const maxTop = window.innerHeight - img.offsetHeight;
        const maxLeft = window.innerWidth - img.offsetWidth;
        img.style.top = `${Math.random() * maxTop}px`;
        img.style.left = `${Math.random() * maxLeft}px`;

        // Hace la imagen visible
        img.style.opacity = 1;

        // Elimina la imagen después de 3 segundos
        setTimeout(() => {
            img.style.opacity = 0; // Comienza la transición para desvanecer
            setTimeout(() => {
                container.removeChild(img); // Elimina la imagen después de que la transición haya finalizado
            }, 2000); // Espera 2 segundos para coincidir con la duración de la transición
        }, 3000); // 3 segundos antes de comenzar a desvanecerse
    };
}

//evento de la imagen aleatorea
document.addEventListener('DOMContentLoaded', (event) => {
    setInterval(createRandomImage, 1000); // Crea una imagen cada 1 segundo
});