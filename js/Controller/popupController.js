// import { ViewPopupCreateA } from "../View/ViewPopupCreate/ViewPopupCreateA.js";
import { ViewPopupCreateB } from "../View/ViewPopupCreate/ViewPopupCreateB.js";
import { ViewPopupCreateC } from "../View/ViewPopupCreate/ViewPopupCreateC.js";
import { ViewPopupCreateD } from "../View/ViewPopupCreate/ViewPopupCreateD.js";
import { ViewPopupCreateE } from "../View/ViewPopupCreate/ViewPopupCreateE.js";
import { ViewPopupCreateF } from "../View/ViewPopupCreate/ViewPopupCreateF.js";
import { ViewPopupCreateG } from "../View/ViewPopupCreate/ViewPopupCreateG.js";
import { PopupModel } from "../Model/PopupModel.js";

export class PopupController {
  #active;
  #role;

  constructor() {
    this.#active = false;
    // this.#role = sessionStorage.getItem('role');
    // console.log(this.#role);
    // if (this.#role === 'super-admin' || this.#role === 'admin' || this.#role === 'moderator') {
    //       this.#active = true;
    //   }

    // const viewA = new ViewPopupCreateA();
    // viewA.onCreateA = async (startDate, startTime, endDate, endTime) => {
    //   try {
    //     sessionStorage.setItem('startdate', startDate);
    //     sessionStorage.setItem('starttime', startTime);
    //     sessionStorage.setItem('enddate', endDate);
    //     sessionStorage.setItem('endtime', endTime);
    //   } catch (err) {
    //     console.log(err.message);
    //   }
    // }
    // viewA.onCreateA = async (startDate, startTime, endDate, endTime) => {
    //   try {
    //     await PopupModel.onCreateA(startDate, startTime, endDate, endTime);
    //     console.log("success");
    //     // viewA.resetForm();
    //   } catch (err) {
    //     console.log(err.message);
    //   }
    // }
  }

  // onCreateA() {
  //   const viewA = new ViewPopupCreateA();
  //   viewA.onCreateA = async (startDate, startTime, endDate, endTime) => {
  //     try {
  //       await PopupModel.onCreateA(startDate, startTime, endDate, endTime);
  //       console.log("success");
  //       // viewA.resetForm();
  //     } catch (err) {
  //       console.log(err.message);
  //     }
  //   }
  // }
}