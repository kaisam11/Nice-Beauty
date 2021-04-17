const r = rolly({
    view: document.querySelector('.app'),
    native: true,
});
r.init();

AOS.init({
    duration: 1500 //global duration
});

const btn = document.querySelector('.nav-toggle')
const header = document.querySelector('.header')

btn.addEventListener('click', () => header.classList.toggle("open"))