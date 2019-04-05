// LOADER
window.addEventListener("load", function() {
	const loader = document.querySelector(".loader");
	loader.className += " hidden";
});

// About us
$(document).ready(function(){

		$('#nav-icon3').click(function(){
			$(this).toggleClass('open');
		});

	// MOBILE NAVBAR
	$('.smooth-scroll-mobile').click(function(e){
	  	e.preventDefault();
		var target = $($(this).attr('href'));
		if(target.length){

			var topOffset = 34;
			if ($(".navbar-inverse").hasClass("nav-down")) {
				topOffset = 92;
			}
		    var scrollTo = target.offset().top - topOffset;
		    $('body, html').animate({scrollTop: scrollTo + 'px'}, 800);
		}
	});

	$('.slider-team').slick({
		infinite: true,
		speed: 400,
		slidesToShow: 4,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1450,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				}
			},
		    {
				breakpoint: 1090,
				settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2,
				}
			},
		    {
				breakpoint: 630,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			}
  		]
	});
	
	// CLOSE AN OPEN COLLAPSED NAVBAR WHEN CLICKING OUTSIDE
	$(document).click(function (event) {
		var clickover = $(event.target);
		var $navbar = $(".navbar-collapse");	          
	    var _opened = $navbar.hasClass("in");
	    if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
			$navbar.collapse('hide');
			$("#nav-icon3").toggleClass('open');
		}
	});

  	if($( window ).width() > 991){

        $(document).on("scroll", function(){
          	if
            	($(document).scrollTop() > 15){
		            $(".logo").css({"padding-top" : "0px", "transition" : "0.4s"})
		            $(".header ul li").css({"padding" : "0", "transition" : "0.4s"});
	          	}
	        else {
	        	$(".logo").css({"padding-top" : "5px" ,"transition" : "0.4s"});
	            $(".header ul li").css({"padding" : "5px 0px", "transition" : "0.4s"});
			}
        });
    }
    else{
        // Hide Header on on scroll down
        var didScroll;
        var lastScrollTop = 0;
        var delta = 5;
        var navbarHeight = $('.header').outerHeight();

        $(window).scroll(function(event){
            didScroll = true;
        });

        setInterval(function() {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 250);

        function hasScrolled() {
            var st = $(this).scrollTop();
            
            // Make sure they scroll more than delta
            if(Math.abs(lastScrollTop - st) <= delta)
                return;
            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
            if (st > lastScrollTop && st > navbarHeight){
                // Scroll Down
                $('.header').removeClass('nav-down').addClass('nav-up').css("top", "-330px");
                $(".sticky-tablet").removeClass('second-nav-down').addClass("second-nav-up");
            } else {
                // Scroll Up
                if(st + $(window).height() < $(document).height()) {
                    $('.header').removeClass('nav-up').addClass('nav-down').css("top", "0px");
                	$(".sticky-tablet").removeClass('second-nav-up').addClass("second-nav-down");
                }
            }

            lastScrollTop = st;
        }
    }

});



	$(".career-left").on('click', '.row.pd-box', function() {
		let boxShadow = $(this).find(".career-box").children("div");
		if (boxShadow.hasClass("shadow-paragraph")) {
			boxShadow.removeClass("shadow-paragraph");
			// boxShadow.slideDown("shadow-paragraph");
			boxShadow.addClass("clicked-cart");
		}
		else {
			boxShadow.addClass("shadow-paragraph");
			// $(this).find(".shadow-paragraph").slideUp(1000);
		}

		for (var i = 0; i < $(".career-box").length; i++) {
			if(!$($(".career-box")[i]).children("div").hasClass("clicked-cart")) {
				$($(".career-box")[i]).children("div").addClass("shadow-paragraph");
			let inputJobApply = $($(this).find("h3")[0]).text();
			$(this).parents(".career-left").parent(".row.pd-70px").find(".career-right .select").val(inputJobApply);
			}
		}
		boxShadow.removeClass("clicked-cart");

	});

