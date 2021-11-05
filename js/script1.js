document.addEventListener('DOMContentLoaded', function () {
    let imagenes = [
        { img: '/IMG/henry/3.JPG' },
        { img: '/IMG/henry/1.JPG' },
        { img: '/IMG/henry/4.JPG' },
        { img: '/IMG/henry/5.JPG' },
        { img: '/IMG/henry/6.JPG' },
        { img: '/IMG/henry/2.JPG' },
        { img: '/IMG/henry/7.JPG' },
        { img: '/IMG/henry/8.JPG' },
        { img: '/IMG/henry/8.JPG' },
        { img: '/IMG/henry/9.JPG' },
        { img: '/IMG/henry/10.JPG' },
        { img: '/IMG/henry/11.JPG' },
        { img: '/IMG/henry/12.JPG' },
        { img: '/IMG/henry/13.JPG' },
        { img: '/IMG/henry/14.JPG' },
        { img: '/IMG/henry/15.JPG' },
        { img: '/IMG/henry/16.JPG' },
        { img: '/IMG/henry/17.JPG' },
        { img: '/IMG/henry/18.JPG' },
        { img: '/IMG/henry/19.JPG' },
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