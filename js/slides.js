"use strict";
//------------------------------------------------
// Слайдер procedures

const slides = $(".slider__slide-body"),
    sliderBody = $(".slider-body"),
    dots = $(".dots__dot-body"),
    dotsBody = $(".dots__body-body"),
    containerWidth = $(".container-procedures").width();

let index = 0;
let indexBody = 0;
let indexDot = 0;
let slidesArr = [];
let slidesLength = $(slides).length;
let dotsLength = $(dots).length;
let limitSlides;
let limitDots = 7;
let limitSlidesIndex = 0;

console.log($(".container-procedures").width());
console.log($(slides).length);

const getLimitSlides = () => {
    switch (containerWidth) {
        case 1434:
            limitSlides = 4;
            break;
        case 1068:
            limitSlides = 3;
            break;
        case 702:
            limitSlides = 2;
            break;
        case 672:
            limitSlides = 3;
            break;
        case 438:
            limitSlides = 2;
            break;
        case 375:
            limitSlides = 1;
            break;
    }
}

const cloneLastSlide = () => {
    let lastClone = $(slides).last().clone();
    $(lastClone).attr('id', 'lastClone');
    $(slides).parent().prepend(lastClone);
    console.log(lastClone);
}

const cloneFirstSlide = () => {
    let firstClone = $(slides).first().clone();
    $(firstClone).attr('id', 'firstClone');
    $(slides).parent().append(firstClone);
    console.log(firstClone);
}


const downloadSlides = () => {
    removeSlides();
    index = 0;
    indexBody = 0;
    indexDot = 0;
    slidesArr = [];
    limitSlidesIndex = 0;
    getLimitSlides();
    if (containerWidth == 375) {
        if ($('#firstClone')) $('#firstClone').remove();
        if ($('#lastClone')) $('#lastClone').remove();
        cloneLastSlide();
        if ($('#lastClone').hasClass('slider__slide-body-active')) {
            $('#lastClone').removeClass('slider__slide-body-active');
        }
        $('#lastClone').removeClass('slider__slide-active');
        $('#lastClone').addClass('slider__slide-active');
        activeSlide(1);
    }
    for (let i = 0; i < limitSlides; i++) {
        activeSlide(index);
        slidesArr.push(index);
        index++;
    }
    removeSlidesBody();
    activeSlideBody(indexBody);
    indexBody++;
    createDots();
    removeDots();
    activeDot(indexDot);
    indexDot++;
    limitSlidesIndex = 1;
}

const createDots = () => {
    $(dotsBody).empty();
    if (slidesLength >= limitDots) {
        for (let i = 0; i < limitDots; i++) {
            $(dotsBody).append('<span class="dots__dot dots__dot-procedure dots__dot-body"></span>');
        }
    } else if (slidesLength < limitDots) {
        let width = 13 + (slidesLength - 1) * 10 + (slidesLength - 1) * 6;
        $(dotsBody).width(width);
        for (let i = 0; i < slidesLength; i++) {
            $(dotsBody).append('<span class="dots__dot dots__dot-procedure dots__dot-body"></span>');
        }
    }
};

const activeSlide = (n) => {
    $(slides[n]).addClass('slider__slide-active');
};

const activeSlides = () => {
    for (let i = 0; i < slidesLength; i++) {
        activeSlide(i);
    }
}

const activeSlideBody = (n) => {
    $(slides[n]).addClass('slider__slide-body-active');
};

const removeSlideBody = (n) => {
    $(slides[n]).removeClass('slider__slide-body-active');
};

const removeSlidesBody = (n) => {
    for (let i = 0; i < slidesLength; i++) {
        removeSlideBody(i);
    }
};

const removeSlide = (n) => {
    $(slides[n]).removeClass('slider__slide-active');
};

const removeSlides = () => {
    for (let i = 0; i < slidesLength; i++) {
        removeSlide(i);
    }
}

