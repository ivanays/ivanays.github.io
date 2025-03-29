export class ViewPopupCreateK {
  onCreateG

  #formCreateG

  constructor() {
    this.#formCreateG = $('#form-create-g');

    this.#formCreateG.on('submit', (e) => {
      e.preventDefault();

      const createPhoneCode1G = $('#form-create-g-phone-code1').val();
      const createPhoneCode2G = $('#form-create-g-phone-code2').val();
      const createPhoneCode3G = $('#form-create-g-phone-code3').val();
      const createPhoneCode4G = $('#form-create-g-phone-code4').val();

      console.log(createPhoneCode1G);
      console.log(createPhoneCode2G);
      console.log(createPhoneCode3G);
      console.log(createPhoneCode4G);

      this.onCreateG(createPhoneCode1G, createPhoneCode2G, createPhoneCode3G, createPhoneCode4G);
    });

  }

  resetForm() {
    this.#formCreateG.trigger('reset');
  }
}