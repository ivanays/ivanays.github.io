export class ViewPopupCreateB {
  onCreateB
  onFormDataBSlide
  onFormDataBService

  #popupCreateB
  #formCreateB
  formCreateBSlide
  formCreateBPhoto
  previewBServiceSlide
  previewBServicePhoto
  previewBPhotoSlide
  previewBTitleSlide
  previewBPhotoService
  previewBTitleService
  photoBNamePhotoSlide
  photoBPathPhotoSlide
  photoBNamePhotoService
  photoBPathPhotoService

  formDataBSlide
  formDataBService

  formCreateAdvantages
  formCreateContraindications
  formCreatePrice

  sidebarAdd

  createAdvantageDesc
  createContrainDesc
  createPrice

  arrAdvantageDesc
  arrContrainDesc
  arrPrice


  constructor() {
    this.#popupCreateB = $('#popup-create-b');
    this.#formCreateB = $('#form-create-b');

    this.formCreateBSlide = $('#form-create-b-slide');
    this.formCreateBPhoto = $('#form-create-b-photo');
    this.previewBServiceSlide = $('#form-block-preview-service-slide');
    this.previewBServicePhoto = $('#form-block-preview-service-photo');
    this.previewBPhotoSlide = $('#form-create-b-preview-photo-slide');
    this.previewBTitleSlide = $('#form-create-b-preview-title-slide');
    this.previewBPhotoService = $('#form-create-b-preview-photo-service');
    this.previewBTitleService = $('#form-create-b-preview-title-service');
    this.photoBNameSlide = $('#form-create-b-slide-name');
    this.photoBPathSlide = $('#form-create-b-slide-path');
    this.photoBNameService = $('#form-create-b-photo-name');
    this.photoBPathService = $('#form-create-b-photo-path');

    this.formCreateAdvantages = $('#form-create-b-advantages');
    this.formCreateContraindications = $('#form-create-b-contraindications');
    this.formCreatePrice = $('#form-create-b-price');

    $(this.formCreateAdvantages).data('advantage', -1);
    $(this.formCreateContraindications).data('contrain', -1);
    $(this.formCreatePrice).data('price', -1);

    this.sidebarEdit = $('.sidebar-panel__btn[name="sidebar-edit"]');
    this.sidebarAdd = $('.sidebar-panel__btn[name="sidebar-add"]');
    this.sidebarDelate = $('.sidebar-panel__btn[name="sidebar-delate"]');
    this.sidebarUp = $('.sidebar-panel__btn[name="sidebar-up"]');
    this.sidebarDown = $('.sidebar-panel__btn[name="sidebar-down"]');

    this.createAdvantageDesc = $('#form-create-b-description-advantage');
    this.createContrainDesc = $('#form-create-b-description-contraindication');
    this.createPrice = $('#form-create-b-price-desc-value');

    this.arrAdvantageDesc = [];
    this.arrContrainDesc = [];
    this.arrPrice = [];

    this.createAdvantageDesc.on('focus', (e) => {
      e.preventDefault();
      if ($(this.formCreateAdvantages).data('advantage') == -1 && $(this.sidebarEdit).attr('id') != 'sidebar-edit-advantage') {
        $(this.sidebarAdd).attr('id', 'sidebar-add-new-advantage');
        console.log($(this.formCreateAdvantages).data('advantage'));
        console.log($(this.sidebarEdit).attr('id'));
        console.log($(this.sidebarAdd).attr('id'));
      } else if ($(this.formCreateAdvantages).data('advantage') != -1 && $(this.sidebarEdit).attr('id') == 'sidebar-edit-advantage') {
        $(this.sidebarAdd).attr('id', 'sidebar-add-edit-advantage');
        console.log($(this.formCreateAdvantages).data('advantage'));
        console.log($(this.sidebarEdit).attr('id'));
        console.log($(this.sidebarAdd).attr('id'));
      }
    });

    this.createContrainDesc.on('focus', (e) => {
      e.preventDefault();
      if ($(this.formCreateContraindications).data('contrain') == -1 && $(this.sidebarEdit).attr('id') != 'sidebar-edit-contrain') {
        $(this.sidebarAdd).attr('id', 'sidebar-add-new-contrain');
        console.log($(this.formCreateContraindications).data('contrain'));
        console.log($(this.sidebarEdit).attr('id'));
        console.log($(this.sidebarAdd).attr('id'));
      } else if ($(this.formCreateContraindications).data('contrain') != -1 && $(this.sidebarEdit).attr('id') == 'sidebar-edit-contrain') {
        console.log($(this.formCreateContraindications).data('contrain'));
        $(this.sidebarAdd).attr('id', 'sidebar-add-edit-contrain');
        console.log($(this.formCreateContraindications).data('contrain'));
        console.log($(this.sidebarEdit).attr('id'));
        console.log($(this.sidebarAdd).attr('id'));
      }
    });

    this.createPrice.on('focus', (e) => {
      e.preventDefault();
      if ($(this.formCreatePrice).data('price') == -1 && $(this.sidebarEdit).attr('id') != 'sidebar-edit-price') {
        $(this.sidebarAdd).attr('id', 'sidebar-add-new-price');
        console.log($(this.formCreatePrice).data('price'));
        console.log($(this.sidebarEdit).attr('id'));
        console.log($(this.sidebarAdd).attr('id'));
      } else if ($(this.formCreatePrice).data('price') != -1 && $(this.sidebarEdit).attr('id') == 'sidebar-edit-price') {
        console.log($(this.formCreatePrice).data('price'));
        $(this.sidebarAdd).attr('id', 'sidebar-add-edit-price');
        console.log($(this.formCreatePrice).data('price'));
        console.log($(this.sidebarEdit).attr('id'));
        console.log($(this.sidebarAdd).attr('id'));
      }
    });


    this.sidebarAdd.on('click', (e) => {
      e.preventDefault();

      if ($(this.sidebarAdd).attr('id') == 'sidebar-add-new-advantage') {
        $(this.formCreateAdvantages).empty();
        if ($(this.createAdvantageDesc).val() !== '') {
          this.arrAdvantageDesc.push($(this.createAdvantageDesc).val());
        }
        $(this.formCreateAdvantages).data({ advantages: this.arrAdvantageDesc });
        let arrLength = this.arrAdvantageDesc.length;
        console.log(this.arrAdvantageDesc);
        console.log($(this.formCreateAdvantages).data());
        console.log($(this.formCreateAdvantages).data("advantages"));
        console.log(arrLength);

        if (arrLength > 1) {
          $('#form-checkbox-advantages').css('display', 'block');
          $('#advantage-all').text(`Выделить всё (${arrLength})`);
        } else {
          $('#form-checkbox-advantages').css('display', 'none');
        }

        this.arrAdvantageDesc.forEach((a, i) => {
          this.formCreateAdvantages.append(
            `<li class="form__checkbox-item"><div class="form__checkbox-inner"><span id="advantage-desc${i}" class="form__checkbox-name">${a}</span><div class="form__checkbox-body"><label class="party__checkbox-label"><input name="" id="advantage-check${i}" class="party__checkbox" type="checkbox"><span class="party__checkbox-fake" id=""></span></label></div></div></li>`
          );
          $(`#advantage-check${i}`).on('click', () => {
            console.log(`yes${i}`);
            if ($(`#advantage-check${i}`).is(':checked')) {
              $('#form-create-b-advantages input:checkbox').not($(`#advantage-check${i}`)).prop('checked', false);
              $('#form-create-b-contraindications input:checkbox').prop('checked', false);
              $('#form-create-b-price input:checkbox').prop('checked', false);

              $('#advantages-check').prop('checked', false);
              $('#contraindications-check').prop('checked', false);
              $('#prices-check').prop('checked', false);

              $(this.formCreateAdvantages).data('advantage', i);
              console.log($(this.formCreateAdvantages).data('advantage'));
              $(this.formCreateContraindications).data('contrain', -1);
              console.log($(this.formCreateContraindications).data('contrain'));
              $(this.formCreatePrice).data('price', -1);
              console.log($(this.formCreatePrice).data('price'));

              $(this.sidebarAdd).attr('id', '');
              $(this.sidebarEdit).attr('id', 'sidebar-edit-advantage');
              $(this.sidebarDelate).attr('id', 'sidebar-delate-advantage');
              $(this.sidebarUp).attr('id', 'sidebar-up-advantage');
              $(this.sidebarDown).attr('id', 'sidebar-down-advantage');
              console.log($(this.sidebarEdit).attr('id'));
              console.log($(this.sidebarDelate).attr('id'));
              console.log($(this.sidebarUp).attr('id'));
              console.log($(this.sidebarDown).attr('id'));

            } else {
              $(this.formCreateAdvantages).data('advantage', -1);
              console.log($(this.formCreateAdvantages).data('advantage'));
              $(this.formCreateContraindications).data('contrain', -1);
              console.log($(this.formCreateContraindications).data('contrain'));
              $(this.formCreatePrice).data('price', -1);
              console.log($(this.formCreatePrice).data('price'));

              $(this.sidebarAdd).attr('id', '');
              $(this.sidebarEdit).attr('id', '');
              $(this.sidebarDelate).attr('id', '');
              $(this.sidebarUp).attr('id', '');
              $(this.sidebarDown).attr('id', '');
              console.log($(this.sidebarEdit).attr('id'));
              console.log($(this.sidebarDelate).attr('id'));
              console.log($(this.sidebarUp).attr('id'));
              console.log($(this.sidebarDown).attr('id'));

            }
          });
        });

        $(this.createAdvantageDesc).val('');
        $(this.createAdvantageDesc).trigger('focus');
      }

      if ($(this.sidebarAdd).attr('id') == 'sidebar-add-new-contrain') {
        $(this.formCreateContraindications).empty();

        if ($(this.createContrainDesc).val() !== '') {
          this.arrContrainDesc.push($(this.createContrainDesc).val());
        }

        $(this.formCreateContraindications).data({ contraindications: this.arrContrainDesc })
        let arrLength = this.arrContrainDesc.length;
        console.log(this.arrContrainDesc);
        console.log($(this.formCreateContraindications).data());
        console.log($(this.formCreateContraindications).data("contraindications"));

        if (arrLength > 1) {
          $('#form-checkbox-contraindications').css('display', 'block');
          $('#contraindication-all').text(`Выделить всё (${arrLength})`);
        } else {
          $('#form-checkbox-contraindications').css('display', 'none');
        }

        this.arrContrainDesc.forEach((a, i) => {
          this.formCreateContraindications.append(
            `<li class="form__checkbox-item"><div class="form__checkbox-inner"><span id="contrain-desc${i}" class="form__checkbox-name">${a}</span><div class="form__checkbox-body"><label class="party__checkbox-label"><input name="" id="contrain-check${i}" class="party__checkbox" type="checkbox"><span class="party__checkbox-fake" id=""></span></label></div></div></li>`
          );
          $(`#contrain-check${i}`).on('click', () => {
            console.log(`yes${i}`);
            if ($(`#contrain-check${i}`).is(':checked')) {
              $('#form-create-b-contraindications input:checkbox').not($(`#contrain-check${i}`)).prop('checked', false);
              $('#form-create-b-advantages input:checkbox').prop('checked', false);
              $('#form-create-b-price input:checkbox').prop('checked', false);

              $('#advantages-check').prop('checked', false);
              $('#contraindications-check').prop('checked', false);
              $('#prices-check').prop('checked', false);

              $(this.formCreateContraindications).data('contrain', i);
              console.log($(this.formCreateContraindications).data('contrain'));
              $(this.formCreateAdvantages).data('advantage', -1);
              console.log($(this.formCreateAdvantages).data('advantage'));
              $(this.formCreatePrice).data('price', -1);
              console.log($(this.formCreatePrice).data('price'));

              $(this.sidebarAdd).attr('id', '');
              $(this.sidebarEdit).attr('id', 'sidebar-edit-contrain');
              $(this.sidebarDelate).attr('id', 'sidebar-delate-contrain');
              $(this.sidebarUp).attr('id', 'sidebar-up-contrain');
              $(this.sidebarDown).attr('id', 'sidebar-down-contrain');
              console.log($(this.sidebarEdit).attr('id'));
              console.log($(this.sidebarDelate).attr('id'));
              console.log($(this.sidebarUp).attr('id'));
              console.log($(this.sidebarDown).attr('id'));

            } else {
              $(this.formCreateAdvantages).data('advantage', -1);
              console.log($(this.formCreateAdvantages).data('advantage'));
              $(this.formCreateContraindications).data('contrain', -1);
              console.log($(this.formCreateContraindications).data('contrain'));
              $(this.formCreatePrice).data('price', -1);
              console.log($(this.formCreatePrice).data('price'));

              $(this.sidebarAdd).attr('id', '');
              $(this.sidebarEdit).attr('id', 'sidebar-edit-contrain');
              $(this.sidebarDelate).attr('id', 'sidebar-delate-contrain');
              $(this.sidebarUp).attr('id', 'sidebar-up-contrain');
              $(this.sidebarDown).attr('id', 'sidebar-down-contrain');
              console.log($(this.sidebarEdit).attr('id'));
              console.log($(this.sidebarDelate).attr('id'));
              console.log($(this.sidebarUp).attr('id'));
              console.log($(this.sidebarDown).attr('id'));

            }

          });
        });
        $(this.createContrainDesc).val('');
        $(this.createContrainDesc).trigger('focus');
      }

      if ($(this.sidebarAdd).attr('id') == 'sidebar-add-new-price') {
        $(this.formCreatePrice).empty();

        if ($(this.createPrice).val() !== '') {
          this.arrPrice.push($(this.createPrice).val());
        }

        $(this.formCreatePrice).data({ prices: this.arrPrice })
        let arrLength = this.arrPrice.length;
        console.log(this.arrPrice);
        console.log($(this.formCreatePrice).data());
        console.log($(this.formCreatePrice).data("prices"));

        if (arrLength > 1) {
          $('#form-checkbox-prices').css('display', 'block');
          $('#price-all').text(`Выделить всё (${arrLength})`);
        } else {
          $('#form-checkbox-prices').css('display', 'none');
        }

        this.arrPrice.forEach((a, i) => {
          this.formCreatePrice.append(
            `<li class="form__checkbox-item"><div class="form__checkbox-inner"><span id="price${i}" class="form__checkbox-name">${a}</span><div class="form__checkbox-body"><label class="party__checkbox-label"><input name="price-check${i}" id="price-check${i}" class="party__checkbox" type="checkbox"><span class="party__checkbox-fake" id=""></span></label></div></div></li>`
          );

          $(`#price-check${i}`).on('click', () => {
            console.log(`yes-price${i}`);
            if ($(`#price-check${i}`).is(':checked')) {
              $('#form-create-b-price input:checkbox').not($(`#price-check${i}`)).prop('checked', false);
              $('#form-create-b-advantages input:checkbox').prop('checked', false);
              $('#form-create-b-contraindications input:checkbox').prop('checked', false);

              $('#advantages-check input:checkbox').prop('checked', false);
              $('#contraindications-check').prop('checked', false);
              $('#prices-check').prop('checked', false);

              $(this.formCreatePrice).data('price', i);
              console.log($(this.formCreatePrice).data('price'));
              $(this.formCreateAdvantages).data('advantage', -1);
              console.log($(this.formCreateAdvantages).data('advantage'));
              $(this.formCreateContraindications).data('contrain', -1);
              console.log($(this.formCreateContraindications).data('contrain'));

              $(this.sidebarAdd).attr('id', '');
              $(this.sidebarEdit).attr('id', 'sidebar-edit-price');
              $(this.sidebarDelate).attr('id', 'sidebar-delate-price');
              $(this.sidebarUp).attr('id', 'sidebar-up-price');
              $(this.sidebarDown).attr('id', 'sidebar-down-price');
              console.log($(this.sidebarEdit).attr('id'));
              console.log($(this.sidebarDelate).attr('id'));
              console.log($(this.sidebarUp).attr('id'));
              console.log($(this.sidebarDown).attr('id'));

            } else {
              $(this.formCreateAdvantages).data('advantage', -1);
              console.log($(this.formCreateAdvantages).data('advantage'));
              $(this.formCreateContraindications).data('contrain', -1);
              console.log($(this.formCreateContraindications).data('contrain'));
              $(this.formCreatePrice).data('price', -1);
              console.log($(this.formCreatePrice).data('price'));
              $(this.sidebarAdd).attr('id', '');
              $(this.sidebarEdit).attr('id', '');
              $(this.sidebarDelate).attr('id', '');
              $(this.sidebarUp).attr('id', '');
              $(this.sidebarDown).attr('id', '');
              console.log($(this.sidebarEdit).attr('id'));
              console.log($(this.sidebarDelate).attr('id'));
              console.log($(this.sidebarUp).attr('id'));
              console.log($(this.sidebarDown).attr('id'));

            }

          });
        });
        $(this.createPrice).val('');
        if (arrLength % 2 === 0 || arrLength === 0) {
          $(this.createPrice).attr('placeholder', 'Описание прайса');
        } else {
          $(this.createPrice).attr('placeholder', 'Размер прайса');
        }

        $(this.createPrice).val('');
        $(this.createPrice).trigger('focus');
      }


      if ($(this.sidebarAdd).attr('id') == 'sidebar-add-edit-advantage') {
        if ($(this.createAdvantageDesc).val() !== '') {
          this.arrAdvantageDesc.forEach((a, i) => {
            if ($(this.formCreateAdvantages).data('advantage') == i) {
              a = $(this.createAdvantageDesc).val();
              $(`#advantage-desc${i}`).text(a);
              $(`#advantage-check${i}`).prop('disabled', false);
            }
          });
          $(this.formCreateAdvantages).data({ advantages: this.arrAdvantageDesc });
          $(this.createAdvantageDesc).val('');
          $(this.sidebarAdd).attr('id', '');
        }
      }

      if ($(this.sidebarAdd).attr('id') == 'sidebar-add-edit-contrain') {
        if ($(this.createContrainDesc).val() !== '') {
          this.arrContrainDesc.forEach((a, i) => {
            if ($(this.formCreateContraindications).data('contrain') == i) {
              a = $(this.createContrainDesc).val();
              $(`#contrain-desc${i}`).text(a);
              $(`#contrain-check${i}`).prop('disabled', false);
            }
          });
          $(this.formCreateContraindications).data({ contraindications: this.arrContrainDesc });
          $(this.createContrainDesc).val('');
          $(this.sidebarAdd).attr('id', '');
        }
      }

      if ($(this.sidebarAdd).attr('id') == 'sidebar-add-edit-price') {
        if ($(this.createPrice).val() !== '') {
          this.arrPrice.forEach((a, i) => {
            if ($(this.formCreatePrice).data('price') == i) {
              a = $(this.createPrice).val();
              $(`#price${i}`).text(a);
              $(`#price-check${i}`).prop('disabled', false);
            }
          });
          $(this.formCreatePrice).data({ prices: this.arrPrice });
          $(this.createPrice).val('');
          $(this.sidebarAdd).attr('id', '');
        }
      }
    });



    this.sidebarEdit.on('click', (e) => {
      e.preventDefault();

      if ($(this.sidebarEdit).attr('id') == 'sidebar-edit-advantage') {
        let advantageNumber = $(this.formCreateAdvantages).data('advantage');
        console.log(advantageNumber);
        let advantageDesc = $(`#advantage-desc${advantageNumber}`).text();
        console.log(advantageDesc);
        $(this.createAdvantageDesc).val(advantageDesc);
        $(`#advantage-check${advantageNumber}`).prop('disabled', true);

        $(this.createAdvantageDesc).trigger('focus');
      }

      if ($(this.sidebarEdit).attr('id') == 'sidebar-edit-contrain') {
        let contrainNumber = $(this.formCreateContraindications).data('contrain');
        console.log(contrainNumber);
        let contrainDesc = $(`#contrain-desc${contrainNumber}`).text();
        console.log(contrainDesc);
        $(this.createContrainDesc).val(contrainDesc);
        $(`#contrain-check${contrainNumber}`).prop('disabled', true);

        $(this.createContrainDesc).trigger('focus');
      }

      if ($(this.sidebarEdit).attr('id') == 'sidebar-edit-price') {
        let priceNumber = $(this.formCreatePrice).data('price');
        console.log(priceNumber);
        let price = $(`#price${priceNumber}`).text();
        console.log(price);
        $(this.createPrice).val(price);
        $(`#price-check${priceNumber}`).prop('disabled', true);

        $(this.createPrice).trigger('focus');
      }
    });


    this.sidebarDelate.on('click', (e) => {
      e.preventDefault();

      if ($(this.sidebarDelate).attr('id') == 'sidebar-delate-advantage') {
        let advantageNumber = $(this.formCreateAdvantages).data('advantage');

        this.arrAdvantageDesc.splice(advantageNumber, 1);

        $(this.formCreateAdvantages).data({ advantages: this.arrAdvantageDesc });

        $(this.sidebarAdd).attr('id', 'sidebar-add-new-advantage');
        $(this.sidebarEdit).attr('id', '');
        $(this.sidebarDelate).attr('id', '');
        $(this.sidebarUp).attr('id', '');
        $(this.sidebarDown).attr('id', '');

        $(this.sidebarAdd).trigger('click');

      }

      if ($(this.sidebarDelate).attr('id') == 'sidebar-delate-contrain') { 
        console.log('123');
        let contrainNumber = $(this.formCreateContraindications).data('contrain');

        this.arrContrainDesc.splice(contrainNumber, 1);

        $(this.formCreateContraindications).data({ contraindications: this.arrContrainDesc });

        $(this.sidebarAdd).attr('id', 'sidebar-add-new-contrain');
        $(this.sidebarEdit).attr('id', '');
        $(this.sidebarDelate).attr('id', '');
        $(this.sidebarUp).attr('id', '');
        $(this.sidebarDown).attr('id', '');

        $(this.sidebarAdd).trigger('click');
      }

      if ($(this.sidebarDelate).attr('id') == 'sidebar-delate-price') { 
        let priceNumber = $(this.formCreatePrice).data('price');

        this.arrPrice.splice(priceNumber, 1);

        $(this.formCreatePrice).data({ prices: this.arrPrice });

        $(this.sidebarAdd).attr('id', 'sidebar-add-new-price');
        $(this.sidebarEdit).attr('id', '');
        $(this.sidebarDelate).attr('id', '');
        $(this.sidebarUp).attr('id', '');
        $(this.sidebarDown).attr('id', '');

        $(this.sidebarAdd).trigger('click');
      }

      if ($(this.sidebarDelate).attr('id') == 'sidebar-delate-advantages' && $(this.formCreateAdvantages).data('advantage') == 'all') {
        this.arrAdvantageDesc = [];
        $(this.formCreateAdvantages).data('advantage', -1);
        $(this.formCreateAdvantages).data({ advantages: this.arrAdvantageDesc });
        $(this.formCreateAdvantages).empty();

        if ($('#advantages-check').is(':checked')) {
          $('#advantages-check').prop('checked', false);
        }

        $('#contraindications-check').prop('checked', false);
        $('#prices-check').prop('checked', false);

        $('#form-create-b-contraindications input:checkbox').prop('checked', false);
        $('#form-create-b-price input:checkbox').prop('checked', false);

        let arrLength = this.arrAdvantageDesc.length;
        if (arrLength > 1) {
          $('#form-checkbox-advantages').css('display', 'block');
          $('#advantage-all').text(`Выделить всё (${arrLength})`);
        } else {
          $('#form-checkbox-advantages').css('display', 'none');
        }
        
      }

      if ($(this.sidebarDelate).attr('id') == 'sidebar-delate-contrains' && $(this.formCreateContraindications).data('contrain') == 'all') {
        this.arrContrainDesc = [];
        $(this.formCreateContraindications).data('contrain', -1);
        $(this.formCreateContraindications).data({ contraindications: this.arrContrainDesc });
        $(this.formCreateContraindications).empty();

        if ($('#contraindications-check').is(':checked')) {
          $('#contraindications-check').prop('checked', false);
        }

        let arrLength = this.arrContrainDesc.length;
        if (arrLength > 1) {
          $('#form-checkbox-contraindications').css('display', 'block');
          $('#contraindication-all').text(`Выделить всё (${arrLength})`);
        } else {
          $('#form-checkbox-contraindications').css('display', 'none');
        }
      }

      if ($(this.sidebarDelate).attr('id') == 'sidebar-delate-prices' && $(this.formCreatePrice).data('price') == 'all') {
        this.arrPrice = [];
        $(this.formCreatePrice).data('price', -1);
        $(this.formCreatePrice).data({ prices: this.arrPrice });
        $(this.formCreatePrice).empty();

        if ($('#prices-check').is(':checked')) {
          $('#prices-check').prop('checked', false);
        }

        let arrLength = this.arrPrice.length;
        if (arrLength > 1) {
          $('#form-checkbox-prices').css('display', 'block');
          $('#price-all').text(`Выделить всё (${arrLength})`);
        } else {
          $('#form-checkbox-prices').css('display', 'none');
        }
      }

    });


    $(this.sidebarUp).on('click', (e) => { 
      e.preventDefault();

      if ($(this.sidebarUp).attr('id') == 'sidebar-up-advantage') {
        if ($(this.formCreateAdvantages).data('advantage') !== 0) {
          let ind = $(this.formCreateAdvantages).data('advantage');
          let beforeElem;
          let elem;
          this.arrAdvantageDesc.forEach((a, i) => {
            if (i == ind - 1) {
              beforeElem = a;
            }
            if (i == ind) {
              elem = a;
            }
          });
          this.arrAdvantageDesc[ind - 1] = elem;
          this.arrAdvantageDesc[ind] = beforeElem;
          console.log(this.arrAdvantageDesc);
          $(this.formCreateAdvantages).data({ advantages: this.arrAdvantageDesc });
          $(this.formCreateAdvantages).data('advantage', ind - 1);
          $(this.createAdvantageDesc).val('');
          $(this.sidebarAdd).attr('id', 'sidebar-add-new-advantage');
          $(this.sidebarAdd).trigger('click');
          $(`#advantage-check${$(this.formCreateAdvantages).data('advantage')}`).trigger('click');
        }
      }

      if ($(this.sidebarUp).attr('id') == 'sidebar-up-contrain') {
        if ($(this.formCreateContraindications).data('contrain') !== 0) {
          let ind = $(this.formCreateContraindications).data('contrain');
          let beforeElem;
          let elem;
          this.arrContrainDesc.forEach((a, i) => {
            if (i == ind - 1) {
              beforeElem = a;
            }
            if (i == ind) {
              elem = a;
            }
          });
          this.arrContrainDesc[ind - 1] = elem;
          this.arrContrainDesc[ind] = beforeElem;
          console.log(this.arrContrainDesc);
          $(this.formCreateContraindications).data({ contraindications: this.arrContrainDesc });
          $(this.formCreateContraindications).data('contrain', ind - 1);
          $(this.createContrainDesc).val('');
          $(this.sidebarAdd).attr('id', 'sidebar-add-new-contrain');
          $(this.sidebarAdd).trigger('click');
          $(`#contrain-check${$(this.formCreateContraindications).data('contrain')}`).trigger('click');
        }
      }

      if ($(this.sidebarUp).attr('id') == 'sidebar-up-price') {
        if ($(this.formCreatePrice).data('price') !== 0) {
          let ind = $(this.formCreatePrice).data('price');
          let beforeElem;
          let elem;
          this.arrPrice.forEach((a, i) => {
            if (i == ind - 1) {
              beforeElem = a;
            }
            if (i == ind) {
              elem = a;
            }
          });
          this.arrPrice[ind - 1] = elem;
          this.arrPrice[ind] = beforeElem;
          console.log(this.arrPrice);
          $(this.formCreatePrice).data({ prices: this.arrPrice });
          $(this.formCreatePrice).data('price', ind - 1);
          $(this.createPrice).val('');
          $(this.sidebarAdd).attr('id', 'sidebar-add-new-price');
          $(this.sidebarAdd).trigger('click');
          $(`#price-check${$(this.formCreatePrice).data('price')}`).trigger('click');
        }
      }
    });

    $(this.sidebarDown).on('click', (e) => { 
      e.preventDefault();

      if ($(this.sidebarDown).attr('id') == 'sidebar-down-advantage') {
        if ($(this.formCreateAdvantages).data('advantage') < this.arrAdvantageDesc.length - 1) {
          let ind = $(this.formCreateAdvantages).data('advantage');
          let afterElem;
          let elem;
          this.arrAdvantageDesc.forEach((a, i) => {
            if (i == ind) {
              elem = a;
              }
              if (i == ind + 1) {
              afterElem = a;
            }
          });
          this.arrAdvantageDesc[ind] = afterElem;
          this.arrAdvantageDesc[ind + 1] = elem;
          console.log(this.arrAdvantageDesc);
          $(this.formCreateAdvantages).data({ advantages: this.arrAdvantageDesc });
          $(this.formCreateAdvantages).data('advantage', ind + 1);
          $(this.createAdvantageDesc).val('');
          $(this.sidebarAdd).attr('id', 'sidebar-add-new-advantage');
          $(this.sidebarAdd).trigger('click');
          $(`#advantage-check${$(this.formCreateAdvantages).data('advantage')}`).trigger('click');
        }
      }

      if ($(this.sidebarDown).attr('id') == 'sidebar-down-contrain') {
        if ($(this.formCreateContraindications).data('contrain') < this.arrContrainDesc - 1) {
          let ind = $(this.formCreateContraindications).data('contrain');
          let afterElem;
          let elem;
          this.arrContrainDesc.forEach((a, i) => {
            if (i == ind) {
              elem = a;
              }
              if (i == ind + 1) {
              afterElem = a;
            }
          });
          this.arrContrainDesc[ind] = afterElem;
          this.arrContrainDesc[ind + 1] = elem;
          console.log(this.arrContrainDesc);
          $(this.formCreateContraindications).data({ contraindications: this.arrContrainDesc });
          $(this.formCreateContraindications).data('contrain', ind - 1);
          $(this.createContrainDesc).val('');
          $(this.sidebarAdd).attr('id', 'sidebar-add-new-contrain');
          $(this.sidebarAdd).trigger('click');
          $(`#contrain-check${$(this.formCreateContraindications).data('contrain')}`).trigger('click');
        }
      }

      if ($(this.sidebarDown).attr('id') == 'sidebar-down-price') {
        if ($(this.formCreatePrice).data('price') !== 0) {
          let ind = $(this.formCreatePrice).data('price');
          let beforeElem;
          let elem;
          this.arrPrice.forEach((a, i) => {
            if (i == ind - 1) {
              beforeElem = a;
            }
            if (i == ind) {
              elem = a;
            }
          });
          this.arrPrice[ind - 1] = elem;
          this.arrPrice[ind] = beforeElem;
          console.log(this.arrPrice);
          $(this.formCreatePrice).data({ prices: this.arrPrice });
          $(this.formCreatePrice).data('price', ind - 1);
          $(this.createPrice).val('');
          $(this.sidebarAdd).attr('id', 'sidebar-add-new-price');
          $(this.sidebarAdd).trigger('click');
          $(`#price-check${$(this.formCreatePrice).data('price')}`).trigger('click');
        }
      }
    });


    $('#advantages-check').on('click', () => {
      console.log('ok');
      if ($('#advantages-check').is(':checked')) {
        $('#form-create-b-advantages input:checkbox').prop('checked', true);

        $('#contraindications-check').prop('checked', false);
        $('#prices-check').prop('checked', false);

        $('#form-create-b-contraindications input:checkbox').prop('checked', false);
        $('#form-create-b-price input:checkbox').prop('checked', false);

        $(this.formCreateAdvantages).data('advantage', 'all');
        console.log($(this.formCreateAdvantages).data('advantage'));
        $(this.formCreateContraindications).data('contrain', -1);
        console.log($(this.formCreateContraindications).data('contrain'));
        $(this.formCreatePrice).data('price', -1);
        console.log($(this.formCreatePrice).data('price'));
        $(this.sidebarEdit).attr('id', '');
        $(this.sidebarDelate).attr('id', 'sidebar-delate-advantages');
        $(this.sidebarUp).attr('id', '');
        $(this.sidebarDown).attr('id', '');
        console.log($(this.sidebarEdit).attr('id'));
        console.log($(this.sidebarDelate).attr('id'));
        console.log($(this.sidebarUp).attr('id'));
        console.log($(this.sidebarDown).attr('id'));
      } else {
        $('#form-create-b-advantages input:checkbox').prop('checked', false);

        $(this.formCreateAdvantages).data('advantage', -1);
        console.log($(this.formCreateAdvantages).data('advantage'));
        $(this.formCreateContraindications).data('contrain', -1);
        console.log($(this.formCreateContraindications).data('contrain'));
        $(this.formCreatePrice).data('price', -1);
        console.log($(this.formCreatePrice).data('price'));
        $(this.sidebarEdit).attr('id', '');
        $(this.sidebarDelate).attr('id', '');
        $(this.sidebarUp).attr('id', '');
        $(this.sidebarDown).attr('id', '');
        console.log($(this.sidebarEdit).attr('id'));
        console.log($(this.sidebarDelate).attr('id'));
        console.log($(this.sidebarUp).attr('id'));
        console.log($(this.sidebarDown).attr('id'));
      }
    });

    $('#contraindications-check').on('click', () => {
      if ($('#contraindications-check').is(':checked')) {
        $('#form-create-b-contraindications input:checkbox').prop('checked', true);

        $('#advantages-check').prop('checked', false);
        $('#prices-check').prop('checked', false);

        $('#form-create-b-advantages input:checkbox').prop('checked', false);
        $('#form-create-b-price input:checkbox').prop('checked', false);

        $(this.formCreateAdvantages).data('advantage', -1);
        console.log($(this.formCreateAdvantages).data('advantage'));
        $(this.formCreateContraindications).data('contrain', 'all');
        console.log($(this.formCreateContraindications).data('contrain'));
        $(this.formCreatePrice).data('price', -1);
        console.log($(this.formCreatePrice).data('price'));
        $(this.sidebarEdit).attr('id', '');
        $(this.sidebarDelate).attr('id', 'sidebar-delate-contrains');
        $(this.sidebarUp).attr('id', '');
        $(this.sidebarDown).attr('id', '');
        console.log($(this.sidebarEdit).attr('id'));
        console.log($(this.sidebarDelate).attr('id'));
        console.log($(this.sidebarUp).attr('id'));
        console.log($(this.sidebarDown).attr('id'));
      } else {
        $('#form-create-b-contraindications input:checkbox').prop('checked', false);

        $(this.formCreateAdvantages).data('advantage', -1);
        console.log($(this.formCreateAdvantages).data('advantage'));
        $(this.formCreateContraindications).data('contrain', -1);
        console.log($(this.formCreateContraindications).data('contrain'));
        $(this.formCreatePrice).data('price', -1);
        console.log($(this.formCreatePrice).data('price'));
        $(this.sidebarEdit).attr('id', '');
        $(this.sidebarDelate).attr('id', '');
        $(this.sidebarUp).attr('id', '');
        $(this.sidebarDown).attr('id', '');
        console.log($(this.sidebarEdit).attr('id'));
        console.log($(this.sidebarDelate).attr('id'));
        console.log($(this.sidebarUp).attr('id'));
        console.log($(this.sidebarDown).attr('id'));
      }
    });

    $('#prices-check').on('click', () => {
      if ($('#prices-check').is(':checked')) {
        $('#form-create-b-price input:checkbox').prop('checked', true);

        $('#advantages-check').prop('checked', false);
        $('#contraindications-check').prop('checked', false);

        $('#form-create-b-advantages input:checkbox').prop('checked', false);
        $('#form-create-b-contraindications input:checkbox').prop('checked', false);

        $(this.formCreateAdvantages).data('advantage', -1);
        console.log($(this.formCreateAdvantages).data('advantage'));
        $(this.formCreateContraindications).data('contrain', -1);
        console.log($(this.formCreateContraindications).data('contrain'));
        $(this.formCreatePrice).data('price', 'all');
        console.log($(this.formCreatePrice).data('price'));
        $(this.sidebarEdit).attr('id', '');
        $(this.sidebarDelate).attr('id', 'sidebar-delate-prices');
        $(this.sidebarUp).attr('id', '');
        $(this.sidebarDown).attr('id', '');
        console.log($(this.sidebarEdit).attr('id'));
        console.log($(this.sidebarDelate).attr('id'));
        console.log($(this.sidebarUp).attr('id'));
        console.log($(this.sidebarDown).attr('id'));
      } else {
        $('#form-create-b-price input:checkbox').prop('checked', false);

        $(this.formCreateAdvantages).data('advantage', -1);
        console.log($(this.formCreateAdvantages).data('advantage'));
        $(this.formCreateContraindications).data('contrain', -1);
        console.log($(this.formCreateContraindications).data('contrain'));
        $(this.formCreatePrice).data('price', -1);
        console.log($(this.formCreatePrice).data('price'));
        $(this.sidebarEdit).attr('id', '');
        $(this.sidebarDelate).attr('id', '');
        $(this.sidebarUp).attr('id', '');
        $(this.sidebarDown).attr('id', '');
        console.log($(this.sidebarEdit).attr('id'));
        console.log($(this.sidebarDelate).attr('id'));
        console.log($(this.sidebarUp).attr('id'));
        console.log($(this.sidebarDown).attr('id'));
      }
    });


    this.formCreateBSlide.on('change', (e) => {
      e.preventDefault();
      if ($(this.previewBServiceSlide).hasClass('form__block-preview-active')) {
        $(this.previewBServiceSlide).removeClass('form__block-preview-active');
      }
      if (window.FormData === undefined) {
        alert('В вашем браузере FormData не поддерживается');
      } else {
        this.formDataBSlide = new FormData();
        this.formDataBSlide.append('file', $('#form-create-b-slide')[0].files[0]);
        console.log(this.formDataBSlide);
        console.log($(this.previewBTitleSlide).val());
      }
      this.onFormDataBSlide(this.formDataBSlide);
    });

    this.formCreateBPhoto.on('change', (e) => {
      e.preventDefault();
      if ($(this.previewBServicePhoto).hasClass('form__block-preview-active')) {
        $(this.previewBServicePhoto).removeClass('form__block-preview-active');
      }
      if (window.FormData === undefined) {
        alert('В вашем браузере FormData не поддерживается');
      } else {
        this.formDataBService = new FormData();
        this.formDataBService.append('file', $('#form-create-b-photo')[0].files[0]);
        console.log(this.formDataBService);
        console.log($(this.previewBTitleService).val());
      }
      this.onFormDataBService(this.formDataBService);
    });

    this.#formCreateB.on('submit', (e) => {
      e.preventDefault();

      const createTitle1B = $('#form-create-b-title1').val();
      const createTitle2B = $('#form-create-b-title2').val();
      const createServiceDescB = $('#form-create-b-description-service').val();
      const createAdvantageDescB = $('#form-create-b-description-advantage').val();
      const createContraindicationDescB = $('#form-create-b-description-contraindication').val();
      const createPriceDescB = $('#form-create-b-description-price').val();
      const createPriceValueB = $('#form-create-b-value-price').val();

      console.log($(this.photoBNameSlide).val());
      console.log($(this.photoBPathSlide).val());
      console.log(createTitle1B);
      console.log(createTitle2B);
      console.log(createServiceDescB);
      console.log($(this.photoBNameService).val());
      console.log($(this.photoBPathService).val());
      // console.log(createAdvantageDescB);
      // console.log(createContraindicationDescB);
      // console.log(createPriceDescB);
      // console.log(createPriceValueB);

      this.onCreateB($(this.photoBNameSlide).val(), $(this.photoBPathSlide).val(), createTitle1B, createTitle2B, createServiceDescB, $(this.photoBNameService).val(), $(this.photoBPathService).val(), createAdvantageDescB, createContraindicationDescB, createPriceDescB, createPriceValueB);
    });

  }

  resetForm() {
    this.#formCreateB.trigger('reset');
    this.#popupCreateB.removeClass('open');
  }
}