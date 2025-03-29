export class ViewPopupCreateA {
  onCreateA

  #formCreateA
  #popupCreateA

  constructor() {
    this.#popupCreateA = $('#popup-create-a');
    this.#formCreateA = $('#form-create-a');

    this.#formCreateA.on('submit', (e) => {
      e.preventDefault();
      const createStartDateA = $('#form-create-a-startdate').val();
      const createStartTimeA = $('#form-create-a-starttime').val();
      const createEndDateA = $('#form-create-a-enddate').val();
      const createEndTimeA = $('#form-create-a-endtime').val();

      console.log(createStartDateA);
      console.log(createStartTimeA);
      console.log(createEndDateA);
      console.log(createEndTimeA);

      console.log(typeof(createStartDateA));
      console.log(typeof(createStartTimeA));
      console.log(typeof(createEndDateA));
      console.log(typeof(createEndTimeA));

      this.onCreateA(createStartDateA, createStartTimeA, createEndDateA, createEndTimeA);
    });

  }

  resetForm() {
    this.#formCreateA.trigger('reset');
    this.#popupCreateA.removeClass('open');
  }
}

