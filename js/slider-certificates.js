"use strict"
//------------------------------------------------------------------------
// Слайдер certificates

const slidesC = $(".slider__slide-certificates"),
    sliderBodyC = $(".slider-certificates"),
    dotsC = $(".dots__dot-certificates"),
    dotsBodyC = $(".dots__body-certificates"),
    containerWidthC = $(".C").width();

let indexC = 0;
let indexDotC = 0;
let slidesArrC = [];
let slidesLengthC = $(slidesC).length;
let dotsLengthC = $(dotsC).length;
let limitSlidesC;
let limitDotsC = 7;
let limitSlidesIndexC = 0;
let zIndex = 1;

// console.log($(".container-certificates").width());
// console.log($(slidesC).length);

const setZIndexSlides = () => {
    for (let i = 0; i < slidesLengthC - 1; i++) {
        $(slidesC[i]).css('z-index', `${slidesLengthC - i}`);
    }
}

const createDotsC = () => {
    $(dotsBodyC).empty();
    if (slidesLengthC >= limitDotsC) {
        for (let i = 0; i < limitDotsC; i++) {
            $(dotsBodyC).append('<span class="dots__dot dots__dot-certificates"></span>');
        }
    } else if (slidesLengthC < limitDotsC) {
        let widthC = 13 + (slidesLengthC - 1) * 10 + (slidesLengthC - 1) * 6;
        $(dotsBodyC).width(widthC);
        for (let i = 0; i < slidesLengthC; i++) {
            $(dotsBodyC).append('<span class="dots__dot dots__dot-certificates"></span>');
        }
    }
};

const activeSlideC = (n) => {
    $(slidesC[n]).addClass('slider__slide-certificates-active');
    zIndex = $(slidesC[n]).css('z-index');
    $(slidesC[n]).css('z-index', `${slidesLengthC + 3}`);
    // console.log(zIndex);
};

const removeSlideC = (n) => {
    $(slidesC[n]).removeClass('slider__slide-certificates-active');
};

const removeSlidesC = () => {
    for (let i = 0; i < slidesLengthC; i++) {
        if ($(slidesC[i]).hasClass('slider__slide-certificates-active')) {
            $(slidesC[i]).css('z-index', `${zIndex}`);
            removeSlideC(i);
        }
    }
};

const activeDotC = (n) => {
    $(dotsBodyC).children().each(function (i, elem) {
        $(elem).removeClass("dots__dot-active");
        if (i == n) $(elem).addClass("dots__dot-active");
    });
};

const activeDotsC = () => {
    for (let i = 0; i < slidesLengthC; i++) {
        activeDotC(i);
    }
};

const removeDotC = (n) => {
    $(dotsBodyC).each(function (i, elem) {
        if (i == n) $(elem).removeClass("dots__dot-active");
    });
};

const removeDotsC = () => {
    for (let i = 0; i < slidesLengthC; i++) {
        removeDotC(i);
    }
};

const activeMinFirstDotC = () => {
    $(dotsBodyC).find(':first-child').addClass("dots__dot-min");
};

const activeMinLastDotC = () => {
    $(dotsBodyC).find(':last-child').addClass("dots__dot-min");
};

const activeMinDotsC = () => {
    activeMinFirstDotC();
    activeMinLastDotC();
};

const removeMitFirstDotC = () => {
    $(dotsBodyC).find(':first-child').removeClass("dots__dot-min");
};

const removeMitLastDotC = () => {
    $(dotsBodyC).find(':last-child').removeClass("dots__dot-min");
};

const removeMinDotsC = () => {
    removeMitFirstDotC();
    removeMitLastDotC();
};

const downloadSlidesC = () => {
    zIndex = 1;
    setZIndexSlides();
    indexC = 0;
    indexDotC = 0;
    removeSlidesC();
    activeSlideC(indexC);
    indexC++;
    createDotsC();
    removeDotsC();
    activeDotC(indexDotC);
    indexDotC++;
}

const nextDotC = () => {
    if (slidesLengthC <= limitDotsC) {
        // console.log(ind + '-1');
        // indexDotC = ind;
        removeDotsC();
        activeDotC(indexDotC);
        indexDotC++;
        // console.log(indexDotC);
    } else if (slidesLengthC > limitDotsC) {
        if (indexDotC < limitDotsC) {
            // console.log(ind + '-2');
            // indexDotC = ind;
            removeDotsC();
            activeDotC(indexDotC);
            indexDotC++;
            // console.log(indexDotC);
        } else if (indexDotC >= limitDotsC && indexDotC < slidesLengthC - 1) {
            // console.log(ind + '-3');
            let k = 0;
            if (indexDotC % 2 == 0) k = 5;
            if (indexDotC % 2 != 0) k = 4;
            removeMinDotsC();
            activeMinDotsC();
            removeDotsC();
            activeDotC(k);
            // indexDotC = ind;
            indexDotC++;
            // console.log(indexDotC);
        } else if (indexDotC >= limitDotsC && indexDotC == slidesLengthC - 1) {
            let l = 0;
            // console.log(ind + '-4');
            l = 6;
            removeMinDotsC();
            activeMinFirstDotC();
            removeDotsC();
            activeDotC(l);
            // indexDotC = ind;
            indexDotC++;
        }
    }
}

const nextSlideC = () => {
    $(slidesC).css('transition', 'none')
    if (indexC == slidesLengthC) {
        downloadSlidesC();
        return;
    }

    removeSlidesC();
    activeSlideC(indexC);
    nextDotC();
    indexC++;
    // indexDotC++;
};

downloadSlidesC();

$('.slider__link-certificates').on('click', (e) => {
    e.preventDefault();
});

const popupE = $('#popup-e');

let setIntervalIdC = setInterval(nextSlideC, 4000);
let zIndexHover = 0;
let zIndexClick = 0;
let slideHover;
let slideClick;
let hoverSlidesC = false;
let lockSlidesC = false;

function handlerInC() {
    slideHover = $(this);
    $(slideHover).css('transition', 'all 2s ease');
    zIndexHover = $(slideHover).css('z-index');
    $(slideHover).css('z-index', `${slidesLengthC + 2}`);
    clearInterval(setIntervalIdC);
    hoverSlidesC = true;
    lockSlidesC = true;
}

function handlerOutC() {
    if (hoverSlidesC) {
        $(slideHover).css('z-index', `${zIndexHover}`);
        setIntervalIdC = setInterval(nextSlideC, 4000);
        hoverSlidesC = false;
        lockSlidesC = false;
    }
    lockSlidesC = true;
}


function clickSlideC() {
    slideClick = $(this);
    $(slideClick).css('transition', 'all 2s ease');
    zIndexHover = $(slideClick).css('z-index');
    $(slideClick).css('z-index', `${slidesLengthC + 2}`);
    clearInterval(setIntervalIdC);
    hoverSlidesC = false;
    lockSlidesC = true;
}

function unlockSlidesC() {
    if (lockSlidesC) {
        $(slideClick).css('z-index', `${zIndexHover}`);
        setIntervalIdC = setInterval(nextSlideC, 3000);
        lockSlidesC = false;
    }
}

$(slidesC).on('mouseenter', handlerInC).on('click', clickSlideC).on('mouseleave', handlerOutC);

