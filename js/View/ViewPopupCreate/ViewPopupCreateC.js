export class ViewPopupCreateC {
  onCreateC

  #popupCreateC
  #formCreateC

  constructor() {
    this.#popupCreateC = $('#popup-create-c');
    this.#formCreateC = $('#form-create-c');

    this.#formCreateC.on('submit', (e) => {
      e.preventDefault();

      const createStockDescC = $('#form-create-c-description-stock').val();
      const createStockValueC = $('#form-create-c-value-stock').val();

      console.log(createStockDescC);
      console.log(createStockValueC);

      this.onCreateC(createStockDescC, createStockValueC);
    });

  }

  resetForm() {
    this.#formCreateC.trigger('reset');
    this.#popupCreateC.removeClass('open');
  }
}