// Contact Page
jQuery(document).ready(function($){
	//set your google maps parameters
	var $latitude = 42.006068,
		$longitude = 21.392550,
		$map_zoom = 15;

	//google map custom marker icon - .png fallback for IE11
	var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
	var $marker_url = 'http://' + window.location.hostname + '/wordpress/wp-content/uploads/2019/04/pin.png';

	//define the basic color of your map, plus a value for saturation and brightness
	var	$main_color = '#2d313f',
		$saturation= -20,
		$brightness= 5;

	//we define here the style of the map
	var style= [ 
		{
			//set saturation for the labels on the map
			elementType: "labels",
			stylers: [
				{saturation: $saturation}
			]
		},  
	    {	//poi stands for point of interest - don't show these lables on the map 
			featureType: "poi",
			elementType: "labels",
			stylers: [
				{visibility: "off"}
			]
		},
		{
			//don't show highways lables on the map
	        featureType: 'road.highway',
	        elementType: 'labels',
	        stylers: [
	            {visibility: "off"}
	        ]
	    }, 
		{ 	
			//don't show local road lables on the map
			featureType: "road.local", 
			elementType: "labels.icon", 
			stylers: [
				{visibility: "off"} 
			] 
		},
		{ 
			//don't show arterial road lables on the map
			featureType: "road.arterial", 
			elementType: "labels.icon", 
			stylers: [
				{visibility: "off"}
			] 
		},
		{
			//don't show road lables on the map
			featureType: "road",
			elementType: "geometry.stroke",
			stylers: [
				{visibility: "off"}
			]
		}, 
		//style different elements on the map
		{ 
			featureType: "transit", 
			elementType: "geometry.fill", 
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" }, 
				{ lightness: $brightness }, 
				{ saturation: $saturation }
			]
		}, 
		{
			featureType: "poi",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" }, 
				{ lightness: $brightness }, 
				{ saturation: $saturation }
			]
		},
		{
			featureType: "poi.government",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" }, 
				{ lightness: $brightness }, 
				{ saturation: $saturation }
			]
		},
		{
			featureType: "poi.sport_complex",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" }, 
				{ lightness: $brightness }, 
				{ saturation: $saturation }
			]
		},
		{
			featureType: "poi.attraction",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" }, 
				{ lightness: $brightness }, 
				{ saturation: $saturation }
			]
		},
		{
			featureType: "poi.business",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" }, 
				{ lightness: $brightness }, 
				{ saturation: $saturation }
			]
		},
		{
			featureType: "transit",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" }, 
				{ lightness: $brightness }, 
				{ saturation: $saturation }
			]
		},
		{
			featureType: "transit.station",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" }, 
				{ lightness: $brightness }, 
				{ saturation: $saturation }
			]
		},
		{
			featureType: "landscape",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" }, 
				{ lightness: $brightness }, 
				{ saturation: $saturation }
			]

		},
		{
			featureType: "road",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" }, 
				{ lightness: $brightness }, 
				{ saturation: $saturation }
			]
		},
		{
			featureType: "road.highway",
			elementType: "geometry.fill",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" }, 
				{ lightness: $brightness }, 
				{ saturation: $saturation }
			]
		}, 
		{
			featureType: "water",
			elementType: "geometry",
			stylers: [
				{ hue: $main_color },
				{ visibility: "on" }, 
				{ lightness: $brightness }, 
				{ saturation: $saturation }
			]
		}
	];
		// lat: , lng:
	//set google map options
	if ($(window).width() > 768) {
		var map_options = {
	      	center: new google.maps.LatLng(42.007068, 21.380550),
	      	zoom: $map_zoom,
	      	panControl: false,
	      	zoomControl: true,
	      	mapTypeControl: false,
	      	streetViewControl: true,
	      	mapTypeId: google.maps.MapTypeId.ROADMAP,
	      	scrollwheel: true,
	      	styles: style,
	    }
	} else {
		var map_options = {
	      	center: new google.maps.LatLng($latitude, $longitude),
	      	zoom: $map_zoom,
	      	panControl: false,
	      	zoomControl: true,
	      	mapTypeControl: false,
	      	streetViewControl: true,
	      	mapTypeId: google.maps.MapTypeId.ROADMAP,
	      	scrollwheel: true,
	      	styles: style,
	    }
	}
    //inizialize the map
	var map = new google.maps.Map(document.getElementById('google-container'), map_options);
	//add a custom marker to the map				
	var marker = new google.maps.Marker({
	  	position: new google.maps.LatLng($latitude, $longitude),
	    map: map,
	    visible: true,
	 	icon: $marker_url,
	});

	//add custom buttons for the zoom-in/zoom-out on the map
	function CustomZoomControl(controlDiv, map) {
		//grap the zoom elements from the DOM and insert them in the map 
	  	var controlUIzoomIn= document.getElementById('cd-zoom-in'),
	  		controlUIzoomOut= document.getElementById('cd-zoom-out');
			controlDiv.appendChild(controlUIzoomIn);
			controlDiv.appendChild(controlUIzoomOut);

		// Setup the click event listeners and zoom-in or out according to the clicked element
		google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
		    map.setZoom(map.getZoom()+1)
		});
		google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
		    map.setZoom(map.getZoom()-1)
		});
	}

	var zoomControlDiv = document.createElement('div');
 	var zoomControl = new CustomZoomControl(zoomControlDiv, map);

  	//insert the zoom div on the top left of the map
  	map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
});

