"use strict"
// links header footer animation

const linksMenu = $('.menu__link');

$(linksMenu).on('mouseenter', (e) => {
    e.preventDefault();
    const link = (e.target);
    $(link).css('transform', 'scale(1.08)');
    $(link).css('opacity', '1');
    $(link).css('word-spacing', '3px');
});

$(linksMenu).on('mouseleave', (e) => {
    e.preventDefault();
    const link = (e.target);
    $(link).css('transform', 'scale(1)');
    $(link).css('opacity', '0.8');
    $(link).css('word-spacing', '1.5px');
});


// links main-icons animation 

const linksMain = $('.icons__link-main');
const mainIcons = $('.icons__main-icon');
const mainShadow = $('.icons__main-shadow');

$(linksMain).on('mouseenter', (e) => {
    e.preventDefault();
    let link = (e.target);
    if ($(link).hasClass('icons__main')) {
        link = $(link).parent();
    }
    const idIcon = $(link).children('.icons__main-icon').attr('id');
    const idShadow = $(link).children('.icons__main-shadow').attr('id');
    $(`#${idIcon}`).css('transform', 'scale(1.08)');
    $(`#${idIcon}`).css('opacity', '1');
    $(`#${idShadow}`).css('transform', 'scale(0.8)');
});

$(linksMain).on('mouseleave', (e) => {
    e.preventDefault();

    $(mainIcons).css('transform', 'scale(1)');
    $(mainIcons).css('opacity', '0.8');
    $(mainShadow).css('transform', 'scale(1)');
});


// links footer-icons animation

const linkIconsFooter = $('.icons__link-footer');
const lineIconsFooter = $('.icons__line-footer');

$(linkIconsFooter).on('mouseenter', (e) => {
    e.preventDefault();
    const link = (e.target);
    const idLine = $(link).parent().children('.icons__line-footer').attr('id');

    $(link).css('transform', 'scale(1.08)');
    $(link).css('opacity', '0.8');
    $(`#${idLine}`).css('opacity', '0.8');
    $(`#${idLine}`).css('left', '-10px');
    $(`#${idLine}`).css('bottom', '-3px');
    $(`#${idLine}`).css('transform', 'scaleX(1.2)');
});

$(linkIconsFooter).on('mouseleave', (e) => {
    e.preventDefault();

    $(linkIconsFooter).css('transform', 'scale(1)');
    $(linkIconsFooter).css('opacity', '0.5');
    $(lineIconsFooter).css('opacity', '0.5');
    $(lineIconsFooter).css('left', '0');
    $(lineIconsFooter).css('botton', '0');
    $(lineIconsFooter).css('transform', 'scaleX(1)');
});


// phone-header animation

const headerSpans = $('.header__span');
const phoneHeader = $('.header__link-phone');
const phoneHeaderRight = $(phoneHeader).css('width').slice(0, -2);
const headerSpansLength = headerSpans.length;
const headerPhone = $('.header__phone');

$(document).ready(() => {
    inHeaderPhone();
});

reloadHeaderPhone();
function reloadHeaderPhone() {
    let clearintervalId2 = setInterval(outHeaderPhone, 30000, () => {
        clearInterval(clearintervalId2);
    });
}


function outHeaderPhone() {

    let count = headerSpansLength;
    let clearIntervalId1 = setInterval(() => {
        if (count > 0) {
            $(headerSpans[count]).removeClass('header__span-active');
        } else {
            count = headerSpansLength;
            clearInterval(clearIntervalId1);
            return;
        }
        count--;
    }, 200);

    $(phoneHeader).animate({
        right: `-${phoneHeaderRight + 6}px`,
    }, 2000);

    inHeaderPhone();
}

function shiftLeftPhone() {
    $(headerPhone).animate({
        marginRight: '5px'
    }, 400).delay(200).animate({
        marginRight: '0px'
    }, 600);
}

function removeSpanActive() {
    for (let i = 0; i < $(headerSpans).length; i++) {
        $(headerSpans[i]).removeClass('header__span-active');
    }
}

function inHeaderPhone() {
    removeSpanActive();

    $(phoneHeader).animate({
        right: '0px',
    }, 1000, () => {
        shiftLeftPhone();
        let count = 0;
        let clearIntervalId = setInterval(() => {
            if (count < headerSpansLength) {
                $(headerSpans[count]).addClass('header__span-active');
            } else {
                count = 0;
                clearInterval(clearIntervalId);
                return;
            }
            count++;
        }, 200);
    });
}


