// Edits to change the background image, made on canvas. Image is called golfspirit-5.png path is image folder. 


// Also adds ability to scroll photos, from left to right to showcase them.
function scrollPhotos(direction) {
    const container = document.getElementById('photoScroll');
    const img = container.querySelector('img');
    const style = getComputedStyle(container);
    const gap = parseInt(style.gap) || 0;
    const scrollAmount = img.offsetWidth + gap;

    container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
}

const canvas = document.getElementById("background-img");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawBackground();
}

const img = new Image();
img.src = "img/golfspirit-5.png";
img.onload = () => {
    resizeCanvas();
};

function drawBackground() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the image slightly larger to cover blur edge artifacts
    const overshoot = 40; // pixels to extend beyond canvas edge
    ctx.filter = "blur(11px) brightness(0.8)";
    ctx.drawImage(
        img,
        -overshoot, -overshoot,
        canvas.width + overshoot * 2,
        canvas.height + overshoot * 2
    );
    ctx.filter = "none";
}

window.addEventListener("resize", resizeCanvas);
