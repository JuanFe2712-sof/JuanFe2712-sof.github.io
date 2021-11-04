document.addEventListener('DOMContentLoaded', function () {
    let imagenes = [
        { img: '/IMG/5 Sesion Carlox/DSC_0565.JPG' },
        { img: '/IMG/5 Sesion Carlox/DSC_0779.JPG' },
        { img: '/IMG/5 Sesion Carlox/DSC_0586.JPG' },
        { img: '/IMG/5 Sesion Carlox/DSC_0693.JPG' },
        { img: '/IMG/5 Sesion Carlox/DSC_0691.JPG' },
        { img: '/IMG/5 Sesion Carlox/DSC_0735.JPG' },
        { img: '/IMG/5 Sesion Carlox/DSC_0598.JPG' },
        { img: '/IMG/5 Sesion Carlox/DSC_0563.JPG' },
        { img: '/IMG/5 Sesion Carlox/DSC_0620.JPG' },
        { img: '/IMG/5 Sesion Carlox/DSC_0647.JPG' },
        { img: '/IMG/5 Sesion Carlox/DSC_0762.JPG' },
        { img: '/IMG/5 Sesion Carlox/DSC_0740.JPG' },
        { img: '/IMG/5 Sesion Carlox/DSC_0777.JPG' },
        { img: '/IMG/5 Sesion Carlox/DSC_0742.JPG' },
        { img: '/IMG/5 Sesion Carlox/DSC_0703.JPG' },
        { img: '/IMG/5 Sesion Carlox/DSC_0562.JPG' },
        { img: '/IMG/5 Sesion Carlox/DSC_0574.JPG' },
        { img: '/IMG/5 Sesion Carlox/DSC_0748.JPG' },
        { img: '/IMG//5 Sesion Carlox/DSC_0606.JPG' },
        { img: '/IMG/5 Sesion Carlox/DSC_0774.JPG' },
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