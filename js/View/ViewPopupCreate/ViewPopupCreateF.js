export class ViewPopupCreateF {
  onCreateF
  onFormDataF

  #popupCreateF
  #formCreateF
  #formCreateFPhoto
  previewFCertificate
  previewFPhoto
  previewFTitle
  formDataF
  photoFName
  photoFPath

  constructor() {
    this.#popupCreateF = $('#popup-create-f');
    this.#formCreateF = $('#form-create-f');
    this.#formCreateFPhoto = $('#form-create-f-photo');
    this.previewFCertificate = $('#form-block-preview-certificate');
    this.previewFPhoto = $('#form-create-f-preview-photo');
    this.previewFTitle = $('#form-create-f-preview-title');
    this.photoFName = $('#form-create-f-photo-name');
    this.photoFPath = $('#form-create-f-photo-path');
    
    this.#formCreateFPhoto.on('change', (e) => {
      e.preventDefault();
      if ($(this.previewFCertificate).hasClass('form__block-preview-active')) {
        $(this.previewFCertificate).removeClass('form__block-preview-active');
      }
      if (window.FormData === undefined) {
        alert('В вашем браузере FormData не поддерживается');
      } else {
        this.formDataF = new FormData();
        this.formDataF.append('file', $('#form-create-f-photo')[0].files[0]);
        console.log(this.formDataF);
        console.log($(this.previewFTitle).val());
      }
      this.onFormDataF(this.formDataF);
    });

    this.#formCreateF.on('submit', (e) => {
      e.preventDefault();

      console.log($(this.photoFName).val());
      console.log($(this.photoFPath).val());

      this.onCreateF($(this.photoFName).val(), $(this.photoFPath).val());
    });


  }

  resetForm() {
    this.#formCreateF.trigger('reset');
    this.#popupCreateF.removeClass('open');
  }
}