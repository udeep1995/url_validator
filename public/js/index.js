$(document).ready(function() {

  function urlValidator() {
    const data = $('.url').val() + "";
    console.log(data);
    $.ajax({
      url: '/url-validate',
      method: 'POST',
      data: {'url': data},
      success : successHandler
    })
  }

  function successHandler(data) {
    console.log(data);
  }


  function init() {
    $('.btn').on('click', urlValidator);
  }
  init();



});
