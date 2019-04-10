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

