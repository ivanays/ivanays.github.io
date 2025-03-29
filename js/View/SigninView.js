export class SigninView {
    // Колбек авторизации пользвоателя
    onSignin

    // Объект формы
    #loginForm

    constructor() {
      this.#loginForm = $('#form-into');
      console.log(this.#loginForm);

        // Регистрация колбека на событие клика на кнопку авторизации
        this.#loginForm.on('submit', e => {
            // Избегаем отправки формы браузером
            e.preventDefault();

            // Получение данных формы
            const loginEmail = this.#loginForm.find('[id="form-into-email"]').val();
            const loginPassword = this.#loginForm.find('[id="form-into-password"]').val();
          
            // Вызов колбека авторизации пользователя
            this.onSignin(loginEmail, loginPassword)
        })
    }

    // Сброс формы на начальное состояние
    resetForm() {
        this.#loginForm.trigger('reset');
    }
}
