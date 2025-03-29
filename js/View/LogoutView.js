export class LogoutView {
    // События приложения на которые контроллер будет задавать внешние колбеки для связи
    // представление => контроллер
    onLogout

    constructor() {
        // Генерируем логаут событие по клику на кнопку logout
        $('#adminka-header-logout-btn').on('click', (e) => {
            e.preventDefault();
            this.onLogout();
        })
    }

    // Завершение сессии хендлер кнопки
    logout() {
        this.onLogout()
    }
}
