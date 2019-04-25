jQuery(document).ready(function($){
// 	// GOOGLE MAPS
// 	//set your google maps parameters
// 	var $latitude = 42.006068,
// 		$longitude = 21.392550,
// 		$map_zoom = 15;

// 	//google map custom marker icon - .png fallback for IE11
// 	var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
// 	var $marker_url = 'http://localhost/wordpress/wp-content/uploads/2019/04/pin.png';

// 	//define the basic color of your map, plus a value for saturation and brightness
// 	var	$main_color = '#2d313f',
// 		$saturation= -20,
// 		$brightness= 5;

// 	//we define here the style of the map
// 	var style= [ 
// 		{
// 			//set saturation for the labels on the map
// 			elementType: "labels",
// 			stylers: [
// 				{saturation: $saturation}
// 			]
// 		},  
// 	    {	//poi stands for point of interest - don't show these lables on the map 
// 			featureType: "poi",
// 			elementType: "labels",
// 			stylers: [
// 				{visibility: "off"}
// 			]
// 		},
// 		{
// 			//don't show highways lables on the map
// 	        featureType: 'road.highway',
// 	        elementType: 'labels',
// 	        stylers: [
// 	            {visibility: "off"}
// 	        ]
// 	    }, 
// 		{ 	
// 			//don't show local road lables on the map
// 			featureType: "road.local", 
// 			elementType: "labels.icon", 
// 			stylers: [
// 				{visibility: "off"} 
// 			] 
// 		},
// 		{ 
// 			//don't show arterial road lables on the map
// 			featureType: "road.arterial", 
// 			elementType: "labels.icon", 
// 			stylers: [
// 				{visibility: "off"}
// 			] 
// 		},
// 		{
// 			//don't show road lables on the map
// 			featureType: "road",
// 			elementType: "geometry.stroke",
// 			stylers: [
// 				{visibility: "off"}
// 			]
// 		}, 
// 		//style different elements on the map
// 		{ 
// 			featureType: "transit", 
// 			elementType: "geometry.fill", 
// 			stylers: [
// 				{ hue: $main_color },
// 				{ visibility: "on" }, 
// 				{ lightness: $brightness }, 
// 				{ saturation: $saturation }
// 			]
// 		}, 
// 		{
// 			featureType: "poi",
// 			elementType: "geometry.fill",
// 			stylers: [
// 				{ hue: $main_color },
// 				{ visibility: "on" }, 
// 				{ lightness: $brightness }, 
// 				{ saturation: $saturation }
// 			]
// 		},
// 		{
// 			featureType: "poi.government",
// 			elementType: "geometry.fill",
// 			stylers: [
// 				{ hue: $main_color },
// 				{ visibility: "on" }, 
// 				{ lightness: $brightness }, 
// 				{ saturation: $saturation }
// 			]
// 		},
// 		{
// 			featureType: "poi.sport_complex",
// 			elementType: "geometry.fill",
// 			stylers: [
// 				{ hue: $main_color },
// 				{ visibility: "on" }, 
// 				{ lightness: $brightness }, 
// 				{ saturation: $saturation }
// 			]
// 		},
// 		{
// 			featureType: "poi.attraction",
// 			elementType: "geometry.fill",
// 			stylers: [
// 				{ hue: $main_color },
// 				{ visibility: "on" }, 
// 				{ lightness: $brightness }, 
// 				{ saturation: $saturation }
// 			]
// 		},
// 		{
// 			featureType: "poi.business",
// 			elementType: "geometry.fill",
// 			stylers: [
// 				{ hue: $main_color },
// 				{ visibility: "on" }, 
// 				{ lightness: $brightness }, 
// 				{ saturation: $saturation }
// 			]
// 		},
// 		{
// 			featureType: "transit",
// 			elementType: "geometry.fill",
// 			stylers: [
// 				{ hue: $main_color },
// 				{ visibility: "on" }, 
// 				{ lightness: $brightness }, 
// 				{ saturation: $saturation }
// 			]
// 		},
// 		{
// 			featureType: "transit.station",
// 			elementType: "geometry.fill",
// 			stylers: [
// 				{ hue: $main_color },
// 				{ visibility: "on" }, 
// 				{ lightness: $brightness }, 
// 				{ saturation: $saturation }
// 			]
// 		},
// 		{
// 			featureType: "landscape",
// 			stylers: [
// 				{ hue: $main_color },
// 				{ visibility: "on" }, 
// 				{ lightness: $brightness }, 
// 				{ saturation: $saturation }
// 			]

// 		},
// 		{
// 			featureType: "road",
// 			elementType: "geometry.fill",
// 			stylers: [
// 				{ hue: $main_color },
// 				{ visibility: "on" }, 
// 				{ lightness: $brightness }, 
// 				{ saturation: $saturation }
// 			]
// 		},
// 		{
// 			featureType: "road.highway",
// 			elementType: "geometry.fill",
// 			stylers: [
// 				{ hue: $main_color },
// 				{ visibility: "on" }, 
// 				{ lightness: $brightness }, 
// 				{ saturation: $saturation }
// 			]
// 		}, 
// 		{
// 			featureType: "water",
// 			elementType: "geometry",
// 			stylers: [
// 				{ hue: $main_color },
// 				{ visibility: "on" }, 
// 				{ lightness: $brightness }, 
// 				{ saturation: $saturation }
// 			]
// 		}
// 	];
// 		// lat: , lng:
// 	//set google map options
// 	if ($(window).width() > 768) {
// 		var map_options = {
// 	      	center: new google.maps.LatLng(42.007068, 21.380550),
// 	      	zoom: $map_zoom,
// 	      	panControl: false,
// 	      	zoomControl: true,
// 	      	mapTypeControl: false,
// 	      	streetViewControl: true,
// 	      	mapTypeId: google.maps.MapTypeId.ROADMAP,
// 	      	scrollwheel: true,
// 	      	styles: style,
// 	    }
// 	} else {
// 		var map_options = {
// 	      	center: new google.maps.LatLng($latitude, $longitude),
// 	      	zoom: $map_zoom,
// 	      	panControl: false,
// 	      	zoomControl: true,
// 	      	mapTypeControl: false,
// 	      	streetViewControl: true,
// 	      	mapTypeId: google.maps.MapTypeId.ROADMAP,
// 	      	scrollwheel: true,
// 	      	styles: style,
// 	    }
// 	}
//     //inizialize the map
// 	var map = new google.maps.Map(document.getElementById('google-container'), map_options);
// 	//add a custom marker to the map				
// 	var marker = new google.maps.Marker({
// 	  	position: new google.maps.LatLng($latitude, $longitude),
// 	    map: map,
// 	    visible: true,
// 	 	icon: $marker_url,
// 	});

// 	//add custom buttons for the zoom-in/zoom-out on the map
// 	function CustomZoomControl(controlDiv, map) {
// 		//grap the zoom elements from the DOM and insert them in the map 
// 	  	var controlUIzoomIn= document.getElementById('cd-zoom-in'),
// 	  		controlUIzoomOut= document.getElementById('cd-zoom-out');
// 			controlDiv.appendChild(controlUIzoomIn);
// 			controlDiv.appendChild(controlUIzoomOut);

// 		// Setup the click event listeners and zoom-in or out according to the clicked element
// 		google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
// 		    map.setZoom(map.getZoom()+1)
// 		});
// 		google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
// 		    map.setZoom(map.getZoom()-1)
// 		});
// 	}

// 	var zoomControlDiv = document.createElement('div');
//  	var zoomControl = new CustomZoomControl(zoomControlDiv, map);

//   	//insert the zoom div on the top left of the map
//   	map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);


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

              if(intoMessage == "span.wpcf7-form-control-wrap.your-name") {
                $(".form-group .holder:nth-child(1) .error").css({"visibility" : "visible"});
              }
              if(intoMessage == "span.wpcf7-form-control-wrap.your-email" ){
                $(".form-group .holder:nth-child(2) .error").css({"visibility" : "visible"});
              }
              if(intoMessage == "span.wpcf7-form-control-wrap.your-message") {
                $(".form-group .holder:nth-child(3) .error").css({"visibility" : "visible"});
              }

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
            $(".modal-body p").text("Please enter a valid information.");
            $(".page-template-contact").css("overflow-y", "scroll");

          } else {
            $(".loader").addClass("hidden");

            $("#myModal-error").css("display", "block");
            $("body").addClass("modal-open");
            $(".modal.fade").addClass("in");
            $(".modal-backdrop.fade").addClass("in");
            $(".modal-title").text("Successfull");
            $(".modal-body p").text("Your message was successfully sent. Thank you!");
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



// RECAPTCA - I'M NOT A ROBOT
var onloadCallback = function() {
  grecaptcha.render('re-captcha', {
    'sitekey': '6LdZIpcUAAAAAI2bvnnVOLYrvDDS6Wu1pHefdfv6'
  });
};

// $(".place-card.place-card-large").css("display", "none !important" )