var onloadCallback = function() {
  grecaptcha.render('re-captcha', {
    'sitekey': '6LdZIpcUAAAAAI2bvnnVOLYrvDDS6Wu1pHefdfv6'
  });
};

// CONTACT
$(document).ready(function() {
	
	// NAVBAR BUTTON CHANGED TO X (HAMBURGER MENU)
	$('#nav-icon3').click(function() {
		$(this).toggleClass('open');
  });

	// CLOSE AN OPEN COLLAPSED NAVBAR WHEN CLICKING OUTSIDE
	$(document)
	  .click(function(event) {
	    var clickover = $(event.target);
	    var $navbar = $(".navbar-collapse");
	    var _opened = $navbar.hasClass("in");
	    if (_opened === true && !clickover.hasClass("navbar-toggle")) {
	      $navbar.collapse('hide');
	      $("#nav-icon3").toggleClass('open');
	    }
	  });

	$(".page-template-contact .header")
	  .css("background-color", "rgba(0,0,0,0.6)");

	if ($(window)
	  .width() > 991) {

	  $(document)
	    .on("scroll", function() {
	      if ($(document).scrollTop() > 15) {
	        $(".page-template-contact .logo").css({
	            "padding-top": "0px",
	            "transition": "0.4s"
	          })
	        $(".page-template-contact .header ul li").css({
	            "padding": "0",
	            "transition": "0.4s"
	          });
	        $(".page-template-contact .header").css({
	            "background-color": "#222222",
	            "transition": "0.4s"
	          });
	      }
	      else {
	        $(".page-template-contact .logo").css({
	            "padding-top": "5px",
	            "transition": "0.4s"
	          });
	        $(".page-template-contact .header ul li").css({
	            "padding": "5px 0px",
	            "transition": "0.4s"
	          });
	        $(".page-template-contact .header").css({
	            "background-color": "rgba(0,0,0,0.6)",
	            "transition": "0.4s"
	          });
	      }
	    });
	}
	else {
	  // Hide Header on on scroll down
	  var didScroll;
	  var lastScrollTop = 0;
	  var delta = 5;
	  var navbarHeight = $('.page-template-contact .header').outerHeight();

	  $(window).scroll(function(event) {
	      didScroll = true;
	    });

	  setInterval(function() {
	    if (didScroll) {
	      hasScrolled();
	      didScroll = false;
	    }
	  }, 250);

	  $(".page-template-contact .navbar-toggle").on('click', function() {
	      if (!$(".navbar-collapse").hasClass("in")) {
	        $(".header").css("background-color", "#222222");
	      }
	    });

	  function hasScrolled() {
	    var st = $(this).scrollTop();
	    // Make sure they scroll more than delta
	    if (Math.abs(lastScrollTop - st) <= delta)
	      return;
	    // If they scrolled down and are past the navbar, add class .nav-up.
	    // This is necessary so you never see what is "behind" the navbar.
	    if (st > lastScrollTop && st > navbarHeight) {
	      // Scroll Down
	      $('.page-template-contact .header').removeClass('nav-down').addClass('nav-up').css("top", "-330px");
	      $(".page-template-contact .sticky-tablet").removeClass('second-nav-down').addClass("second-nav-up");
	    }
	    else {
	      // Scroll Up
	      if (st <= 2 && st >= 1) {
	        $(".page-template-contact .header button").on("click", function() {
	            $(".page-template-contact .nav.navbar-inverse.header").css("background", "#222222");
	          });
	        if ($(".page-template-contact .navbar-collapse.collapse").hasClass("in")) {

	          $(".page-template-contact .header button").on("click", function() {
	              $(".nav.navbar-inverse.header").css("background", "#222222");
	            });

	          $(".page-template-contact .header").removeClass("shrink");
	          $(".page-template-contact .nav.navbar-inverse.header").css("background", "#222222");

	        } else {
	          $(".page-template-contact .header").removeClass("shrink");
	          $(".page-template-contact .nav.navbar-inverse.header").css("background-color", "rgba(0,0,0,0.6)");
	        }
	      }

	      else if (st + $(window).height() < $(document).height()) {
	        $('.page-template-contact .header').removeClass('nav-up').addClass('nav-down').css("top", "0px");
	        $(".page-template-contact .sticky-tablet").removeClass('second-nav-up').addClass("second-nav-down").css("background-color", "#222222");
	        $(".page-template-contact .header").css("background", "#222222", "!important");
	        $(".page-template-contact .nav.navbar-inverse.header").css("background", "#222222");
	      }
	    }

	    lastScrollTop = st;

	    if ($("body").position().top == st) {
	      $(".page-template-contact .header button").on("click", function() {
	          $(".page-template-contact .nav.navbar-inverse.header").css("background", "#222222");
	        });
	      if ($(".page-template-contact .navbar-collapse.collapse").hasClass("in")) {

	        $(".page-template-contact .header button").on("click", function() {
	            $(".nav.navbar-inverse.header").css("background", "#222222");
	          });

	        $(".page-template-contact .header").removeClass("shrink");
	        $(".nav.navbar-inverse.header").css("background", "#222222");

	      } else {
	        $(".page-template-contact .header").removeClass("shrink");
	        $(".page-template-contact .nav.navbar-inverse.header").css("background-color", "rgba(0,0,0,0.6)");
	      }
	    }
	  }
	}
});
// END CONTACT

