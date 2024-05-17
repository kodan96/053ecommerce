
// -------------------------------Element selectors------------------------------------------

const productSlider = document.querySelector('.gallery_mobile');
const images = productSlider.querySelectorAll('.product');
let currentIndex = 0;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');


// ----------------------------------Functions-----------------------------------------------
function showImage(index) {
    images.forEach((image, i) => {
        image.style.display = i === index? 'block' : 'none';
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function previousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}



// -------------------------Event listeners------------------------------------------------------
next.addEventListener('click', nextImage);

prev.addEventListener('click', previousImage);




