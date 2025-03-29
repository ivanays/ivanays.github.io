"use strict";
//------------------------------------------------
// Слайдер procedures face Для лица



const slidesF = $(".slider__slide-face"),
    sliderBodyF = $(".slider-face"),
    dotsF = $(".dots__dot-face"),
    dotsBodyF = $(".dots__body-face"),
    containerWidthF = $(".container-procedures").width();

let indexF = 0;
let indexBodyF = 0;
let indexDotF = 0;
let slidesArrF = [];
let slidesLengthF = $(slidesF).length;
let dotsLengthF = $(dotsF).length;
let limitSlidesF;
let limitDotsF = 7;
let limitSlidesIndexF = 0;

console.log($(".container-procedures").width());
console.log($(slidesF).length);

const getLimitSlidesF = () => {
    switch (containerWidthF) {
        case 1434:
            limitSlidesF = 4;
            break;
        case 1068:
            limitSlidesF = 3;
            break;
        case 702:
            limitSlidesF = 2;
            break;
        case 672:
            limitSlidesF = 3;
            break;
        case 438:
            limitSlidesF = 2;
            break;
        case 375:
            limitSlidesF = 1;
            break;
    }
}

const cloneLastSlideF = () => {
    let lastCloneF = $(slidesF).last().clone();
    $(lastCloneF).attr('id', 'lastCloneF');
    $(slidesF).parent().prepend(lastCloneF);
    console.log(lastCloneF);
}

const cloneFirstSlideF = () => {
    let firstCloneF = $(slidesF).first().clone();
    $(firstCloneF).attr('id', 'firstCloneF');
    $(slidesF).parent().append(firstCloneF);
    console.log(firstCloneF);
}


const downloadSlidesF = () => {
    removeSlidesF();
    indexF = 0;
    indexBodyF = 0;
    indexDotF = 0;
    slidesArrF = [];
    limitSlidesIndexF = 0;
    getLimitSlidesF();
    if (containerWidthF == 375) {
        if ($('#firstCloneF')) $('#firstCloneF').remove();
        if ($('#lastCloneF')) $('#lastCloneF').remove();
        cloneLastSlideF();
        if ($('#lastCloneF').hasClass('slider__slide-face-active')) {
            $('#lastCloneF').removeClass('slider__slide-face-active');
        }
        $('#lastCloneF').removeClass('slider__slide-active');
        $('#lastCloneF').addClass('slider__slide-active');
        activeSlideF(1);
    }
    for (let i = 0; i < limitSlidesF; i++) {
        activeSlideF(indexF);
        slidesArrF.push(indexF);
        indexF++;
    }
    removeSlidesBodyF();
    activeSlideBodyF(indexBodyF);
    indexBodyF++;
    createDotsF();
    removeDotsF();
    activeDotF(indexDotF);
    indexDotF++;
    limitSlidesIndexF = 1;
}

const createDotsF = () => {
    $(dotsBodyF).empty();
    if (slidesLengthF >= limitDotsF) {
        for (let i = 0; i < limitDotsF; i++) {
            $(dotsBodyF).append('<span class="dots__dot dots__dot-procedure dots__dot-face"></span>');
        }
    } else if (slidesLengthF < limitDotsF) {
        let widthF = 13 + (slidesLengthF - 1) * 10 + (slidesLengthF - 1) * 6;
        $(dotsBodyF).width(widthF);
        for (let i = 0; i < slidesLengthF; i++) {
            $(dotsBodyF).append('<span class="dots__dot dots__dot-procedure dots__dot-face"></span>');
        }
    }
};

const activeSlideF = (n) => {
    $(slidesF[n]).addClass('slider__slide-active');
};

const activeSlidesF = () => {
    for (let i = 0; i < slidesLengthF; i++) {
        activeSlideF(i);
    }
}

const activeSlideBodyF = (n) => {
    $(slidesF[n]).addClass('slider__slide-body-active');
};

const removeSlideBodyF = (n) => {
    $(slidesF[n]).removeClass('slider__slide-body-active');
};

const removeSlidesBodyF = (n) => {
    for (let i = 0; i < slidesLengthF; i++) {
        removeSlideBodyF(i);
    }
};

const removeSlideF = (n) => {
    $(slidesF[n]).removeClass('slider__slide-active');
};

const removeSlidesF = () => {
    for (let i = 0; i < slidesLengthF; i++) {
        removeSlideF(i);
    }
}

const activeDotF = (n) => {
    $(dotsBodyF).children().each(function (i, elem) {
        $(elem).removeClass("dots__dot-active");
        if (i == n) $(elem).addClass("dots__dot-active");
    });
};

const activeDotsF = () => {
    for (let i = 0; i < slidesLengthF; i++) {
        activeDotF(i);
    }
};

const removeDotF = (n) => {
    $(dotsBodyF).each(function (i, elem) {
        if (i == n) $(elem).removeClass("dots__dot-active");
    });
};

const removeDotsF = () => {
    for (let i = 0; i < slidesLengthF; i++) {
        removeDotF(i);
    }
};

const activeMinFirstDotF = () => {
    $(dotsBodyF).find(':first-child').addClass("dots__dot-min");
};

const activeMinLastDotF = () => {
    $(dotsBodyF).find(':last-child').addClass("dots__dot-min");
};

const activeMinDotsF = () => {
    activeMinFirstDotF();
    activeMinLastDotF();
};