// ABOUT US

// LOADER
window.addEventListener("load", function() {
	const loader = document.querySelector(".loader");
	loader.className += " hidden";
});


$(document).ready(function(){

	// MOBILE NAVBAR
	$('.smooth-scroll-mobile').click(function(e){
	  	e.preventDefault();
		var target = $($(this).attr('href'));
		if(target.length){

			var topOffset = 34;
			if ($(".navbar-inverse").hasClass("nav-down")) {
				topOffset = 92;
			}
		    var scrollTo = target.offset().top - topOffset;
		    $('body, html').animate({scrollTop: scrollTo + 'px'}, 800);
		}
	});

	$('.slider-team').slick({
			infinite: true,
			speed: 400,
			slidesToShow: 4,
			slidesToScroll: 4,
			responsive: [
				{
					breakpoint: 1450,
					settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					}
				},
			    {
					breakpoint: 1090,
					settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2,
					}
				},
			    {
					breakpoint: 630,
					settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					}
				}
	  		]
	});
	
	// CLOSE AN OPEN COLLAPSED NAVBAR WHEN CLICKING OUTSIDE
	$(document).click(function (event) {
		var clickover = $(event.target);
		var $navbar = $(".navbar-collapse");	          
	    var _opened = $navbar.hasClass("in");
	    if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
			$navbar.collapse('hide');
			$("#nav-icon3").toggleClass('open');
		}
	});

  	if($( window ).width() > 991){

        $(document).on("scroll", function(){
          	if
            	($(document).scrollTop() > 15){
		            $(".page-template-aboutUs .logo").css({"padding-top" : "0px", "transition" : "0.4s"})
		            $(".page-template-aboutUs .header ul li").css({"padding" : "0", "transition" : "0.4s"});
	          	}
	        else {
	        	$(".logo").css({"padding-top" : "5px" ,"transition" : "0.4s"});
	            $(".header ul li").css({"padding" : "5px 0px", "transition" : "0.4s"});
			}
        });
    }
    else{
        // Hide Header on on scroll down
        var didScroll;
        var lastScrollTop = 0;
        var delta = 5;
        var navbarHeight = $('.page-template-aboutUs .header').outerHeight();

        $(window).scroll(function(event){
            didScroll = true;
        });

        setInterval(function() {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 250);

        function hasScrolled() {
            var st = $(this).scrollTop();
            
            // Make sure they scroll more than delta
            if(Math.abs(lastScrollTop - st) <= delta)
                return;
            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
            if (st > lastScrollTop && st > navbarHeight){
                // Scroll Down
                $('.page-template-aboutUs .header').removeClass('nav-down').addClass('nav-up').css("top", "-330px");
                $(".page-template-aboutUs .sticky-tablet").removeClass('second-nav-down').addClass("second-nav-up");
            } else {
                // Scroll Up
                if(st + $(window).height() < $(document).height()) {
                    $('.page-template-aboutUs .header').removeClass('nav-up').addClass('nav-down').css("top", "0px");
                	$(".page-template-aboutUs .sticky-tablet").removeClass('second-nav-up').addClass("second-nav-down");
                }
            }

            lastScrollTop = st;
        }
    }

});



	$(".career-left").on('click', '.row.pd-box', function() {
		let boxShadow = $(this).find(".career-box").children("div");
		if (boxShadow.hasClass("shadow-paragraph")) {
			boxShadow.removeClass("shadow-paragraph");
			// boxShadow.slideDown("shadow-paragraph");
			boxShadow.addClass("clicked-cart");
		}
		else {
			boxShadow.addClass("shadow-paragraph");
			// $(this).find(".shadow-paragraph").slideUp(1000);
		}

		for (var i = 0; i < $(".career-box").length; i++) {
			if(!$($(".career-box")[i]).children("div").hasClass("clicked-cart")) {
				$($(".career-box")[i]).children("div").addClass("shadow-paragraph");
			let inputJobApply = $($(this).find("h3")[0]).text();
			$(this).parents(".career-left").parent(".row.pd-70px").find(".career-right .select").val(inputJobApply);
			}
		}
		boxShadow.removeClass("clicked-cart");

	});

	// $(".wrap-about-us").css("height", "auto")

