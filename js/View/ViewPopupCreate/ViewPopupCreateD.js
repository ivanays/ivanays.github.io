export class ViewPopupCreateD {
  onCreateD
  onFormDataD

  #popupCreateD
  #formCreateD
  formCreateDPhoto
  previewDHomeCheckOut
  previewDPhoto
  previewDTitle
  formDataD
  photoDName
  photoDPath

  

  constructor() {
    this.#popupCreateD = $('#popup-create-d');
    this.#formCreateD = $('#form-create-d');

    this.formCreateDPhoto = $('#form-create-d-photo');
    this.previewDHomeCheckOut = $('#form-block-preview-home-check-out');
    this.previewDPhoto = $('#form-create-d-preview-photo');
    this.previewDTitle = $('#form-create-d-preview-title');
    this.photoDName = $('#form-create-d-photo-name');
    this.photoDPath = $('#form-create-d-photo-path');

    this.formCreateDPhoto.on('change', (e) => {
      e.preventDefault();
      if ($(this.previewDHomeCheckOut).hasClass('form__block-preview-active')) {
        $(this.previewDHomeCheckOut).removeClass('form__block-preview-active');
      }
      if (window.FormData === undefined) {
        alert('В вашем браузере FormData не поддерживается');
      } else {
        this.formDataD = new FormData();
        this.formDataD.append('file', $('#form-create-d-photo')[0].files[0]);
        console.log(this.formDataD);
        console.log($(this.previewDTitle).val());
      }
      this.onFormDataD(this.formDataD);
    });

    this.#formCreateD.on('submit', (e) => {
      e.preventDefault();

      const createTitle2D = $('#form-create-d-title2').val();
      const createServiceDescD = $('#form-create-d-description-service').val();
      const createPhotoD = $('#form-create-d-photo').val();

      console.log(createTitle2D);
      console.log(createServiceDescD);
      console.log($(this.photoDName).val());
      console.log($(this.photoDPath).val());

      this.onCreateD(createTitle2D, createServiceDescD, $(this.photoDName).val(), $(this.photoDPath).val());
    });

  }

  resetForm() {
    this.#formCreateD.trigger('reset');
    this.#popupCreateD.removeClass('open');
  }
}