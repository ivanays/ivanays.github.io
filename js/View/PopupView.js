export class PopupView {
  #popupLinks
  #popupForm
  #popupName
  #saveButton
  #resetButton
  #createButton
  #settingsButton

  constructor() {
    this.#popupLinks = $('.popup-link');
    this.#saveButton = $('#sidebar-save');
    this.#resetButton = $('#sidebar-reset');
    this.#createButton = $('#sidebar-create');
    this.#settingsButton = $('#sidebar-settings');

    this.#popupLinks.on('click', (e) => {
      e.preventDefault();
      this.#popupName = $(e.target).attr('href');
      console.log(this.#popupName);
      $(this.#popupName).addClass('open');
      this.#popupForm = $(`${this.#popupName} .form`).attr('id');
      console.log(this.#popupForm);
      this.#saveButton.attr('form', this.#popupForm);
      this.#resetButton.attr('form', this.#popupForm);
      this.#saveButton.removeClass('sidebar-panel__btn-disabled');
      this.#resetButton.removeClass('sidebar-panel__btn-disabled');
      // this.#createButton.addClass('sidebar-panel__btn-disabled');
      // this.#settingsButton.addClass('sidebar-panel__btn-disabled');
    });
  }

  onReset() {
    this.#resetButton.on('click', e => {
      e.preventDefault();
      $(`#${this.#popupForm}`).trigger('reset');
      console.log('reset');
      $(`#${this.#popupForm}`).closest('.popup-direct').removeClass('open');
      this.#saveButton.addClass('sidebar-panel__btn-disabled');
      this.#resetButton.addClass('sidebar-panel__btn-disabled');
      this.#createButton.removeClass('sidebar-panel__btn-disabled');
      this.#settingsButton.removeClass('sidebar-panel__btn-disabled');
    });
  }

}