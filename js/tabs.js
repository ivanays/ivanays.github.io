"use strict"
// Главное меню. Tabs.
$(document).ready(function () {

  $('.menu__link-tab').on("click", (e) => {
    e.preventDefault();
    let id = $(e.target).attr('href');
    let letter = id.slice(-1);
    let menu = $(e.target).closest(".menu-procedures");
    if (letter == "b") {
      menu.removeClass('menu-body');
      menu.removeClass('menu-face');
      menu.addClass('menu-body')
    } else {
      menu.removeClass('menu-body');
      menu.removeClass('menu-face');
      menu.addClass('menu-face')
    }
    disActive();
    $(e.target).addClass('menu__link-active');
    $(id).addClass('tabs-active');
            
  });
  $('.menu__link-tab[href="#tab-b"]').click();

  function disActive() {
    $('.menu__link-tab').removeClass('menu__link-active');
    $('.tabs-procedures').removeClass('tabs-active');
  }
});