const activeDot = (n) => {
    $(dotsBody).children().each(function (i, elem) {
        $(elem).removeClass("dots__dot-active");
        if (i == n) $(elem).addClass("dots__dot-active");
    });
};

const activeDots = () => {
    for (let i = 0; i < slidesLength; i++) {
        activeDot(i);
    }
};

const removeDot = (n) => {
    $(dotsBody).each(function (i, elem) {
        if (i == n) $(elem).removeClass("dots__dot-active");
    });
};

const removeDots = () => {
    for (let i = 0; i < slidesLength; i++) {
        removeDot(i);
    }
};

const nextSlides = (ind) => {
    for (let i = 0; i < limitSlides; i++) {
        activeSlide(ind);
        slidesArr.push(ind);
        ind++;
        index = ind;
    }
}

const nextSlideBody = (ind) => {
    removeSlidesBody();
    activeSlideBody(ind);
    ind++;
    indexBody = ind;
}

const nextDot = (ind) => {
    if (slidesLength <= limitDots) {
        // console.log(ind + '-1');
        indexDot = ind;
        removeDots();
        activeDot(indexDot);
        indexDot++;
    } else if (slidesLength > limitDots) {
        if (ind < limitDots) {
            // console.log(ind + '-2');
            indexDot = ind;
            removeDots();
            activeDot(indexDot);
            indexDot++;
        } else if (ind >= limitDots && ind < slidesLength - 1) {
            // console.log(ind + '-3');
            if (ind % 2 == 0) indexDot = 5;
            if (ind % 2 != 0) indexDot = 4;
            removeDots();
            activeDot(indexDot);
            indexDot = ind;
            indexDot++;
        } else if (ind >= limitDots && ind == slidesLength - 1) {
            // console.log(ind + '-4');
            indexDot = 6;
            removeDots();
            activeDot(indexDot);
            indexDot = ind;
            indexDot++;
        }
    }
}

const nextSlide = () => {

    if (indexBody == slidesLength) {
        downloadSlides();
        return;
    }

    if (limitSlidesIndex != 0) {
        if (containerWidth == 375) {
            if ($('#lastClone')) $('#lastClone').remove();
            removeSlides();
            activeSlide(indexBody - 1);
            activeSlide(indexBody);
            activeSlide(indexBody + 1);
            nextSlideBody(indexBody);
            nextDot(indexDot);
            if (indexBody == slidesLength) {
                if ($('#firstClone')) $('#firstClone').remove();
                cloneFirstSlide();
                $('#firstClone').addClass('slider__slide-active');
            }
            // console.log(indexBody);
            return;
        }
        for (let i = 0; i < limitSlides; i++) {

            if (indexBody < 25) {
                if (indexBody == limitSlides * limitSlidesIndex) {
                    removeSlides();
                    slidesArr = [];
                    index = 0;
                    if (slidesLength % limitSlides == 0) {
                        index = indexBody;
                    } else if (slidesLength % limitSlides != 0) {
                        let k = 0;
                        if (limitSlides == 4 && slidesLength - indexBody == 1) k = 3;
                        if (limitSlides == 4 && slidesLength - indexBody == 2) k = 2;
                        if (limitSlides == 4 && slidesLength - indexBody == 3) k = 1;
                        if (limitSlides == 3 && slidesLength - indexBody == 1) k = 2;
                        if (limitSlides == 3 && slidesLength - indexBody == 2) k = 1;
                        if (limitSlides == 2 && slidesLength - indexBody == 1) k = 1;
                        // console.log(k);
                        // console.log(indexBody);
                        index = indexBody - k;
                        // console.log(index);
                        // console.log(limitSlidesIndex);
                    }
                    
                    nextSlides(index);
                    limitSlidesIndex++;
                    console.log(index);
                }
                
                nextSlideBody(indexBody);
                nextDot(indexDot);
                // console.log(indexBody);
                return;
            }
        }
    }
};

downloadSlides();
setInterval(nextSlide, 3000);

