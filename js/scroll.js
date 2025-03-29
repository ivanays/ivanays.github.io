"use strict"
// scroll to #procedures

const toBlock = $('.menu__link-block');
const heightHeader = $('.header');

$('html, body').animate({
    scrollTop: 0
}, 500);

$(toBlock).on('click', (e) => { 
    e.preventDefault();

    let target = $(e.target).data('block');
    let height = $(heightHeader).css('height').slice(0, -2);
    $('html, body').animate({
        scrollTop: $(target).offset().top - height
    }, 500);
    
    let tab = $(e.target).data('tab');
    if (tab != undefined) {
        $(`.menu__link-tab[${tab}]`).click();
    }
});