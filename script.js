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

function setGoogleTranslateCookie(lang) {
    document.cookie = `googtrans=/en/${lang};path=/;domain=${window.location.hostname}`;
}

document.addEventListener('DOMContentLoaded', function () {
    const userLang = navigator.language || navigator.userLanguage;
    const langCode = userLang.split('-')[0];
    setGoogleTranslateCookie(langCode);
});