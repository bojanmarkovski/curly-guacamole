
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

  $(".btn.btn-block").on('click',function(){
    $(".page-template.page-template-services.page-template-services-php").css({"overflow-y" : "scroll"});
  })

  // AJAX
  $("form").submit(function(e) {
    
    $(".loader").removeClass("hidden").css({"background-color" : "rgba(0, 0, 0, 0.9)", "z-index" : "9999999999999"});
    $("#myModal-error").css("background-color", "rgba(0,0,0,0.7)");
    for (let i = 1; i < 8; i++) {
      $(".form-group .holder:nth-child("+ i +") .error").css({"visibility" : "hidden"});
    }
    
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

    // Everything checks out! Continue...
    if (validForm == true) {
      // var formContainer = $("#exampleModal");
      var formData = $(this).serializeArray(); // Format all info and get it ready for sendoff

      // AJAX magic coming up...
      $.ajax({
        type: $(this).attr("method"),
        url: $(this).attr("action"),
        data: formData,
        cache: false,
        contentType: "application/x-www-form-urlencoded",
        encode: true,
        error: function(err) {
          console.log("Uh, oh. There was an error:", err); // You broke something...
        },
        success: function(data) {
          if(data.status == "validation_failed"){
            
            for (let dataInto = 0; dataInto < data.invalidFields.length; dataInto++) {
              const intoMessage = data.invalidFields[dataInto].into;

              if(intoMessage == "span.wpcf7-form-control-wrap.your-company") {
                $(".form-group .holder:nth-child(1) .error").css({"visibility" : "visible"});
              }
              if(intoMessage == "span.wpcf7-form-control-wrap.your-email" ){
                $(".form-group .holder:nth-child(2) .error").css({"visibility" : "visible"});
              }
              if(intoMessage == "span.wpcf7-form-control-wrap.your-subject") {
                $(".form-group .holder:nth-child(3) .error").css({"visibility" : "visible"});
              }
              if(intoMessage == "span.wpcf7-form-control-wrap.your-message") {
                $(".form-group .holder:nth-child(4) .error").css({"visibility" : "visible"});
              }
            }

            $(".loader").addClass("hidden");
            $(".modal-title").text("Error");
            $(".modal-body p").text("One or more fields have an error. Please check and try again.");

            // OPEN ERROR POP-UP MODAL
            $("#myModal-error").css("display", "block");
            $("body").addClass("modal-open");
            $("#exampleModal .modal-dialog").addClass("blur-modal");
            $(".modal-backdrop.fade").addClass("in");
            $(".form-message .modal-body").css("height", "auto");
            $(".modal.fade").addClass("in");
            

            // CLOSE BUTTON IN ERROR POP-UP MODAL
            $("#myModal-error .btn.btn-default").on('click', function(){
              $("#myModal-error").removeClass("fade").removeClass("in").css("display", "none");
              $("#exampleModal .modal-dialog").removeClass("blur-modal");
            });

          } else {

            $(".loader").addClass("hidden");
            $(".modal-title").text("Successfull");
            $(".modal-body p").text("Thank you for your message. It has been sent.");

            // CLOSE BUTTON IN SUCCESS POP-UP MODAL
            $("#myModal-error .btn.btn-default").on('click', function(){
              $(".modal").removeClass("fade").removeClass("in").css("display", "none");
              $(".modal-backdrop").remove();
              $("body").removeClass("modal-open");
              $(".page-template-services").removeClass("modal-open").css("padding-right", "0px");
            });
            
            $("#myModal-error").css("display", "block");
            $("body").addClass("modal-open");
            $(".modal.fade").addClass("in");
            $(".modal-backdrop.fade").addClass("in");
            $(".form-message .modal-body").css("height", "auto");
            $("#exampleModal .modal-dialog").addClass("blur-modal");

            setTimeout( function(){
              $(".modal").removeClass("fade").removeClass("in").css("display", "none");
              $(".modal-backdrop").remove();
              $("body").removeClass("modal-open");
              $(".page-template-services").removeClass("modal-open").css("padding-right", "0px");
              $("#exampleModal .modal-dialog").removeClass("blur-modal");
            },5000);
          }
        }
      });
    }

    return; // No go on form...
  }); // end of submit function

  // $("#exampleModal .btn.btn-default").on('click', function(){
  //   $("body").removeClass("modal-open");
  //   $(".modal.fade").removeClass("in").css("display", "none");
  //   $(".modal-backdrop.fade").removeClass("in").remove();
  //   $("#myModal-error").remove();
  // });
});

var onloadCallback = function() {
  grecaptcha.render('re-captcha', {
    'sitekey': '6LdZIpcUAAAAAI2bvnnVOLYrvDDS6Wu1pHefdfv6'
  });
};