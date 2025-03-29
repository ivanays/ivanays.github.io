"use strict";
//------------------------------------------------
// Слайдер procedures body Для тела



const slidesB = $(".slider__slide-body"),
    sliderBodyB = $(".slider-body"),
    dotsB = $(".dots__dot-body"),
    dotsBodyB = $(".dots__body-body"),
    containerWidthB = $(".container-procedures").width();

let indexB = 0;
let indexBodyB = 0;
let indexDotB = 0;
let slidesArrB = [];
let slidesLengthB = $(slidesB).length;
let dotsLengthB = $(dotsB).length;
let limitSlidesB;
let limitDotsB = 7;
let limitSlidesIndexB = 0;

console.log($(".container-procedures").width());
console.log($(slidesB).length);

const getLimitSlidesB = () => {
    switch (containerWidthB) {
        case 1434:
            limitSlidesB = 4;
            break;
        case 1068:
            limitSlidesB = 3;
            break;
        case 702:
            limitSlidesB = 2;
            break;
        case 672:
            limitSlidesB = 3;
            break;
        case 438:
            limitSlidesB = 2;
            break;
        case 375:
            limitSlidesB = 1;
            break;
    }
}

const cloneLastSlideB = () => {
    let lastCloneB = $(slidesB).last().clone();
    $(lastCloneB).attr('id', 'lastCloneB');
    $(slidesB).parent().prepend(lastCloneB);
    console.log(lastCloneB);
}

const cloneFirstSlideB = () => {
    let firstCloneB = $(slidesB).first().clone();
    $(firstCloneB).attr('id', 'firstCloneB');
    $(slidesB).parent().append(firstCloneB);
    console.log(firstCloneB);
}


const downloadSlidesB = () => {
    removeSlidesB();
    indexB = 0;
    indexBodyB = 0;
    indexDotB = 0;
    slidesArrB = [];
    limitSlidesIndexB = 0;
    getLimitSlidesB();
    if (containerWidthB == 375) {
        if ($('#firstCloneB')) $('#firstCloneB').remove();
        if ($('#lastCloneB')) $('#lastCloneB').remove();
        cloneLastSlideB();
        if ($('#lastCloneB').hasClass('slider__slide-body-active')) {
            $('#lastCloneB').removeClass('slider__slide-body-active');
        }
        $('#lastCloneB').removeClass('slider__slide-active');
        $('#lastCloneB').addClass('slider__slide-active');
        activeSlideB(1);
    }
    for (let i = 0; i < limitSlidesB; i++) {
        activeSlideB(indexB);
        slidesArrB.push(indexB);
        indexB++;
    }
    removeSlidesBodyB();
    activeSlideBodyB(indexBodyB);
    indexBodyB++;
    createDotsB();
    removeDotsB();
    activeDotB(indexDotB);
    indexDotB++;
    limitSlidesIndexB = 1;
}

const createDotsB = () => {
    $(dotsBodyB).empty();
    if (slidesLengthB >= limitDotsB) {
        for (let i = 0; i < limitDotsB; i++) {
            $(dotsBodyB).append('<span class="dots__dot dots__dot-procedure dots__dot-body"></span>');
        }
    } else if (slidesLengthB < limitDotsB) {
        let widthB = 13 + (slidesLengthB - 1) * 10 + (slidesLengthB - 1) * 6;
        $(dotsBodyB).width(widthB);
        for (let i = 0; i < slidesLengthB; i++) {
            $(dotsBodyB).append('<span class="dots__dot dots__dot-procedure dots__dot-body"></span>');
        }
    }
};

const activeSlideB = (n) => {
    $(slidesB[n]).addClass('slider__slide-active');
};

const activeSlidesB = () => {
    for (let i = 0; i < slidesLengthB; i++) {
        activeSlideB(i);
    }
}

const activeSlideBodyB = (n) => {
    $(slidesB[n]).addClass('slider__slide-body-active');
};

const removeSlideBodyB = (n) => {
    $(slidesB[n]).removeClass('slider__slide-body-active');
};

const removeSlidesBodyB = (n) => {
    for (let i = 0; i < slidesLengthB; i++) {
        removeSlideBodyB(i);
    }
};

const removeSlideB = (n) => {
    $(slidesB[n]).removeClass('slider__slide-active');
};

const removeSlidesB = () => {
    for (let i = 0; i < slidesLengthB; i++) {
        removeSlideB(i);
    }
}

const activeDotB = (n) => {
    $(dotsBodyB).children().each(function (i, elem) {
        $(elem).removeClass("dots__dot-active");
        if (i == n) $(elem).addClass("dots__dot-active");
    });
};

const activeDotsB = () => {
    for (let i = 0; i < slidesLengthB; i++) {
        activeDotB(i);
    }
};

const removeDotB = (n) => {
    $(dotsBodyB).each(function (i, elem) {
        if (i == n) $(elem).removeClass("dots__dot-active");
    });
};

const removeDotsB = () => {
    for (let i = 0; i < slidesLengthB; i++) {
        removeDotB(i);
    }
};

const activeMinFirstDotB = () => {
    $(dotsBodyB).find(':first-child').addClass("dots__dot-min");
};

const activeMinLastDotB = () => {
    $(dotsBodyB).find(':last-child').addClass("dots__dot-min");
};

const activeMinDotsB = () => {
    activeMinFirstDotB();
    activeMinLastDotB();
};

