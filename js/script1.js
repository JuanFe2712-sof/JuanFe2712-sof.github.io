document.addEventListener('DOMContentLoaded', function () {
    let imagenes = [
        { img: '/IMG/henry/_DSC0217.JPG' },
        { img: '/IMG/henry/_DSC0183.JPG' },
        { img: '/IMG/henry/_DSC0216.JPG' },
        { img: '/IMG/henry/_DSC0274.JPG' },
        { img: '/IMG/henry/_DSC0117.JPG' },
        { img: '/IMG/henry/_DSC0169.JPG' },
        { img: '/IMG/henry/_DSC0288.JPG' },
        { img: '/IMG/henry/_DSC0225.JPG' },
        { img: '/IMG/henry/_DSC0225.JPG' },
        { img: '/IMG/henry/_DSC0280.JPG' },
        { img: '/IMG/henry/_DSC0116.JPG' },
        { img: '/IMG/henry/_DSC0165.JPG' },
        { img: '/IMG/henry/_DSC0214.JPG' },
        { img: '/IMG/henry/_DSC0299.JPG' },
        { img: '/IMG/henry/_DSC0229.JPG' },
        { img: '/IMG/henry/_DSC0205.JPG' },
        { img: '/IMG/henry/_DSC0307.JPG' },
        { img: '/IMG/henry/_DSC0207.JPG' },
        { img: '/IMG/henry/_DSC0182.JPG' },
        { img: '/IMG/henry/_DSC0284.JPG' },
    ]
    let contador = 0;
    const contenedor = document.querySelector('.slide-show');
    const overlay = document.querySelector('.overlay');
    const galeria_imagenes = document.querySelectorAll('.galeria img');
    var img_show = document.querySelector('.slide-show img');
    console.log(img_show)

    contenedor.addEventListener('click', function (event) {
        let atras = contenedor.querySelector('.atras'),
            adelante = contenedor.querySelector('.adelante'),
            img = contenedor.querySelector('img'),
            tgt = event.target;

        if (tgt == atras) {
            if (contador > 0) {
                img.src = imagenes[contador - 1].img;
                contador--;
            } else {
                img.src = imagenes[imagenes.length - 1].img;
                contador = imagenes.length - 1;
            }
        } else if (tgt == adelante) {
            if (contador < imagenes.length - 1) {
                img.src = imagenes[contador + 1].img;
                contador++;
            } else {
                img.src = imagenes[0].img;
                contador = 0;
            }
        }
    })

    Array.from(galeria_imagenes).forEach(img => {
        img.addEventListener('click', event => {
            const imagen_seleccionada=img.getAttribute('id')
            img_show.src = imagenes[imagen_seleccionada].img;
            contador = imagen_seleccionada;
            overlay.style.opacity = 1;
            overlay.style.visibility = 'visible';
        })
    })

    document.querySelector('.boton-cerrar').addEventListener('click', () => {
        overlay.style.opacity = 0;
        overlay.style.visibility = 'hidden';
    })
})