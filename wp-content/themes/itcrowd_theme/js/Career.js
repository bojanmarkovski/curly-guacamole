$(document).ready(function(){
  
  // IF WINDOW > 991 AND CLICK ON SOME CARD. SLIDE-DOWN / SLIDE-UP AND APPEND THAT CARD.
  $(".career-left").on('click', '.row.pd-box', function() {

    if ($(window).width() > 991) {

      let boxShadow = $(this).find(".career-box").children("div");
      if (boxShadow.hasClass("shadow-paragraph")) {
        boxShadow.removeClass("shadow-paragraph");
        boxShadow.slideDown();
        boxShadow.addClass('clicked-cart');
      }
      else {
        boxShadow.addClass("shadow-paragraph");
        $($(".career-box")[i]).children("div").slideUp();
      }

      for (var i = 0; i < $(".career-box").length; i++) {
        if (!$($(".career-box")[i]).children("div").hasClass("clicked-cart")) {
          $($(".career-box")[i]).children("div").slideUp();
        }
      }

      let inputJobApply = $(this).find(".career-box").attr('data-name');
      $(this).parents(".career-left").parent(".row.pd-70px").find(".career-right .select").val(inputJobApply);
      boxShadow.removeClass("clicked-cart");
      $(this).parents(".career-left").append($(this));

      $('html, body').animate({
        scrollTop: $(".row.pd-70px")
        .offset()
        .top + -30
      }, 1000);

      $('.career-left').animate({
        scrollTop: $(this)
          .offset()
          .top
      }, 900);

    }

    // IF WINDOW < 991 AND CLICK ON SOME CARD. ONLY SLIDE-DOWN / SLIDE-UP
    else {

      let boxShadow = $(this).find(".career-box").children("div");
      for (var i = 0; i < $(".career-box").length; i++) {
        
        if (!$($(".career-box")[i]).children("div").hasClass("clicked-cart")) {
          $($(".career-box")[i]).children("div").slideUp("shadow-paragraph");
        }

        let inputJobApply = $(this).find(".career-box").attr('data-name');
        $(this).parents(".career-left").parent(".row.pd-70px").find(".career-right .select").val(inputJobApply);
        
      }

      if (boxShadow.hasClass("shadow-paragraph")) {
        $(this).children("div").children("div").slideDown().css("max-height", "none");
        $(this).children("div").children("div").removeClass("shadow-paragraph");
      }
      else {

        boxShadow.slideUp("shadow-paragraph");
        for (var i = 0; i < $(".career-box").length; i++) {
          if (!$($(".career-box")[i]).children("div").hasClass("clicked-cart")) {
            $(this).children("div").children("div").addClass("shadow-paragraph")
            let inputJobApply = $($(this).find("h3")[0]).text();
            $(this).parents(".career-left").parent(".row.pd-70px").find(".career-right .select").val(inputJobApply);
          }
        }

        $(this).children("div").children("div").addClass("shadow-paragraph")
      }
    }

  })
  
  

  // INPUT UPLOAD FILE
  $("form").on("change", ".file-upload-field", function() {
    $(this).parent(".file-upload-wrapper").attr("data-text",$(this).val().replace(/.*(\/|\\)/, ''));
  });

  $(".file-upload-field").on("click", function() {
    $(this).css("border", "1px solid red")
  });

  // WHEN YOU CLICK ON SOME CARD IN SELECT MENU ADD THE TITLE
  $('.dropdown').change(function(e) {

    e.stopPropagation(); // when you click within the content area, it stops the page from seeing it as clicking the body too
    $(this).removeClass("input-holder");
    $(".first-option").css({
        "display": "none"
      }).text("");

    if ($(".input.select").val() == "") {
      $(".first-option").css({"display": "block","transition" : "0.7s"}).text("I am applying for *");
    } 
    else if ($(".input.select").val() !== "I am applying for *") {
      $(this).removeClass("input-holder");
    }
  });

  $('body').click(function() {
    if (!$(".dropdown").hasClass("input-holder") && $(".first-option").css("display") == "none") {
      $(".dropdown").addClass("input-holder");
      $(".first-option").css({"display" : "block" , "transition": "0.7s"}).text("I am applying for *");
    }

      if ($(".input.select").val() !== "I am applying for *") {
        $(".dropdown").removeClass("input-holder");
        $(".first-option").css({"display" : "none", "transition": "0.4s"}).text("");
      }
      else if ($(".input.select").val() == "I am applying for *") {
        $(".dropdown").addClass("input-holder");
      }
  });

  // CHECKBOX PRIVACY POLICY
  $(".modal-dialog button").on('click', function() {
    $(".form-check-input").prop('checked', true);
  })
});

// RECAPTCA - I'M NOT A ROBOT
var onloadCallback = function() {
  grecaptcha.render('re-captcha', {
    'sitekey': '6LdZIpcUAAAAAI2bvnnVOLYrvDDS6Wu1pHefdfv6'
  });
};