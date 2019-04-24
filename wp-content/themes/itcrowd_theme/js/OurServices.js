
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

  // AJAX
  $("form").submit(function(e) {
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
              // const lastElement = intoMessage.split("-").pop();

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
          } else {

            $("body").removeClass("modal-open");
            $(".modal").removeClass("in").removeClass("fade").css("display" , "none");;
            $("#exampleModal").css("display" , "none");
            $("body .modal-backdrop").removeClass("in").removeClass("fade").remove();
            $("#page").next("div").remove();
            $(".page-template-services").removeClass("modal-open").css("padding-right", "0px");

          }
        }
      });
    }

    return; // No go on form...
  }); // end of submit function

});

var onloadCallback = function() {
  grecaptcha.render('re-captcha', {
    'sitekey': '6LdZIpcUAAAAAI2bvnnVOLYrvDDS6Wu1pHefdfv6'
  });
};