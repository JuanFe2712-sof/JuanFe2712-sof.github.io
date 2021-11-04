document.addEventListener('DOMContentLoaded', function () {
    let imagenes = [
        { img: '/IMG/7 Sesión Sofia/DSC_0818.JPG' },
        { img: '/IMG/7 Sesión Sofia/DSC_0851.JPG' },
        { img: '/IMG/7 Sesión Sofia/DSC_0965.JPG' },
        { img: '/IMG/7 Sesión Sofia/DSC_0873.JPG' },
        { img: '/IMG/7 Sesión Sofia/DSC_0866.JPG' },
        { img: '/IMG/7 Sesión Sofia/DSC_0830.JPG' },
        { img: '/IMG/7 Sesión Sofia/DSC_0874.JPG' },
        { img: '/IMG/7 Sesión Sofia/DSC_0863.JPG' },
        { img: '/IMG/7 Sesión Sofia/DSC_0881.JPG' },
        { img: '/IMG/7 Sesión Sofia/DSC_0954.JPG' },
        { img: '/IMG/7 Sesión Sofia/DSC_0858.JPG' },
        { img: '/IMG/7 Sesión Sofia/DSC_0835.JPG' },
        { img: '/IMG/7 Sesión Sofia/DSC_0869.JPG' },
        { img: '/IMG/7 Sesión Sofia/DSC_0874.JPG' },
        { img: '/IMG/7 Sesión Sofia/DSC_0821.JPG' },
        { img: '/IMG/7 Sesión Sofia/DSC_0946.JPG' },
        { img: '/IMG/7 Sesión Sofia/DSC_0960.JPG' },
        { img: '/IMG/7 Sesión Sofia/DSC_0864.JPG' },
        { img: '/IMG/7 Sesión Sofia/DSC_0953.JPG' },
        { img: '/IMG/7 Sesión Sofia/DSC_0954.JPG' },
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