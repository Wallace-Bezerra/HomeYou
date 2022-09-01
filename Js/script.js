const menuLinks = document.querySelectorAll('.menu .links a');
const menuLinksMobile = document.querySelectorAll('.menu .links-mobile a');
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
}


//menu mobile
const menuMobile = document.querySelector('.menu-mobile');
const linksMobile = document.querySelector('.links-mobile');
menuMobile.addEventListener('click', () => {
    linksMobile.classList.toggle("active");
    const links = Array.from(linksMobile.children);
    links.forEach((item) => {
        item.addEventListener('click', () => {
            linksMobile.classList.remove("active");
        })
    })


})


