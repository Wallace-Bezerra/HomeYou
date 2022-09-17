const menuLinks = document.querySelectorAll('.menu .links a');
const menuLinksMobile = document.querySelectorAll('.menu .links-mobile a');

const menuMobile = document.querySelector('.menu-mobile');
const linksMobile = document.querySelector('.links-mobile');
let menuMain = menuLinks;

verificaMedia();
window.addEventListener('resize', verificaMedia);


function verificaMedia() {
    if (window.matchMedia('(max-width:920px)').matches) {
        menuMain = menuLinksMobile;
    }
    else {
        menuMain = menuLinks;
        linksMobile.classList.remove("active");
    }
    menuMain.forEach((item) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const href = item.getAttribute('href')
            const section = document.querySelector(href);
            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            })
        })
    });

    const linkIcones = document.querySelector(".links-icones");
    if (window.matchMedia('(max-width:480px)').matches) {
        linksMobile.appendChild(linkIcones);
    }
    else {
        const menu = document.querySelector('.menu');
        menu.insertBefore(linkIcones, menuMobile);
    }
}

//menu mobile

menuMobile.addEventListener('click', () => {
    linksMobile.classList.toggle("active");
    const links = Array.from(linksMobile.children);
    links.forEach((item) => {
        item.addEventListener('click', () => {
            linksMobile.classList.remove("active");
        })
    })
})

// modal

const btnContato = document.querySelectorAll(".js-modal");
const modal = document.querySelector(".modal-contact")
const btnClose = document.querySelector(".btn-close");
btnContato.forEach((item) => {
    item.addEventListener("click", (event) => {
        modal.classList.add("active");
    })
})
btnClose.addEventListener("click", (event) => {
    modal.classList.remove("active");
})

// modal.children[0].children[0].addEventListener("click", (event) => {
//     event.stopPropagation();
// })
modal.children[0].addEventListener("click", (event) => {
    if (event.currentTarget === event.target) {
        modal.classList.remove("active");
    }
})

// footer logo 
const footerLogo = document.querySelector(".footer-section .logo img")
footerLogo.addEventListener("click", () => {
    window.scrollTo({
        behavior: "smooth",
        top: 0
    })
})

// swiper

const swiper = new Swiper(".gallery-swiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        200: {
            slidesPerView: 1,
        },
        420: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        700: {
            slidesPerView: 3,
        }
    }

});

//animation

const animateJS = document.querySelectorAll(".animate-js");
animate();
window.addEventListener("scroll", animate);

function animate() {
    animateJS.forEach((item) => {

        if ((item.getBoundingClientRect().top) < window.innerHeight * 0.6) {
            item.classList.add("animation");
        }
    })

}
