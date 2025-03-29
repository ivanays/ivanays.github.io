"use strict"
// Слайдер для акций slider-stock

const slidesS = $('.slider__slide-stock');
let indexS = 0;

const removeSlidesS = () => {
    for (let slideS of slidesS) {
        $(slideS).removeClass('slider__slide-stock-active');
    }
}

const activeSlideS = (n) => {
    removeSlidesS();
    $(slidesS[n]).addClass('slider__slide-stock-active');
}

const downloadSlideS = () => {
    indexS = 0;
    activeSlideS(indexS);
}

const nextSlideS = () => {
    if (indexS == $(slidesS).length - 1) {
        indexS = 0;
        activeSlideS(indexS);
    } else {
        indexS++;
        activeSlideS(indexS);
    }
}

let setIntervalIdS;
// let setIntervalIdS = setInterval(nextSlideS, 8000);

// downloadSlideS();
// setInterval(nextSlideS, 8000);
