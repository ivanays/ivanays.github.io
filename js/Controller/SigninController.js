import { SigninView } from "../View/SigninView.js";
import { LogoutView } from "../View/LogoutView.js";
// import { DirectView } from "../View/DirectView.js";
import { TabsView } from "../View/TabsView.js";
import { PopupView } from "../View/PopupView.js";
import { ViewPopupCreateA } from "../View/ViewPopupCreate/ViewPopupCreateA.js";
import { ViewPopupCreateB } from "../View/ViewPopupCreate/ViewPopupCreateB.js";
import { ViewPopupCreateC } from "../View/ViewPopupCreate/ViewPopupCreateC.js";
import { ViewPopupCreateD } from "../View/ViewPopupCreate/ViewPopupCreateD.js";
import { ViewPopupCreateE } from "../View/ViewPopupCreate/ViewPopupCreateE.js";
import { ViewPopupCreateF } from "../View/ViewPopupCreate/ViewPopupCreateF.js";
import { ViewPopupCreateG } from "../View/ViewPopupCreate/ViewPopupCreateG.js";
import { C_PATH_TO_MODE } from "../init.js";
import { AuthModel } from "../Model/AuthModel.js";
import { PopupModel } from "../Model/PopupModel.js";

const C_MODES = Object.values(C_PATH_TO_MODE);

console.log(C_MODES);

const C_MODE_TO_PATH = Object.fromEntries(
  Object.entries(C_PATH_TO_MODE).map(([key, value]) => [value, key])
);

console.log(C_MODE_TO_PATH);

export class SigninController {
  #mode;
  #modelPopup;
  #status;
  #email;
  #role;
  constructor(mode) {
    if (!C_MODES.includes(mode)) {
      this.gotoMode("signin");
      throw (`Режим "${mode}" не поддерживается`);
    }

    this.#mode = mode;
    console.log(mode);
    if (this.#mode === "main") {
      this.#status = sessionStorage.getItem("status");
      this.#email = sessionStorage.getItem("email");
      this.#role = sessionStorage.getItem("role");
      if (this.#status === 'login') {
        // const view2 = new DirectView();
        // view2.directInit(this.#role);
        const viewT = new TabsView();
        viewT.tabInit();
        const viewP = new PopupView();
        viewP.onReset();


      }

    }
  }