// info animation

const sliderLinkInfo = $('.slider__link-info');

// const contentTop = Number($('.slider__content-info').css('top').slice(0, -2));
// const contentLeft = Number($('.slider__content-info').css('left').slice(0, -2));

// const firstTop = Number($('.slider__border-first').css('top').slice(0, -2));
// const firstLeft = Number($('.slider__border-first').css('left').slice(0, -2));

// const lastBottom = Number($('.slider__border-last').css('bottom').slice(0, -2));
// const lastRight = Number($('.slider__border-last').css('right').slice(0, -2));

$(sliderLinkInfo).on('mouseenter', (e) => {
    e.preventDefault();
    let link = $(e.target);
    if (!$(link).hasClass('slider__link-info')) {
        link = $(link).parent();
    }

    // let content = $(link).children('.slider__content-info');
    // let borderFirst = $(link).children('.slider__border-first');
    // let borderLast = $(link).children('.slider__border-last');

    // resetInfo(content, borderFirst, borderLast);

    // $(content).animate({
    //     top: `${contentTop + 3}px`,
    //     left: `${contentLeft + 5}px`
    // }, 300, () => {
    //     $(content).addClass('slider__content-info1');
    // }).animate({
    //     top: `${contentTop - 6}px`,
    //     left: `${contentLeft - 10}px`
    // }, 200, () => {
    //     $(borderLast).animate({
    //         bottom: `${lastBottom + 6}px`,
    //         right: `${lastRight + 10}px`
    //     }, 200).animate({
    //         bottom: `${lastBottom}px`,
    //         right: `${lastRight}px`
    //     }, 200, () => {
    //         $(borderFirst).animate({
    //             top: `${firstTop + 3}px`,
    //             left: `${firstLeft + 5}px`
    //         }, 200, () => {
    //             $(borderFirst).addClass('slider__border-first1');
    //         }).animate({
    //             top: `${firstTop}px`,
    //             left: `${firstLeft}px`
    //         }, 200, () => {
    //             $(content).animate({
    //                 top: `${contentTop}px`,
    //                 left: `${contentLeft}px`
    //             }, 200, () => {
    //                 $(borderLast).animate({
    //                     bottom: `${lastBottom + 3}px`,
    //                     right: `${lastRight + 5}px`
    //                 }, 200, () => {
    //                     $(borderLast).addClass('slider__border-last1');
    //                 });
    //                 $(borderFirst).animate({
    //                     top: `${firstTop + 3}px`,
    //                     left: `${firstLeft + 5}px`
    //                 }, 200);
    //             }).animate({
    //                 top: `${contentTop}px`,
    //                 left: `${contentLeft}px`
    //             }, 200).animate({
    //                 top: `${contentTop - 3}px`,
    //                 left: `${contentLeft - 5}px`
    //             }, 300);
    //         });
    //     });
    // });

    // let clearIntervalId = setInterval(() => {
    //     resetInfo(content, borderFirst, borderLast);
    // }, 10000, () => {
    //     clearInterval(clearIntervalId);
    // });
});

$(sliderLinkInfo).on('mouseleave', (e) => {
    e.preventDefault();
    let link = $(e.target);
    if (!$(link).hasClass('slider__link-info')) {
        link = $(link).parent();
    }

    // let content = $(link).children('.slider__content-info');
    // let borderFirst = $(link).children('.slider__border-first');
    // let borderLast = $(link).children('.slider__border-last');

    // resetInfo(content, borderFirst, borderLast);
});

// function resetInfo(content, borderFirst, borderLast) {
//     $(content).animate({
//         top: `${contentTop}px`,
//         left: `${contentLeft}px`
//     }, 600, () => {
//         $(content).removeClass('slider__content-info1');
//         $(borderLast).animate({
//             bottom: `${lastBottom}px`,
//             right: `${lastRight}px`
//         }, 600, () => {
//             $(borderLast).removeClass('slider__border-last1');
//         });
//         $(borderFirst).animate({
//             top: `${firstTop}px`,
//             left: `${firstLeft}px`
//         }, 600, () => {
//             $(borderFirst).removeClass('slider__border-first1');
//         });
//     });
// }


