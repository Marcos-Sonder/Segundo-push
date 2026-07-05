/*==================================================
                INICIALIZAR AOS
==================================================*/

if (typeof AOS !== "undefined") {

    AOS.init({

        duration: 1000,

        once: true,

        easing: "ease-in-out"

    });

}

/*==================================================
                BOTÓN SUBIR
==================================================*/

const btnArriba = document.getElementById("btnArriba");

if (btnArriba) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 250) {

            btnArriba.style.display = "flex";

        } else {

            btnArriba.style.display = "none";

        }

    });

    btnArriba.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}

/*==================================================
                    MÚSICA
==================================================*/

const audio = document.getElementById("audio");
const btnMusica = document.getElementById("btnMusica");

btnMusica.addEventListener("click", function () {

    if (audio.paused) {

        audio.play();

        btnMusica.innerHTML =
        '<i class="bi bi-pause-fill"></i> Pausar Música';

    } else {

        audio.pause();

        btnMusica.innerHTML =
        '<i class="bi bi-music-note-beamed"></i> Música';

    }

});

/*==================================================
            EFECTO CARTA
==================================================*/

const carta = document.querySelector(".carta");

if (carta) {

    window.addEventListener("load", () => {

        carta.animate(

            [

                {

                    opacity:0,

                    transform:"translateY(50px)"

                },

                {

                    opacity:1,

                    transform:"translateY(0)"

                }

            ],

            {

                duration:1200,

                easing:"ease-out"

            }

        );

    });

}

/*==================================================
            EFECTO BOTONES
==================================================*/

document.querySelectorAll(".btn").forEach((boton)=>{

    boton.addEventListener("mouseenter",()=>{

        boton.style.transform="translateY(-4px) scale(1.03)";

    });

    boton.addEventListener("mouseleave",()=>{

        boton.style.transform="translateY(0) scale(1)";

    });

});

/*==================================================
        PARALLAX SUAVE DEL FONDO
==================================================*/

document.addEventListener("mousemove",(e)=>{

    const fondo = document.querySelector(".fondo");

    if(fondo){

        const x = e.clientX / 60;

        const y = e.clientY / 60;

        fondo.style.transform =
        `translate(${x}px, ${y}px)`;

    }

});

/*==================================================
        APARICIÓN DEL TEXTO
==================================================*/

const textoCarta = document.getElementById("textoCarta");

if(textoCarta){

    textoCarta.style.opacity="0";

    textoCarta.style.transform="translateY(20px)";

    textoCarta.style.transition=".8s";

    window.addEventListener("load",()=>{

        setTimeout(()=>{

            textoCarta.style.opacity="1";

            textoCarta.style.transform="translateY(0)";

        },500);

    });

}