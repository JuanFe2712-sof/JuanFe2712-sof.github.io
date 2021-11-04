document.addEventListener('DOMContentLoaded', function () {
    let imagenes = [
        { img: '/IMG/6 Sesión Henry/DSC_0790.JPG' },
        { img: '/IMG/6 Sesión Henry/DSC_0780.JPG' },
        { img: '/IMG/6 Sesión Henry/DSC_0837.JPG' },
        { img: '/IMG/6 Sesión Henry/DSC_0798.JPG' },
        { img: '/IMG/6 Sesión Henry/DSC_0840.JPG' },
        { img: '/IMG/6 Sesión Henry/DSC_0843.JPG' },
        { img: '/IMG/6 Sesión Henry/DSC_0841.JPG' },
        { img: '/IMG/6 Sesión Henry/DSC_0938.JPG' },
        { img: '/IMG/6 Sesión Henry/DSC_0924.JPG' },
        { img: '/IMG/6 Sesión Henry/DSC_0932.JPG' },
        { img: '/IMG/6 Sesión Henry/DSC_0847.JPG' },
        { img: '/IMG/6 Sesión Henry/DSC_0895.JPG' },
        { img: '/IMG/6 Sesión Henry/DSC_0929.JPG' },
        { img: '/IMG/6 Sesión Henry/DSC_0917.JPG' },
        { img: '/IMG/6 Sesión Henry/DSC_0792.JPG' },
        { img: '/IMG/6 Sesión Henry/DSC_0922.JPG' },
        { img: '/IMG/6 Sesión Henry/DSC_0846.JPG' },
        { img: '/IMG/6 Sesión Henry/DSC_0804.JPG' },
        { img: '/IMG/6 Sesión Henry/DSC_0891.JPG' },
        { img: '/IMG/6 Sesión Henry/DSC_0785.JPG' },
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