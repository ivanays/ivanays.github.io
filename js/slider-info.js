"use strict"
//---------------------------------------------------------------------
// slider-info

const infoSection = $('.info');
const sliderItemsInfo = $('.slider__items-info');
const sliderItemInfo = $('.slider__item-info');
const containerWidthI = $(".container").width();
// console.log(containerWidthI);

const bodyInfo = $('body');

let isActiveInfo = false;

const dotsBodyI = $(".dots__body-info");
const dotsI = $(".dots__dot-info");
const slidesI = $(".slider__slide-info")

let slidesLengthI = $(slidesI).length;
let dotsLengthI = $(dotsI).length;
// console.log(slidesLengthI);
let limitDotsI = 7;
let indexDotI = 0;

// console.log($(sliderItemInfo).width() - $(sliderItemsInfo).width());

const getSliderItemInfo = () => {
    let widthItemDefault = (440 + 57) * slidesLengthI - 57;
    let widthItemMobile = (253 + 28) * slidesLengthI - 28;
    switch (containerWidthI) {
        case 346:
            $(sliderItemInfo).css('width', `${widthItemMobile}px`);
            break;
        default:
            $(sliderItemInfo).css('width', `${widthItemDefault}px`);
    }
    if (containerWidthI == 1434 && slidesLengthI == 3) {
        $(infoSection).css('height', '290px');
    }
}

getSliderItemInfo();
// console.log($(sliderItemInfo).width());

$(document).ready(function () {
    $(sliderItemInfo).css('left', '0px');
    nextDotI(indexDotI);
});

$(sliderItemInfo).on('mousedown', function () {
    isActiveInfo = true;
    if ($(bodyInfo).css('cursor') == 'pointer') $(bodyInfo).css('cursor', 'default');
});

$(bodyInfo).on('mouseup', function () {
    isActiveInfo = false;
    if ($(bodyInfo).css('cursor') == 'pointer') $(bodyInfo).css('cursor', 'default');
});

$(bodyInfo).on('mouseleave', function () {
    isActiveInfo = false;
    if ($(bodyInfo).css('cursor') == 'pointer') $(bodyInfo).css('cursor', 'default');
});

const beforeAfterSliderInfo = (x) => {
    let shiftInfo = Math.max(0, Math.min(x, ($(sliderItemsInfo).width())));
    $(sliderItemInfo).css('left', `-${($(sliderItemInfo).width() - $(sliderItemsInfo).width()) / $(sliderItemsInfo).width() * shiftInfo}px`);

    let k = ($(sliderItemInfo).width() - $(sliderItemsInfo).width()) / slidesLengthI;
    console.log(k);

    indexDotI = Math.floor((($(sliderItemInfo).width() - $(sliderItemsInfo).width()) / $(sliderItemsInfo).width()) * shiftInfo / k);


    if (indexDotI > slidesLengthI - 1) {
        return indexDotI = slidesLengthI - 1;
    }

    //console.log(slidesLengthI);
    // console.log(indexDotI);
    nextDotI(indexDotI);
}

const pauseEvents = (e) => {
    e.stopPropagation();
    e.preventDefault();
    return false;
};

$(bodyInfo).on('mousemove', function (e) {
    if (!isActiveInfo) {
        return;
    }

    $(bodyInfo).css('cursor', 'pointer');

    let x = $(e.pageX)[0];
    x -= $(sliderItemsInfo).offset().left;
    beforeAfterSliderInfo(x);
    pauseEvents(e);
});


const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

if (isMobile.any()) {
    $(sliderItemInfo).on('touchstart', function () {
        isActiveInfo = true;
    });

    $(bodyInfo).on('touchend', function () {
        isActiveInfo = false;
    });

    $(bodyInfo).on('ouchcancel', function () {
        isActiveInfo = false;
    });

    $(bodyInfo).on('mousemove', function (e) {
        if (!isActiveInfo) {
            return;
        }

        let x;

        let i;
        for (i = 0; i < e.changedTouches.length; i++) {
            x = e.changedTouches[i].pageX;
        }
        x -= $(sliderItemsInfo).offset().left
        beforeAfterSliderInfo(x);
        pauseEvents(e);
    });
    console.log('isMobile');
}



$('.slider__link-info').on('click', (e) => {
    e.preventDefault();
})



const createDotsI = () => {
    let widthI = 0;
    $(dotsBodyI).empty();
    if (slidesLengthI >= limitDotsI) {
        widthI = 13 + (limitDotsI - 1) * 10 + (limitDotsI - 1) * 6;
        $(dotsBodyI).width(widthI);
        for (let i = 0; i < limitDotsI; i++) {
            $(dotsBodyI).append('<span class="dots__dot dots__dot-info"></span>');
        }
    } else if (slidesLengthI < limitDotsI) {
        widthI = 13 + (slidesLengthI - 1) * 10 + (slidesLengthI - 1) * 6;
        $(dotsBodyI).width(widthI);
        for (let i = 0; i < slidesLengthI; i++) {
            $(dotsBodyI).append('<span class="dots__dot dots__dot-info"></span>');
        }
    }
};

createDotsI();

const activeDotI = (n) => {
    $(dotsBodyI).children().each(function (i, elem) {
        $(elem).removeClass("dots__dot-active");
        if (i == n) $(elem).addClass("dots__dot-active");
    });
};

const activeDotsI = () => {
    for (let i = 0; i < slidesLengthI; i++) {
        activeDotI(i);
    }
};

const removeDotI = (n) => {
    $(dotsBodyI).each(function (i, elem) {
        if (i == n) $(elem).removeClass("dots__dot-active");
    });
};

const removeDotsI = () => {
    for (let i = 0; i < slidesLengthI; i++) {
        removeDotI(i);
    }
};

const activeMinFirstDotI = () => {
    $(dotsBodyI).find(':first-child').addClass("dots__dot-min");
};

const activeMinLastDotI = () => {
    $(dotsBodyI).find(':last-child').addClass("dots__dot-min");
};

const activeMinDotsI = () => {
    activeMinFirstDotI();
    activeMinLastDotI();
};

const removeMitFirstDotI = () => {
    $(dotsBodyI).find(':first-child').removeClass("dots__dot-min");
};

const removeMitLastDotI = () => {
    $(dotsBodyI).find(':last-child').removeClass("dots__dot-min");
};

const removeMinDotsI = () => {
    removeMitFirstDotI();
    removeMitLastDotI();
};


const nextDotI = (ind) => {
    if (slidesLengthI <= limitDotsI) {
        removeDotsI();
        activeDotI(ind);
    } else if (slidesLengthI > limitDotsI) {
        if (ind < limitDotsI) {
            removeMinDotsI();
            removeDotsI();
            activeDotI(ind);
        } else if (ind >= limitDotsI && ind < slidesLengthI - 1) {
            if (ind % 2 == 0) indexDotI = 5;
            if (ind % 2 != 0) indexDotI = 4;
            removeMinDotsI();
            activeMinDotsI();
            removeDotsI();
            activeDotI(indexDotI);
            indexDotI = ind;
        } else if (ind >= limitDotsI && ind == slidesLengthI - 1) {
            indexDotI = 6;
            removeMinDotsI();
            activeMinFirstDotI();
            removeDotsI();
            activeDotI(indexDotI);
            indexDotI = ind;
        } else if (ind == 0) {
            indexDotI = 0;
            removeMinDotsI();
            activeMinLastDotI();
            removeDots();
            activeDotI(indexDotI);
            indexDotI = ind;
        }
    }
}