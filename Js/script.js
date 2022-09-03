const menuLinks = document.querySelectorAll('.menu .links a');
const menuLinksMobile = document.querySelectorAll('.menu .links-mobile a');

const menuMobile = document.querySelector('.menu-mobile');
const linksMobile = document.querySelector('.links-mobile');
let menuMain = menuLinks;

verificaMedia();
window.addEventListener('resize', verificaMedia);


function verificaMedia() {
    if (window.matchMedia('(max-width:920px)').matches) {
        console.log('tela 920px')
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

        console.log("meidia")
        linksMobile.appendChild(linkIcones);
        
    }
    else {
        const menu = document.querySelector('.menu');
        menu.insertBefore(linkIcones, menuMobile);
        console.log('teste1');
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


