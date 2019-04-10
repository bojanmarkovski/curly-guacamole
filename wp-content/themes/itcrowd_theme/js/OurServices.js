
$(document).ready(function(){
  if ($(window).width() < 991) {
    $("hr").css("display", "inline-block", "!important");
  } else {
    $("hr").show(1100);
  }
  $(".our-services-box p").fadeIn(1300);
  $(".our-services-box .col-md-4").fadeIn(1300);
  $(".footer").fadeIn(1300);
  $(".col-md-4.col-md-offset-4").fadeIn(1300);
  $(".our-services-box").css("height", "auto");
});

var onloadCallback = function() {
  grecaptcha.render('re-captcha', {
    'sitekey': '6LdZIpcUAAAAAI2bvnnVOLYrvDDS6Wu1pHefdfv6'
  });
};