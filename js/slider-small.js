let slidesmallIndex = 0;
const slidesSmall = document.querySelectorAll('.carousel-item-small');

function showSlidesmall(index) {
    slidesSmall.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function moveSlidesmall(n) {
    slidesmallIndex += n;
    if (slidesmallIndex >= slidesSmall.length) {
        slidesmallIndex = 0;
    } else if (slidesmallIndex < 0) {
        slidesmallIndex = slidesSmall.length - 1;
    }
    showSlidesmall(slidesmallIndex);
}

function autoScroll() {
    moveSlidesmall(1);
}

setInterval(autoScroll, 5000); // Change slide every 5 seconds
showSlidesmall(slidesmallIndex);


