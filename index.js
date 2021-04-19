const preloader = document.querySelector('.preloader')

window.addEventListener('load', () => {
    preloader.classList.add('hide-preloader');
})

const main = document.querySelector('.app')

const banner = document.querySelector('.banner')

window.onload = () => {
    main.classList.add('view-content')
    banner.classList.add('swipe-up')
}

const r = rolly({
    view: document.querySelector('.app'),
    native: true,
});
r.init();

AOS.init({
    duration: 1500 //global duration
});

const header = document.querySelector('.header')
const btn = document.querySelector('.nav-toggle')

btn.addEventListener('click', () => header.classList.toggle("open"))

window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;
    const navHeight = header.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        header.style.backgroundColor = "#000";
    }

    else {
        header.style.backgroundColor = "transparent";
    }
})