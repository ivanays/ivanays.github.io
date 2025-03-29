import { ajaxDataBase } from '../ajaxDataBase.js';
// Модель-контейнер для операций авторизации
export class AuthModel {
    // Авторизация
    static async signin(email, password) {
        return await ajaxDataBase.ajaxPostDB(
            "/php/index.php",
            { action: 'login', email: email, password: password },
            success
        );
      function success(data) {
          console.log(data);
            delete sessionStorage.stutus;
            delete sessionStorage.email;
            delete sessionStorage.role;
            delete sessionStorage.error;
            if (data.indexOf('login') !== -1) {
                sessionStorage.setItem('status', data.slice(0, 5));
                sessionStorage.setItem('email', email);
                sessionStorage.setItem('role', data.slice(5));
            } else {
                sessionStorage.setItem('status', 'logout');
                sessionStorage.setItem('error', data);
            }
        }
    }

    // Выход
    static async logout() {
        return await ajaxDataBase.ajaxPostDB(
            "/php/logout.php",
            { action: 'logout' },
            success
        );
        function success(data) {
            delete sessionStorage.stutus;
            delete sessionStorage.email;
            delete sessionStorage.role;
            delete sessionStorage.error;
            if (data == 'logout') {
                sessionStorage.setItem('status', data);
            } else {
                sessionStorage.setItem('status', 'logout');
                sessionStorage.setItem('error', data);
            }
        }
    }
}