  start() {
    this[this.#mode]();
  }

  signin() {
    const view = new SigninView();

    view.onSignin = async (email, password) => {
      try {
        await AuthModel.signin(email, password);
        console.log("success");
        view.resetForm();
        if (
          sessionStorage.status &&
          sessionStorage.getItem("status") === "login" &&
          sessionStorage.email &&
          sessionStorage.getItem("email") != "" &&
          sessionStorage.role &&
          sessionStorage.getItem("role") != ""
        ) {
          // Переходим в основной режим работы приложения
          this.gotoMode("main");


        } else {
          this.gotoMode("signin");
        }
      } catch (err) {
        console.log(err.message);
      }
    };
  }

  main() {

    const viewA = new ViewPopupCreateA();
    viewA.onCreateA = async (startDate, startTime, endDate, endTime) => {
      try {
        await PopupModel.onCreateA(startDate, startTime, endDate, endTime);
        console.log("success");
        viewA.resetForm();
      } catch (err) {
        console.log(err.message);
      }
    }

    const viewB = new ViewPopupCreateB();
    viewB.onFormDataBSlide = async (formData) => {
      try {
        await PopupModel.onFormDataPhoto(formData);
        console.log("success");
        if (!$(viewB.previewBServiceSlide).hasClass('form__block-preview-active')) {
          $(viewB.previewBServiceSlide).addClass('form__block-preview-active');
        }
        $(viewB.previewBPhotoSlide).attr('src', sessionStorage.getItem('path'));
        $(viewB.photoBNameSlide).val(sessionStorage.getItem('name'));
        $(viewB.photoBPathSlide).val(sessionStorage.getItem('path'));
        $(viewB.previewBTitleSlide).text(sessionStorage.getItem('name'));
      } catch (err) {
        console.log(err.message);
      }
    }
    viewB.onFormDataBService = async (formData) => {
      try {
        await PopupModel.onFormDataPhoto(formData);
        console.log("success");
        if (!$(viewB.previewBServicePhoto).hasClass('form__block-preview-active')) {
          $(viewB.previewBServicePhoto).addClass('form__block-preview-active');
        }
        $(viewB.previewBPhotoService).attr('src', sessionStorage.getItem('path'));
        $(viewB.photoBNameService).val(sessionStorage.getItem('name'));
        $(viewB.photoBPathService).val(sessionStorage.getItem('path'));
        $(viewB.previewBTitleService).text(sessionStorage.getItem('name'));
      } catch (err) {
        console.log(err.message);
      }
    }
    viewB.onCreateB = async (photoNameSlide, photoPathSlide, createTitle1, createTitle2, createServiceDesc, photoNameService, photoPathService, createAdvantageDesc, createContraindicationDesc, createPriceDesc, createPriceValue) => {
      try {
        await PopupModel.onCreateB(photoNameSlide, photoPathSlide, createTitle1, createTitle2, createServiceDesc, photoNameService, photoPathService, createAdvantageDesc, createContraindicationDesc, createPriceDesc, createPriceValue);
        console.log("success");
        viewB.resetForm();
      } catch (err) {
        console.log(err.message);
      }
    }

    const viewC = new ViewPopupCreateC();
    viewC.onCreateC = async (createStockDesc, createStockValue) => {
      try {
        await PopupModel.onCreateC(createStockDesc, createStockValue);
        console.log("success");
        viewC.resetForm();
      } catch (err) {
        console.log(err.message);
      }
    }

    const viewD = new ViewPopupCreateD();
    viewD.onFormDataD = async (formData) => {
      try {
        await PopupModel.onFormDataPhoto(formData);
        console.log("success");
        if (!$(viewD.previewDHomeCheckOut).hasClass('form__block-preview-active')) {
          $(viewD.previewDHomeCheckOut).addClass('form__block-preview-active');
        }
        $(viewD.previewDPhoto).attr('src', sessionStorage.getItem('path'));
        $(viewD.photoDName).val(sessionStorage.getItem('name'));
        $(viewD.photoDPath).val(sessionStorage.getItem('path'));
        $(viewD.previewDTitle).text(sessionStorage.getItem('name'));
        console.log(sessionStorage.getItem('name'));
        console.log(sessionStorage.getItem('path'));
        console.log($(viewD.previewDTitle));
        console.log($(viewD.previewDPhoto));
        console.log($(viewD.photoDPath));
      } catch (err) {
        console.log(err.message);
      }
    }
    viewD.onCreateD = async (createTitle2, createServiceDesc, photoName, photoPath) => {
      try {
        await PopupModel.onCreateD(createTitle2, createServiceDesc, photoName, photoPath);
        console.log("success");
        viewD.resetForm();
      } catch (err) {
        console.log(err.message);
      }
    }

    const viewE = new ViewPopupCreateE();
    viewE.onCreateE = async (createName, createReviewDesc) => {
      try {
        await PopupModel.onCreateE(createName, createReviewDesc);
        console.log("success");
        viewE.resetForm();
      } catch (err) {
        console.log(err.message);
      }
    }

    const viewF = new ViewPopupCreateF();
    viewF.onFormDataF = async (formData) => {
      try {
        await PopupModel.onFormDataPhoto(formData);
        console.log("success");
        if (!$(viewF.previewFCertificate).hasClass('form__block-preview-active')) {
          $(viewF.previewFCertificate).addClass('form__block-preview-active');
        }
        $(viewF.previewFPhoto).attr('src', sessionStorage.getItem('path'));
        $(viewF.photoFName).val(sessionStorage.getItem('name'));
        $(viewF.photoFPath).val(sessionStorage.getItem('path'));
        $(viewF.previewFTitle).text(sessionStorage.getItem('name'));
        console.log(sessionStorage.getItem('name'));
        console.log(sessionStorage.getItem('path'));
        console.log($(viewF.previewFTitle));
        console.log($(viewF.previewFPhoto));
        console.log($(viewF.photoFPath));
      } catch (err) {
        console.log(err.message);
      }
    }
    viewF.onCreateF = async (photoName, photoPath) => {
      try {
        await PopupModel.onCreateF(photoName, photoPath);
        console.log("success");
        viewF.resetForm();
      } catch (err) {
        console.log(err.message);
      }
    }

    const viewG = new ViewPopupCreateG();
    viewG.onCreateG = async (createPhoneCode1, createPhoneCode2, createPhoneCode3, createPhoneCode4) => {
      try {
        await PopupModel.onCreateG(createPhoneCode1, createPhoneCode2, createPhoneCode3, createPhoneCode4);
        console.log("success");
        viewG.resetForm();
      } catch (err) {
        console.log(err.message);
      }
    }

    const viewLogout = new LogoutView();
    console.log(viewLogout);
    viewLogout.onLogout = async () => {
      try {
        await AuthModel.logout();
        console.log("success");
        this.gotoMode("signin");
      } catch (err) {
        console.log(err.message);
      }
    };
  }

  gotoMode(mode) {
    if (!C_MODES.includes(mode)) {
      window.location = C_MODE_TO_PATH["signin"];
      //throw(`Режим "${mode}" не поддерживается`)
    }

    window.location = C_MODE_TO_PATH[mode];
  }

}
