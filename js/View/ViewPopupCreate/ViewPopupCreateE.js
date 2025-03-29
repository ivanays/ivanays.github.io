export class ViewPopupCreateE {
  onCreateE

  #popupCreateE
  #formCreateE

  constructor() {
    this.#popupCreateE = $('#popup-create-e');
    this.#formCreateE = $('#form-create-e');

    this.#formCreateE.on('submit', (e) => {
      e.preventDefault();

      const createNameE = $('#form-create-e-name').val();
      const createReviewDescE = $('#form-create-e-description-feedback').val();

      console.log(createNameE);
      console.log(createReviewDescE);

      this.onCreateE(createNameE, createReviewDescE);
    });

  }

  resetForm() {
    this.#formCreateE.trigger('reset');
    this.#popupCreateE.removeClass('open');
  }
}