import { ajaxDataBase } from '../ajaxDataBase.js';


export class PopupModel {

  static async onFormDataPhoto(formData) {
    console.log(formData);
    return await ajaxDataBase.ajaxFormDataDB(
      "/php/upload/upload.php",
      formData,
      success
    );

    function success(data) {
      console.log(data);
      delete sessionStorage.name;
      delete sessionStorage.path;
      delete sessionStorage.error;
      if (data) {
        sessionStorage.setItem('name', data.name);
        sessionStorage.setItem('path', data.path);
      } else {
        sessionStorage.setItem('name', 'error');
        sessionStorage.setItem('path', 'error');
        sessionStorage.setItem('error', data.error);
      }
    }
  }

  static async onCreateA(startDate, startTime, endDate, endTime) {
    return await ajaxDataBase.ajaxPostDB(
      "/php/create/createa.php",
      { action: 'create-a', startDate: startDate, startTime: startTime, endDate: endDate, endTime: endTime },
      success
    );

    function success(data) {
      console.log(data);
      delete sessionStorage.action;
      delete sessionStorage.error;
      delete sessionStorage.action;
      delete sessionStorage.name;
      delete sessionStorage.path;
      if (data.indexOf('create-a') !== -1) {
        sessionStorage.setItem('action', data);

      } else {
        sessionStorage.setItem('action', 'error');
        sessionStorage.setItem('error', data);
      }
    }
  }

  static async onCreateB(photoNameSlide, photoPathSlide, createTitle1, createTitle2, createServiceDesc, photoNameService, photoPathService, createAdvantageDesc, createContraindicationDesc, createPriceDesc, createPriceValue) {
    return await ajaxDataBase.ajaxPostDB(
      "/php/create/createb.php",
      { action: 'create-b', createTitle1: createTitle1, createTitle2: createTitle2, createServiceDesc: createServiceDesc, photoNameSlide: photoNameSlide, photoPathSlide: photoPathSlide, photoNameService: photoNameService, photoPathService: photoPathService, createAdvantageDesc: createAdvantageDesc, createContraindicationDesc: createContraindicationDesc, createPriceDesc: createPriceDesc, createPriceValue: createPriceValue },
      success
    );

    function success(data) {
      console.log(data);
      delete sessionStorage.action;
      delete sessionStorage.error;
      delete sessionStorage.action;
      delete sessionStorage.name;
      delete sessionStorage.path;
      if (data.indexOf('create-b') !== -1) {
        sessionStorage.setItem('action', data);

      } else {
        sessionStorage.setItem('action', 'error');
        sessionStorage.setItem('error', data);
      }
    }
  }

  static async onCreateC(createStockDesc, createStockValue) {
    return await ajaxDataBase.ajaxPostDB(
      "/php/create/createc.php",
      { action: 'create-c', createStockDesc: createStockDesc, createStockValue: createStockValue },
      success
    );

    function success(data) {
      console.log(data);
      delete sessionStorage.action;
      delete sessionStorage.error;
      delete sessionStorage.action;
      delete sessionStorage.name;
      delete sessionStorage.path;
      if (data.indexOf('create-c') !== -1) {
        sessionStorage.setItem('action', data);

      } else {
        sessionStorage.setItem('action', 'error');
        sessionStorage.setItem('error', data);
      }
    }
  }

  static async onCreateD(createTitle2, createServiceDesc, photoName, photoPath) {
    return await ajaxDataBase.ajaxPostDB(
      "/php/create/created.php",
      { action: 'create-d', createTitle2: createTitle2, createServiceDesc: createServiceDesc, photoName: photoName, photoPath: photoPath },
      success
    );

    function success(data) {
      console.log(data);
      delete sessionStorage.action;
      delete sessionStorage.error;
      delete sessionStorage.action;
      delete sessionStorage.name;
      delete sessionStorage.path;
      if (data.indexOf('create-d') !== -1) {
        sessionStorage.setItem('action', data);

      } else {
        sessionStorage.setItem('action', 'error');
        sessionStorage.setItem('error', data);
      }
    }
  }

  static async onCreateE(createName, createReviewDesc) {
    return await ajaxDataBase.ajaxPostDB(
      "/php/create/createe.php",
      { action: 'create-e', createName: createName, createReviewDesc: createReviewDesc },
      success
    );

    function success(data) {
      console.log(data);
      delete sessionStorage.action;
      delete sessionStorage.error;
      delete sessionStorage.action;
      delete sessionStorage.name;
      delete sessionStorage.path;
      if (data.indexOf('create-e') !== -1) {
        sessionStorage.setItem('action', data);

      } else {
        sessionStorage.setItem('action', 'error');
        sessionStorage.setItem('error', data);
      }
    }
  }

  static async onCreateF(photoName, photoPath) {
    return await ajaxDataBase.ajaxPostDB(
      "/php/create/createf.php",
      { action: 'create-f', photoName: photoName, photoPath: photoPath },
      success
    );

    function success(data) {
      console.log(data);
      delete sessionStorage.action;
      delete sessionStorage.error;
      delete sessionStorage.action;
      delete sessionStorage.name;
      delete sessionStorage.path;
      if (data.indexOf('create-f') !== -1) {
        sessionStorage.setItem('action', data);

      } else {
        sessionStorage.setItem('action', 'error');
        sessionStorage.setItem('error', data);
      }
    }
  }

  static async onCreateG(createPhoneCode1, createPhoneCode2, createPhoneCode3, createPhoneCode4) {
    return await ajaxDataBase.ajaxPostDB(
      "/php/create/createg.php",
      { action: 'create-g', createPhoneCode1: createPhoneCode1, createPhoneCode2: createPhoneCode2, createPhoneCode3: createPhoneCode3, createPhoneCode4: createPhoneCode4 },
      success
    );

    function success(data) {
      console.log(data);
      delete sessionStorage.action;
      delete sessionStorage.error;
      delete sessionStorage.action;
      delete sessionStorage.name;
      delete sessionStorage.path;
      if (data.indexOf('create-g') !== -1) {
        sessionStorage.setItem('action', data);

      } else {
        sessionStorage.setItem('action', 'error');
        sessionStorage.setItem('error', data);
      }
    }
  }

}