const removeMitFirstDotF = () => {
    $(dotsBodyF).find(':first-child').removeClass("dots__dot-min");
};

const removeMitLastDotF = () => {
    $(dotsBodyF).find(':last-child').removeClass("dots__dot-min");
};

const removeMinDotsF = () => {
    removeMitFirstDotF();
    removeMitLastDotF();
};

const nextSlidesF = (ind) => {
    for (let i = 0; i < limitSlidesF; i++) {
        activeSlideF(ind);
        slidesArrF.push(ind);
        ind++;
        indexF = ind;
    }
}

const nextSlideBodyF = (ind) => {
    removeSlidesBodyF();
    activeSlideBodyF(ind);
    ind++;
    indexBodyF = ind;
}

const nextDotF = (ind) => {
    if (slidesLengthF <= limitDotsF) {
        // console.log(ind + '-1');
        indexDotF = ind;
        removeDotsF();
        activeDotF(indexDotF);
        indexDotF++;
    } else if (slidesLengthF > limitDotsF) {
        if (ind < limitDotsF) {
            // console.log(ind + '-2');
            indexDotF = ind;
            removeDotsF();
            activeDotF(indexDotF);
            indexDotF++;
        } else if (ind >= limitDotsF && ind < slidesLengthF - 1) {
            // console.log(ind + '-3');
            if (ind % 2 == 0) indexDotF = 5;
            if (ind % 2 != 0) indexDotF = 4;
            removeMinDotsF();
            activeMinDotsF();
            removeDotsF();
            activeDotF(indexDotF);
            indexDotF = ind;
            indexDotF++;
        } else if (ind >= limitDotsF && ind == slidesLengthF - 1) {
            // console.log(ind + '-4');
            indexDotF = 6;
            removeMinDotsF();
            activeMinFirstDotF();
            removeDotsF();
            activeDotF(indexDotF);
            indexDotF = ind;
            indexDotF++;
        }
    }
}

const nextSlideF = () => {

    if (indexBodyF == slidesLengthF) {
        downloadSlidesF();
        return;
    }

    if (limitSlidesIndexF != 0) {
        if (containerWidthF == 375) {
            if ($('#lastCloneF')) $('#lastCloneF').remove();

            removeSlidesF();
            activeSlideF(indexBodyF - 1);
            activeSlideF(indexBodyF);
            activeSlideF(indexBodyF + 1);
            nextSlideBodyF(indexBodyF);
            nextDotF(indexDotF);
            if (indexBodyF == slidesLengthF) {
                if ($('#firstCloneF')) $('#firstCloneF').remove();
                cloneFirstSlideF();
                $('#firstCloneF').addClass('slider__slide-active');
            }
            // console.log(indexBody);
            return;
        }
        for (let i = 0; i < limitSlidesF; i++) {

            if (indexBodyF < 25) {
                if (indexBodyF == limitSlidesF * limitSlidesIndexF) {
                    removeSlidesF();
                    slidesArrF = [];
                    indexF = 0;
                    if (slidesLengthF % limitSlidesF == 0) {
                        indexF = indexBodyF;
                    } else if (slidesLengthF % limitSlidesF != 0) {
                        let k = 0;
                        if (limitSlidesF == 4 && slidesLengthF - indexBodyF == 1) k = 3;
                        if (limitSlidesF == 4 && slidesLengthF - indexBodyF == 2) k = 2;
                        if (limitSlidesF == 4 && slidesLengthF - indexBodyF == 3) k = 1;
                        if (limitSlidesF == 3 && slidesLengthF - indexBodyF == 1) k = 2;
                        if (limitSlidesF == 3 && slidesLengthF - indexBodyF == 2) k = 1;
                        if (limitSlidesF == 2 && slidesLengthF - indexBodyF == 1) k = 1;
                        // console.log(k);
                        // console.log(indexBody);
                        indexF = indexBodyF - k;
                        // console.log(index);
                        // console.log(limitSlidesIndex);
                    }

                    nextSlidesF(indexF);
                    limitSlidesIndexF++;
                    // console.log(indexF);
                }

                nextSlideBodyF(indexBodyF);
                nextDotF(indexDotF);
                // console.log(indexBody);
                return;
            }
        }
    }
};

$('.menu__link-tab[href="#tab-f"]').on('click', (e) => {
    e.preventDefault();
    downloadSlidesF();
});

let setIntervalIdF = setInterval(nextSlideF, 3000);
let hoverSlidesF = false;
let lockSlidesF = false;

function handlerInF() {
    clearInterval(setIntervalIdF);
    hoverSlidesF = true;
    lockSlidesF = true;
}

function handlerOutF() {
    if (hoverSlidesF) {
        setIntervalIdF = setInterval(nextSlideF, 3000);
        hoverSlidesF = false;
    }
    if (hoverSlidesF) {
        setIntervalIdF = setInterval(nextSlideF, 3000);
        hoverSlidesF = false;
        lockSlidesF = false;
    }
    lockSlidesF = true;
}

function clickSlideF() {
    clearInterval(setIntervalIdF);
    hoverSlidesF = false;
    lockSlidesB = true;
}

function unlockSlidesF() {
    if (lockSlidesF) {
        setIntervalIdF = setInterval(nextSlideF, 3000);
        lockSlidesF = false;
    }
}

$(slidesF).on('mouseenter', handlerInF).on('click', clickSlideF).on('mouseleave', handlerOutF);







