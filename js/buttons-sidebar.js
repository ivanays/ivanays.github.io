"use strict"
// buttons sidebar (site) animation

const buttonsSidebar = $('.sidebar__link');

$(buttonsSidebar).on('mouseenter', (e) => {
    e.preventDefault();
    const button = (e.target);
    $(button).css('width', '370px');
    $(button).css('font-weight', '600');

});

$(buttonsSidebar).on('mouseleave', (e) => {
    e.preventDefault();
    const button = (e.target);
    $(button).css('width', '294px');
    $(button).css('font-weight', '500');
});