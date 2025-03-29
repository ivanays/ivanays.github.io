"use strict";
// Popups site

const popup = $('.popup');
const header = $('.header');

const popupLinks = $('.popup-link');
const popupClose = $('.popup-close');
const body = $('body');
const tbodyWindows = $('#tbody-windows');
const thLast = $('.table__th-last');
let unlock = true;
const timeout = 800;

const lockPaddingValue =
    window.innerWidth - Number($(body).css('width').slice(0, -2));
    let leftHeader = $(header).css('left').slice(0, -2);


popupLinks.on('click', (e) => {
    e.preventDefault();

    if ($(popup).hasClass('open')) {
        $(popup).removeClass('open');
    }
    const target = $(e.target);
    let popupName;
    if ($(target).parent().hasClass('popup-link')) {
        popupName = $(target).parent().attr('href');
    } else {
        popupName = $(target).attr('href');
    }
    $(popupName).addClass('open');
    if ($(body).hasClass('lock')) {
        $(body).removeClass('lock');
    }
    bodyLock();
    const hasJQueryScrollbar = $(tbodyWindows).prop('scrollHeight') > $(tbodyWindows).innerHeight();

    if (hasJQueryScrollbar) {
        $(thLast).css('width', '20px');
        console.log($(thLast).css('width'));
    }

    downloadSlideS();
    setIntervalIdS = setInterval(nextSlideS, 6000);
});

popupClose.on('click', (e) => {
    e.preventDefault();
    let target = $(e.target);
    if ($(popup).hasClass('open')) {
        $(popup).removeClass('open');
    }
    bodyUnlock();
    if (lockSlidesB) {
        unlockSlidesB();
    }
    if (lockSlidesF) {
        unlockSlidesF();
    }
    if (lockSlidesC) {
        unlockSlidesC();
    }

    clearInterval(setIntervalIdS);
    removeSlidesS();
});



function bodyLock() {
    $(body).css('padding-right', lockPaddingValue);
    $(body).addClass('lock');

    $(header).css('left', `${leftHeader - lockPaddingValue}px`);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnlock() {
    setTimeout(function () {
        $(body).css('padding-right', 0);
        $(body).removeClass('lock');
        $(header).css('left', `${leftHeader}px`);
    }, timeout);
}



