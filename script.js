const gallery = document.getElementById('galleryScroll');
const wrapper = document.getElementById('galleryWrapper');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');

// Duplicate images to allow continuous scrolling
gallery.innerHTML += gallery.innerHTML;

let speed = 0.5; // scroll speed
let paused = false;

function animateScroll() {
    if (!paused) {
        gallery.scrollLeft += speed;
        // Reset to start seamlessly
        if (gallery.scrollLeft >= gallery.scrollWidth / 2) {
            gallery.scrollLeft = 0;
        }
    }
    requestAnimationFrame(animateScroll);
}
animateScroll();

// Pause on hover
wrapper.addEventListener('mouseenter', () => paused = true);
wrapper.addEventListener('mouseleave', () => paused = false);

// Click to open fullscreen
gallery.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
    });
});

// Click to close fullscreen
lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

let lang = window.navigator.languages ? window.navigator.languages[0] : null;
lang = lang || window.navigator.language || window.navigator.browserLanguage || window.navigator.userLanguage;

let shortLang = lang;
if (shortLang.indexOf('-') !== -1)
    shortLang = shortLang.split('-')[0];

if (shortLang.indexOf('_') !== -1)
    shortLang = shortLang.split('_')[0];

console.log(lang, shortLang);