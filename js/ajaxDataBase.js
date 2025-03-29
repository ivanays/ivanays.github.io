export class ajaxDataBase {

  static async ajaxPostDB(url, data, success) {
    return await $.post(url, data, success);
  }

  static async ajaxFormDataDB(url, data, success) {
    console.log(data);
    return await $.ajax({
      type: 'POST',
      url: url,
      cache: false,
      contentType: false,
      processData: false,
      data: data,
      dataType: 'json',
      success: success
    });
  }
}