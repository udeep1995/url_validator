$(document).ready(function() {

  function urlValidator() {

    const data = $('.url').val() + "";

    $('.btn').button('loading');
    $.ajax({
      url: '/url-validate',
      method: 'POST',
      data: {'url': data},
      success : successHandler
    })
  }
  function successHandler(data) {
    if(data){
        alert(`It is a valid URL`);
    } else {
        alert(`It is NOT a valid URL`);
    }
    $('.btn').button('reset');

  }


  function init() {
    $('.btn').on('click', urlValidator);
  }
  init();



});
