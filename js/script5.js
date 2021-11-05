sergiodocument.addEventListener('DOMContentLoaded', function () {
    let imagenes = [
        { img: '/IMG/sergio/DSC_0185.JPG' },
        { img: '/IMG/sergio/DSC_0298.JPG' },
        { img: '/IMG/sergio/DSC_0165.JPG' },
        { img: '/IMG/sergio/DSC_0309.JPG' },
        { img: '/IMG/sergio/DSC_0202.JPG' },
        { img: '/IMG/sergio/DSC_0774.JPG' },
        { img: '/IMG/sergio/DSC_0253.JPG' },
        { img: '/IMG/sergio/DSC_0198.JPG' },
        { img: '/IMG/sergio/DSC_0278.JPG' },
        { img: '/IMG/sergio/DSC_0326.JPG' },
        { img: '/IMG/sergio/DSC_0283.JPG' },
        { img: '/IMG/sergio/DSC_0293.JPG' },
        { img: '/IMG/sergio/DSC_0342.JPG' },
        { img: '/IMG/sergio/DSC_0303.JPG' },
        { img: '/IMG/sergio/DSC_0177.JPG' },
        { img: '/IMG/sergio/DSC_0169.JPG' },
        { img: '/IMG/sergio/DSC_0266.JPG' },
        { img: '/IMG/sergio/DSC_0293.JPG' },
        { img: '/IMG/sergio/DSC_0307.JPG' },
        { img: '/IMG/sergio/DSC_0178.JPG' },
        { img: '/IMG/sergio/DSC_0296.JPG' },
        { img: '/IMG/sergio/DSC_0339.JPG' },
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