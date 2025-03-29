"use strict"

// popups-panel

// const popupLinks = $('.popup-link');
// let unlock = true;
// const timeout = 800;

// popupLinks.on('click', (e) => {
//     e.preventDefault();
//     const popupName = $(e.target).attr('href');
//     console.log(popupName);
//     $(popupName).addClass('open');
// });

// input[type='range']

const rangeValue = $("#form-input-range-value");
const rangeInput = $("#form-create-stock-percent");
const stockPrice = $("#form-create-stock-price");
$(document).ready(() => {
  $(rangeInput).val('0');
  $(stockPrice).val('');
  $(rangeValue).text($(rangeInput).val());
})
$(rangeInput).on("input", (e) => {
  e.preventDefault();
  $(stockPrice).val('');
  $(stockPrice).attr('value', '0');
  $(rangeInput).val(e.target.value);
  $(rangeInput).attr('value', $(rangeInput).val());
  $(rangeValue).text(e.target.value);
});
$(stockPrice).on("input", (e) => {
  e.preventDefault();
  $(rangeInput).val('0');
  $(rangeInput).attr('value', '0');
  $(rangeValue).text($(rangeInput).val());
  $(stockPrice).val(e.target.value);
  $(stockPrice).attr('value', e.target.value);
});

// input accept issue

const payAccept = $('#form-create-pay-accept');
const payIssue = $('#form-create-pay-issue');
$(document).ready(() => {
  $(payAccept).val('');
  $(payIssue).val('');
});
$(payAccept).on("input", (e) => {
  e.preventDefault();
  $(payIssue).val('');
  $(payIssue).attr('value', '');
  $(payAccept).val(e.target.value);
  $(payAccept).attr('value', e.target.value);
});
$(payIssue).on("input", (e) => {
  e.preventDefault();
  $(payAccept).val('');
  $(payAccept).attr('value', '');
  $(payIssue).val(e.target.value);
  $(payIssue).attr('value', e.target.value);
});

// input[file] .form__input-file

let inputs = $('.form__input-file');
let label = $(inputs).next();
let labelVal = $(label).text();
$(inputs).on('change', function (e) {
  e.preventDefault();
  let countFiles = '';
  if (this.files && this.files.length >= 1) {
    countFiles = this.files.length;
  }
  if (countFiles) {
    if (countFiles == 1) $(label).text(`Выбрано: ${countFiles} файл`);
    if (countFiles == 2 || countFiles == 3 || countFiles == 4) $(label).text(`Выбрано: ${countFiles} файла`);
    if (countFiles > 4) $(label).text(`Выбрано: ${countFiles} файлов`);
  } else if (countFiles < 1 && $(e.target).attr('id') == 'form-create-user-image') {
    $(label).text('Выбрать файл');
  } else if (countFiles < 1 && $(e.target).attr('id') == 'form-create-measure-image') {
    $(label).text('Выбрать файлы');
  }
})
