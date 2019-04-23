
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

// AJAX

$(document).ready(function() {
  $("form").submit(function(e) {
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
            alert("validation_failed");
          } else {
            console.log("Success! Here is the data:", data); // Yay!

            // $(formContainer).hide(); // Hide the initial form
            $("body").removeClass("modal-open");
            $(".modal.fade").removeClass("in").css("display", "none");
            $(".modal").removeClass("in");
            $(".modal").removeClass("fade");
            // $(".modal").removeClass("in");

          }
        }
      });
    }

    return; // No go on form...
  }); // end of submit function
});
