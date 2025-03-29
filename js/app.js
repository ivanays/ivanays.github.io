import './init.js'
import { SigninController } from "./Controller/SigninController.js";
import { C_PATH_TO_MODE } from "./init.js";
//import { PopupController } from './Controller/PopupController.js';

// Роутер, определяет режим работы контроллера по урлу страницы
const controller = new SigninController(C_PATH_TO_MODE[
  new URL(location.href).pathname.split('/').findLast(() => true)
])
console.log(controller);
// Торжественный запуск приложения
controller.start();

//const controller1 = new PopupController();