// HAMBURGER MENU
$(document).ready(function(){
	$('#nav-icon3').click(function(){
		$(this).toggleClass('open');
	});
	// OUR SERVICES
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

// CAREER ==================================================
// LOADER
window.addEventListener("load", function() {
  const loader = document.querySelector(".loader");
  loader.className += " hidden";
});

$(document).ready(function() {

    // NAVBAR BUTTON CHANGED TO X (HAMBURGER MENU)
    $('#nav-icon3').click(function() {
        $(this).toggleClass('open');
      });

    if ($(window).width() > 991) {

      $(document).on("scroll", function() {
          if ($(document).scrollTop() > 15) {
            $(".logo").css({
                "padding-top": "0px",
                "transition": "0.4s"
              })
            $(".header ul li").css({
                "padding": "0",
                "transition": "0.4s"
              });
          }
          else {
            $(".logo").css({
                "padding-top": "5px",
                "transition": "0.4s"
              });
            $(".header ul li").css({
                "padding": "5px 0px",
                "transition": "0.4s"
              });
          }
        });

      $(".career-left").on('click', '.row.pd-box', function() {
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
              let inputJobApply = $($(this).find("h3")[0]).text();
              $(this).parents(".career-left").parent(".row.pd-70px").find(".career-right .select").val(inputJobApply);
            }
          }

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

        })
    }
    else {
      // Hide Header on on scroll down
      var didScroll;
      var lastScrollTop = 0;
      var delta = 5;
      var navbarHeight = $('.header').outerHeight();

      $(window).scroll(function(event) {
          didScroll = true;
        });

      setInterval(function() {
        if (didScroll) {
          hasScrolled();
          didScroll = false;
        }
      }, 250);

      function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
          return;
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
          // Scroll Down
          $('.header').removeClass('nav-down').addClass('nav-up').css("top", "-330px");
          $(".sticky-tablet").removeClass('second-nav-down').addClass("second-nav-up");
        } else {
          // Scroll Up
          if (st + $(window).height() < $(document).height()) {
            $('.header').removeClass('nav-up').addClass('nav-down').css("top", "0px");
            $(".sticky-tablet").removeClass('second-nav-up').addClass("second-nav-down");
          }
        }

        lastScrollTop = st;
      }

      $(".career-left").on('click', '.row.pd-box', function() {

          let boxShadow = $(this).find(".career-box").children("div");
          for (var i = 0; i < $(".career-box").length; i++) {
            if (!$($(".career-box")[i]).children("div").hasClass("clicked-cart")) {
              $($(".career-box")[i]).children("div").slideUp("shadow-paragraph");
              // $(this).children("div").children("div").addClass("shadow-paragraph")
              let inputJobApply = $($(this).find("h3")[0]).text();
              $(this).parents(".career-left").parent(".row.pd-70px").find(".career-right .select").val(inputJobApply);
            }
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
        });
    }

    // CLOSE AN OPEN COLLAPSED NAVBAR WHEN CLICKING OUTSIDE
    $(document).click(function(event) {
        var clickover = $(event.target);
        var $navbar = $(".navbar-collapse");
        var _opened = $navbar.hasClass("in");
        if (_opened === true && !clickover.hasClass("navbar-toggle")) {
          $navbar.collapse('hide');
          $("#nav-icon3").toggleClass('open');
        }
      });

    // INPUT UPLOAD FILE
    $("form").on("change", ".file-upload-field", function() {
        $(this).parent(".file-upload-wrapper").attr("data-text",$(this).val().replace(/.*(\/|\\)/, ''));
      });

    $(".file-upload-field").on("click", function() {
        $(this).css("border", "1px solid red")
      });

    $('.dropdown').change(function(e) {

        e.stopPropagation(); // when you click within the content area, it stops the page from seeing it as clicking the body too
        $(this).removeClass("input-holder");
        $(".first-option").css({
            "display": "none"
          }).text("");

        if ($(".input.select").val() == "") {
          $(".first-option").css({
              "display": "block",
              "transition": "0.7s"
            })
            .text("I am applying for *");
        } else if ($(".input.select").val() !== "I am applying for *") {
          $(this).removeClass("input-holder");
        }
      });

    $('body').click(function() {
        if (!$(".dropdown").hasClass("input-holder") && $(".first-option").css("display") == "none") {
          $(".dropdown").addClass("input-holder");
          $(".first-option").css({
              "display": "block",
              "transition": "0.7s"
            }).text("I am applying for *");
        }

        if ($(".input.select").val() !== "I am applying for *") {
          $(".dropdown").removeClass("input-holder");
          $(".first-option").css({
              "display": "none",
              "transition": "0.4s"
            }).text("");
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
