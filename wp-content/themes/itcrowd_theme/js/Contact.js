jQuery(document).ready(function($){

  // IF BROWSER IS AN EDGE INPUTS ARE DIFFERENT 
  if (/Edge/.test(navigator.userAgent)) {
    $(".placeholder").css({ "transform" : "scale(0.75) translateY(-26px) translateX(-5px)"})
  }

  // AJAX
  $("form").submit(function(e) {
    $(".loader").removeClass("hidden").css("background-color" , "rgba(0, 0, 0, 0.9)");

    for (let i = 1; i < 5; i++) {
      $(".form-group .holder:nth-child("+ i +") .error").css({"visibility" : "hidden"});
    }
    e.preventDefault(); // Prevent a new window from opening upon clicking 'Subscribe now' button

    var validForm = true; // Set initial state of valid form to true
    var inputArray = $(this).find("input.required"); // Find all required inputs and store them in array

    // Simple check for all inputs to make sure the value is not empty
    inputArray.each(function(item) {
      if ($(this).val() == "") {
        validForm = false;
        console.log("Empty inputs");
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
          
          if(data.status == "spam"){
            
            if(data.message == "There was an error trying to send your message. Please try again later.") {
              $(".error.re-captcha").css({"visibility" : "visible"});
              $(".loader").addClass("hidden");
            }
          }
          else if(data.status == "validation_failed"){
            
            for (let dataInto = 0; dataInto < data.invalidFields.length; dataInto++) {
              const intoMessage = data.invalidFields[dataInto].into;
              // FOR PC
              if(intoMessage == "span.wpcf7-form-control-wrap.your-name") {
                $(".form-group .holder:nth-child(1) .error").css({"visibility" : "visible"});
              }
              if(intoMessage == "span.wpcf7-form-control-wrap.your-email" ){
                $(".form-group .holder:nth-child(2) .error").css({"visibility" : "visible"});
              }
              if(intoMessage == "span.wpcf7-form-control-wrap.your-message") {
                $(".form-group .holder:nth-child(3) .error").css({"visibility" : "visible"});
              }
              // FOR MOBILE
              if(intoMessage == "span.wpcf7-form-control-wrap.your-name-mobile") {
                $(".display-none-pc .form-group .holder:nth-child(1) .error").css({"visibility" : "visible"});
              }
              if(intoMessage == "span.wpcf7-form-control-wrap.your-email-mobile" ){
                $(".display-none-pc .form-group .holder:nth-child(2) .error").css({"visibility" : "visible"});
              }
              if(intoMessage == "span.wpcf7-form-control-wrap.your-message-mobile") {
                $(".display-none-pc .form-group .holder:nth-child(3) .error").css({"visibility" : "visible"});
              }
            }

            $(".loader").addClass("hidden");

            $("#myModal-error").css("display", "block");
            $("body").addClass("modal-open");
            $(".modal.fade").addClass("in");
            $(".modal-backdrop.fade").addClass("in");
            $(".modal-title").text("Error");
            $(".modal-body p").text("One or more fields have an error. Please check and try again.");
            $(".page-template-contact").css("overflow-y", "scroll");
            
          } 
          else {

            $(".loader").addClass("hidden");

            $("#myModal-error").css("display", "block");
            $("body").addClass("modal-open");
            $(".modal.fade").addClass("in");
            $(".modal-backdrop.fade").addClass("in");
            $(".modal-title").text("Successfull");
            $(".modal-body p").text("Thank you for your message. It has been sent.");

            $("#myModal-error .btn.btn-default").on('click', function(){
              $(".error.re-captcha").css({"visibility" : "hidden"});
            });

            setTimeout( function(){
              $("body").removeClass("modal-open");
              $(".modal.fade").removeClass("in").css("display", "none");
              $(".modal-backdrop.fade").removeClass("in");
              $(".error.re-captcha").css({"visibility" : "hidden"});
            },5000);

          }
        }
      });
    }

    return; // No go on form...
  }); // end of submit function

  $("#myModal-error .btn.btn-default").on('click', function(){
    $("body").removeClass("modal-open");
    $(".modal.fade").removeClass("in").css("display", "none");
    $(".modal-backdrop.fade").removeClass("in");
  });
});

$( 'form' ).click(function(){
    $(".error.re-captcha").css("visibility", "hidden");
    var $captcha = $( '#recaptcha' ),
      response = grecaptcha.getResponse();
  
  if (response.length === 0) {
    // $( '.msg-error').text( "reCAPTCHA is mandatory" );
    if( !$captcha.hasClass( "error" ) ){
      // $(".error.re-captcha").css("visibility", "visible");
    }
  } else {
    $( '.msg-error' ).text('');

    $('.display-none-tablet .input').each(function(){
      if ($(this).val() == ""){
        // console.log($(this).siblings("error").css({"visibility" : "visible"}));

      } else {
        $(".btn.btn-block").removeAttr("disabled");
        $(".error.re-captcha").css("visibility", "hiden");
      }
    })
  }
});

function onSubmit(token) {
  $(".btn.btn-block").removeAttr("disabled");
};