const removeMitFirstDotB = () => {
    $(dotsBodyB).find(':first-child').removeClass("dots__dot-min");
};

const removeMitLastDotB = () => {
    $(dotsBodyB).find(':last-child').removeClass("dots__dot-min");
};

const removeMinDotsB = () => {
    removeMitFirstDotB();
    removeMitLastDotB();
};

const nextSlidesB = (ind) => {
    for (let i = 0; i < limitSlidesB; i++) {
        activeSlideB(ind);
        slidesArrB.push(ind);
        ind++;
        indexB = ind;
    }
}

const nextSlideBodyB = (ind) => {
    removeSlidesBodyB();
    activeSlideBodyB(ind);
    ind++;
    indexBodyB = ind;
}

const nextDotB = (ind) => {
    if (slidesLengthB <= limitDotsB) {
        // console.log(ind + '-1');
        indexDotB = ind;
        removeDotsB();
        activeDotB(indexDotB);
        indexDotB++;
    } else if (slidesLengthB > limitDotsB) {
        if (ind < limitDotsB) {
            // console.log(ind + '-2');
            indexDotB = ind;
            removeDotsB();
            activeDotB(indexDotB);
            indexDotB++;
        } else if (ind >= limitDotsB && ind < slidesLengthB - 1) {
            // console.log(ind + '-3');
            if (ind % 2 == 0) indexDotB = 5;
            if (ind % 2 != 0) indexDotB = 4;
            removeMinDotsB();
            activeMinDotsB();
            removeDotsB();
            activeDotB(indexDotB);
            indexDotB = ind;
            indexDotB++;
        } else if (ind >= limitDotsB && ind == slidesLengthB - 1) {
            // console.log(ind + '-4');
            indexDotB = 6;
            removeMinDotsB();
            activeMinFirstDotB();
            removeDotsB();
            activeDotB(indexDotB);
            indexDotB = ind;
            indexDotB++;
        }
    }
}

const nextSlideB = () => {

    if (indexBodyB == slidesLengthB) {
        downloadSlidesB();
        return;
    }

    if (limitSlidesIndexB != 0) {
        if (containerWidthB == 375) {
            if ($('#lastCloneB')) $('#lastCloneB').remove();
            removeSlidesB();
            activeSlideB(indexBodyB - 1);
            activeSlideB(indexBodyB);
            activeSlideB(indexBodyB + 1);
            nextSlideBodyB(indexBodyB);
            nextDotB(indexDotB);
            if (indexBodyB == slidesLengthB) {
                if ($('#firstCloneB')) $('#firstCloneB').remove();
                cloneFirstSlideB();
                $('#firstCloneB').addClass('slider__slide-active');
            }
            // console.log(indexBody);
            return;
        }
        for (let i = 0; i < limitSlidesB; i++) {

            if (indexBodyB < 25) {
                if (indexBodyB == limitSlidesB * limitSlidesIndexB) {
                    removeSlidesB();
                    slidesArrB = [];
                    indexB = 0;
                    if (slidesLengthB % limitSlidesB == 0) {
                        indexB = indexBodyB;
                    } else if (slidesLengthB % limitSlidesB != 0) {
                        let k = 0;
                        if (limitSlidesB == 4 && slidesLengthB - indexBodyB == 1) k = 3;
                        if (limitSlidesB == 4 && slidesLengthB - indexBodyB == 2) k = 2;
                        if (limitSlidesB == 4 && slidesLengthB - indexBodyB == 3) k = 1;
                        if (limitSlidesB == 3 && slidesLengthB - indexBodyB == 1) k = 2;
                        if (limitSlidesB == 3 && slidesLengthB - indexBodyB == 2) k = 1;
                        if (limitSlidesB == 2 && slidesLengthB - indexBodyB == 1) k = 1;
                        // console.log(k);
                        // console.log(indexBody);
                        indexB = indexBodyB - k;
                        // console.log(index);
                        // console.log(limitSlidesIndex);
                    }

                    nextSlidesB(indexB);
                    limitSlidesIndexB++;
                    // console.log(indexB);
                }

                nextSlideBodyB(indexBodyB);
                nextDotB(indexDotB);
                // console.log(indexBody);
                return;
            }
        }
    }
};

downloadSlidesB();

$('.menu__link-tab[href="#tab-b"]').on('click', (e) => {
    e.preventDefault();
    downloadSlidesB();
});

let setIntervalIdB = setInterval(nextSlideB, 3000);
let hoverSlidesB = false;
let lockSlidesB = false;

function handlerInB() {
    clearInterval(setIntervalIdB);
    hoverSlidesB = true;
    lockSlidesB = true;
}

function handlerOutB() {
    if (hoverSlidesB) {
        setIntervalIdB = setInterval(nextSlideB, 3000);
        hoverSlidesB = false;
        lockSlidesB = false;
    }
    lockSlidesB = true;
}

function clickSlideB() {
    clearInterval(setIntervalIdB);
    hoverSlidesB = false;
    lockSlidesB = true;
}

function unlockSlidesB() {
    if (lockSlidesB) {
        setIntervalIdB = setInterval(nextSlideB, 3000);
        lockSlidesB = false;
    }
}

$(slidesB).on('mouseenter', handlerInB).on('click', clickSlideB).on('mouseleave', handlerOutB);






