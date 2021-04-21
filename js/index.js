//preloader
const preloader = document.querySelector('.preloader')

window.addEventListener('load', () => {
    preloader.classList.add('hide-preloader');
})

//trasnition after loading
const main = document.querySelector('.app')
const banner = document.querySelector('.banner')

window.onload = () => {
    main.classList.add('view-content')
    banner.classList.add('swipe-up')
}

//smooth scroll
const r = rolly({
    view: document.querySelector('.app'),
    native: true,
});
r.init();

//Animation on scroll
AOS.init({
    duration: 1500
});

const header = document.querySelector('.header')
const btn = document.querySelector('.nav-toggle')

//nav on mobile
btn.addEventListener('click', () => header.classList.toggle("open"))

//nav open
window.addEventListener('scroll', () => {
    const scrollHeight = window.scrollY;
    const navHeight = header.getBoundingClientRect().height;

    if (scrollHeight > navHeight) {
        header.classList.add('fixed-header');
    }

    else {
        header.classList.remove('fixed-header');
    }
})