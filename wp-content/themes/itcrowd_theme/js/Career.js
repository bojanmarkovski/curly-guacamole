$(document).ready(function(){
  
  // IF WINDOW > 991 AND CLICK ON SOME CARD. SLIDE-DOWN / SLIDE-UP AND APPEND THAT CARD.
  $(".career-left").on('click', '.row.pd-box', function() {

    if ($(window).width() > 991) {

      let boxShadow = $(this).find(".career-box").children("div");
      if (boxShadow.hasClass("shadow-paragraph")) {
        boxShadow.removeClass("shadow-paragraph");
        boxShadow.slideDown();
        boxShadow.addClass('clicked-card');
      }

      for (var i = 0; i < $(".career-box").length; i++) {
        if (!$($(".career-box")[i]).children("div").hasClass("clicked-card")) {
          $($(".career-box")[i]).children("div").addClass("shadow-paragraph");
        }
      }

      boxShadow.removeClass("clicked-card");
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
      if (boxShadow.hasClass("shadow-paragraph")) {
        $(this).children("div").children("div").slideDown(700).css("max-height", "none");
        $(this).children("div").children("div").removeClass("shadow-paragraph");
        boxShadow.slideDown(700);
        boxShadow.addClass('clicked-card');
      }
      else {
        boxShadow.addClass("shadow-paragraph");
        $($(".career-box")[i]).children("div").slideUp(700);
      }

      for (var i = 0; i < $(".career-box").length; i++) {
        if (!$($(".career-box")[i]).children("div").hasClass("clicked-card")) {
          $($(".career-box")[i]).children("div").slideUp(700).addClass("shadow-paragraph");
        }
      }
      boxShadow.removeClass("clicked-card");

      // if ($(this).prev().find(".career-box").children("div").hasClass("shadow-paragraph")){
      //   $('html, body').animate({
      //     scrollTop: $(this).prev()
      //     .offset()
      //     .top + 180
      //   }, 700)
      // } else {
      //   $('html, body').animate({
      //     scrollTop: $(this).prev()
      //     .offset()
      //     .top + 30
      //   }, 700)
      // }
    }

    // INPUT DROPDOWN VALUE
    let inputJobApply = $(this).find(".career-box").attr('data-name');
      $(this).parents(".career-left").parent(".row.pd-70px").find(".career-right .select").val(inputJobApply);
    })

  // INPUT UPLOAD FILE
  $("form").on("change", ".file-upload-field", function() {
    $(this).parent(".file-upload-wrapper").attr("data-text",$(this).val().replace(/.*(\/|\\)/, ''));
  });
  $("body").css("overflow-y", "scroll")

  // SIZE ATTACH FILE
  $(".file-upload-field").on('change', function(){
    if(this.files[0].size > 5242880){
      $("#myModal-error").css("display", "block");
      $("body").addClass("modal-open");
      $(".modal.fade").addClass("in");
      $(".modal-backdrop.fade").addClass("in");
      $(".modal-body p").text("Sorry, the file you are trying to upload is too big (maximum size is 5MB)");

      $("#myModal-error .btn.btn-default").on('click', function(){
        $("body").removeClass("modal-open");
        $(".modal.fade").removeClass("in").css("display", "none");
        $(".modal-backdrop.fade").removeClass("in");
        var $el = $('.file-upload-wrapper');
        $el.wrap('<form>').closest('form').get(0).reset();
        $el.unwrap();
        $(".file-upload-wrapper").attr("data-text", "No file choosen");
      });
    }
  })

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
  $(".page-template-career .text-danger").on('click', function(){
    $(".page-template.page-template-career.page-template-career-php").css({"overflow-y" : "scroll"});
    $("#exampleModal").css("background","rgba(0,0,0,0.8)")
  });

  $(".modal-dialog button").on('click', function() {
    $(".form-check .form-check-input").prop('checked', true);
  });
  

// AJAX
  $("form").submit(function(e) {
    $("#myModal-error").css("background", "rgba(0,0,0,0.8)");
    $(".loader").removeClass("hidden").css({"background-color" : "rgba(0, 0, 0, 0.9)", "z-index" : "9999999999999"});

    $(".nav").addClass("blur-modal");
    $(".container-fluid.blur-modal").addClass("blur-modal");

    for (let i = 1; i < 9; i++) {
      $(".form-group .holder:nth-child("+ i +") .error").css({"visibility" : "hidden"});
    }
    $(".error.file-error").css({"visibility" : "hidden"});
    e.preventDefault(); // Prevent a new window from opening upon clicking 'Subscribe now' button

    var validForm = true; // Set initial state of valid form to true
    var inputArray = $(this).find("input.required"); // Find all required inputs and store them in array

    // Simple check for all inputs to make sure the value is not empty
    inputArray.each(function(item) {
      if ($(this).val() == "") {
        validForm = false;
        console.log("Empty inputs")
      }
    });

    $(".btn.btn-block").on('click', function(){
      $(".modal").css("background-color", "0, 0, 0, 0.7");
    });
    // Everything checks out! Continue...
    if (validForm == true) {
      var form = $(this);
      var formData = new FormData();
      var formParams = form.serializeArray();

      $.each(form.find('input[type="file"]'), function(i, tag) {
        $.each($(tag)[0].files, function(i, file) {
          formData.append(tag.name, file);
        });
      });

      $.each(formParams, function(i, val) {
        if (val.name == 'job-position' && val.value == 'I am applying for *') {
          formData.append(val.name, '');
        }
        else {
          formData.append(val.name, val.value);
        }
      });

      // AJAX magic coming up...
      $.ajax({
        type: $(this).attr("method"),
        url: $(this).attr("action"),
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        encode: true,
        error: function(err) {
          console.log("Uh, oh. There was an error:", err); // You broke something...
        },
        success: function(data) {
          if(data.status == "validation_failed"){
            
            for (let dataInto = 0; dataInto < data.invalidFields.length; dataInto++) {
              const intoMessage = data.invalidFields[dataInto].into;

              if(intoMessage == "span.wpcf7-form-control-wrap.your-name") {
                $(".form-group .holder:nth-child(1) .error").css({"visibility" : "visible"});
              }
              if(intoMessage == "span.wpcf7-form-control-wrap.your-email" ){
                $(".form-group .holder:nth-child(2) .error").css({"visibility" : "visible"});
              }
              if(intoMessage == "span.wpcf7-form-control-wrap.your-message") {
                $(".form-group .holder:nth-child(4) .error").css({"visibility" : "visible"});
              }
              if(intoMessage == "span.wpcf7-form-control-wrap.job-position") {
                $(".form-group .holder:nth-child(5) .error").css({"visibility" : "visible"});
              }
              if(intoMessage == "span.wpcf7-form-control-wrap.cv-file") {
                $(".error.file-error").css({"visibility" : "visible"});
              }
            }
            
            $(".loader").addClass("hidden");
            $(".modal-title").text("Error");
            $(".modal-body p").text("Please enter a valid information.");
            $(".modal.fade.in").css("background-color", "0, 0, 0, 0.7")

            // OPEN ERROR POP-UP MODAL
            $("#myModal-error").css("display", "block");
            $("body").addClass("modal-open");
            $(".modal-backdrop.fade").addClass("in");
            $(".form-message .modal-body").css("height", "auto");
            $(".modal.fade").addClass("in");


            // CLOSE BUTTON IN ERROR POP-UP MODAL
            $("#myModal-error .btn.btn-default").on('click', function(){
              $(".modal").removeClass("fade").removeClass("in").css("display", "none");
              $(".modal-backdrop").remove();
              $("body").removeClass("modal-open");
            });

          } else {

            $(".loader").addClass("hidden");
            $(".modal-title").text("Successfull");
            $(".modal-body p").text("Your message was successfully sent. Thank you!");
            $(".modal.fade.in").css("background-color", "0, 0, 0, 0.7");

            // CLOSE BUTTON IN SUCCESS POP-UP MODAL
            $("#myModal-error .btn.btn-default").on('click', function(){
              $(".modal").removeClass("fade").removeClass("in").css("display", "none");
              $(".modal-backdrop").remove();
              $("body").removeClass("modal-open");
            });
            
            $("#myModal-error").css("display", "block");
            $("body").addClass("modal-open");
            $(".modal.fade").addClass("in");
            $(".modal-backdrop.fade").addClass("in");
            $(".form-message .modal-body").css("height", "auto");

            setTimeout( function(){
              $(".modal").removeClass("fade").removeClass("in").css("display", "none");
              $(".modal-backdrop").remove();
              $("body").removeClass("modal-open");
              $(".page-template-career").removeClass("modal-open").css("padding-right", "0px");
            },5000);
          }
        }
      });
    }

    return; // No go on form...
  }); // end of submit function

});

// RECAPTCA - I'M NOT A ROBOT
var onloadCallback = function() {
  grecaptcha.render('re-captcha', {
    'sitekey': '6LdZIpcUAAAAAI2bvnnVOLYrvDDS6Wu1pHefdfv6'
  });
};