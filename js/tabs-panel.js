"use strict"

// adminka-panel Главное меню. Tabs.
$(document).ready(function () {

  $('.tabs__link').on("click", (e) => {
    e.preventDefault();
    let id = $(e.target).attr('href');
    let num = id.slice(-1);
    let create = `#popup-create-${num}`;
    $('#sidebar-create').attr('href', create);
    console.log(num);
    disActive();
    $(e.target).addClass('tabs__link--active');
    $(id).addClass('tabs__party--active');

  });
  $('.tabs__link[href="#tab-a"]').click();

  function disActive() {
    $('.tabs__link').removeClass('tabs__link--active');
    $('.tabs__party').removeClass('tabs__party--active');
  }
})