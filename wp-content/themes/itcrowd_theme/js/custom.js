// LOADER
window.addEventListener("load", function() {
    const loader = document.querySelector(".loader");
    loader.className += " hidden";
});

$(document).ready(function(){

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
    // NAVBAR BUTTON CHANGED TO X (HAMBURGER MENU)
    $('#nav-icon3').click(function() {
        $(this).toggleClass('open');
    });

    // NAVBAR
    $(".page-template-homepage .header").css("background-color", "rgba(0,0,0,0.6)");
    $(".page-template-contact .header").css("background-color", "rgba(0,0,0,0.6)");
    $(".error404 .header").css("background-color", "rgba(0,0,0,0.6)");

    if($( window ).width() > 991){

        $(document).on("scroll", function(){
            if($(document).scrollTop() > 15){
                // HOME PAGE PAGE
                $(".page-template-homepage .logo").css({"padding-top" : "0px", "transition" : "0.4s"})
                $(".page-template-homepage .header ul li").css({"padding" : "0", "transition" : "0.4s"});
                $(".page-template-homepage .header").css({"background-color" : "#222222", "transition" : "0.4s"});
                // ABOUT US PAGE
                $(".page-template-aboutUs .logo").css({"padding-top" : "0px", "transition" : "0.4s"})
		        $(".page-template-aboutUs .header ul li").css({"padding" : "0", "transition" : "0.4s"});
                // OUR SERVICES PAGE
                $(".page-template-services .logo").css({"padding-top" : "0px", "transition" : "0.4s"})
                $(".page-template-services .header ul li").css({"padding" : "0", "transition" : "0.4s"});
                // CAREER PAGE
                $(".page-template-career .logo").css({"padding-top" : "0px", "transition" : "0.4s"})
                $(".page-template-career .header ul li").css({"padding" : "0", "transition" : "0.4s"});
                // CONTACT PAGE
                $(".page-template-contact .logo").css({"padding-top" : "0px", "transition" : "0.4s"})
                $(".page-template-contact .header ul li").css({"padding" : "0", "transition" : "0.4s"});
                $(".page-template-contact .header").css({"background-color" : "#222222", "transition" : "0.4s"});
                // ERROR PAGE
                $(".error404 .logo").css({"padding-top" : "0px", "transition" : "0.4s"})
                $(".error404 .header ul li").css({"padding" : "0", "transition" : "0.4s"});
                $(".error404 .header").css({"background-color" : "#222222", "transition" : "0.4s"});
            }
            else {
                // HOME PAGE PAGE
                $(".page-template-homepage .logo").css({"padding-top" : "5px" ,"transition" : "0.4s"});
                $(".page-template-homepage .header ul li").css({"padding" : "5px 0px", "transition" : "0.4s"});
                $(".page-template-homepage .header").css({"background-color" : "rgba(0,0,0,0.6)", "transition" : "0.4s"});
                // ABOUT US PAGE
                $(".page-template-aboutUs .logo").css({"padding-top" : "5px" ,"transition" : "0.4s"});
                $(".page-template-aboutUs .header ul li").css({"padding" : "5px 0px", "transition" : "0.4s"});
                // OUR SERVICES PAGE
                $(".page-template-services .logo").css({"padding-top" : "5px" ,"transition" : "0.4s"});
                $(".page-template-services .header ul li").css({"padding" : "5px 0px", "transition" : "0.4s"});
                // CAREER PAGE
                $(".page-template-career .logo").css({"padding-top" : "5px" ,"transition" : "0.4s"});
                $(".page-template-career .header ul li").css({"padding" : "5px 0px", "transition" : "0.4s"});
                // CONTACT PAGE
                $(".page-template-contact .logo").css({"padding-top" : "5px" ,"transition" : "0.4s"});
                $(".page-template-contact .header ul li").css({"padding" : "5px 0px", "transition" : "0.4s"});
                $(".page-template-contact .header").css({"background-color" : "rgba(0,0,0,0.6)", "transition" : "0.4s"});
                // ERROR PAGE
                $(".error404 .logo").css({"padding-top" : "5px" ,"transition" : "0.4s"});
                $(".error404 .header ul li").css({"padding" : "5px 0px", "transition" : "0.4s"});
                $(".error404 .header").css({"background-color" : "rgba(0,0,0,0.6)", "transition" : "0.4s"});
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
               
        $(".navbar-toggle").on('click', function() {
            if (!$(".navbar-collapse").hasClass("in")) {
                // HOME PAGE 
                $(".page-template-homepage .header").css("background-color", "#222222");
                // CONTACT PAGE
                $(".page-template-contact .header").css("background-color", "#222222");
                // ERROR PAGE
                $(".error404 .header").css("background-color", "#222222");
            }
        });

        function hasScrolled() {
            var st = $(this).scrollTop();
            // Make sure they scroll more than delta
            if(Math.abs(lastScrollTop - st) <= delta)
            return;
            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
            if (st > lastScrollTop && st > navbarHeight){
                // Scroll Down
                // ALL PAGEs
                $('.header').removeClass('nav-down').addClass('nav-up').css("top", "-330px");
                $(".sticky-tablet").removeClass('second-nav-down').addClass("second-nav-up");
            } 
            else {
                // Scroll Up
                if(st <= 2 && st >= 1){
                    // ALL PAGES
                    $(".header button").on("click", function() {
                        $(".nav.navbar-inverse .header").css("background", "#222222");
                    });
                    if($(".navbar-collapse.collapse").hasClass("in")){
                        // HOME PAGE
                        $(".page-template-homepage .header button").on("click", function() {
                            $(".page-template-homepage .nav.navbar-inverse.header").css("background", "#222222");
                        });
                        $(".page-template-homepage .header").removeClass("shrink");
                        $(".page-template-homepage .nav.navbar-inverse.header").css("background", "#222222");
                        // CONTACT PAGE
                        $(".page-template-contact .header button").on("click", function() {
                            $(".page-template-contact .nav.navbar-inverse.header").css("background", "#222222");
                        });
                        $(".page-template-contact .header").removeClass("shrink");
                        $(".page-template-contact .nav.navbar-inverse.header").css("background", "#222222");
                        // ERROR PAGE
                        $(".error404 .header button").on("click", function() {
                            $(".error404 .nav.navbar-inverse.header").css("background", "#222222");
                        });
                        $(".error404 .header").removeClass("shrink");
                        $(".error404 .nav.navbar-inverse.header").css("background", "#222222");
                    } 
                    else {
                        // HOME PAGE
                        $(".page-template-homepage .header").removeClass("shrink");
                        $(".page-template-homepage .nav.navbar-inverse.header").css("background-color", "rgba(0,0,0,0.6)");
                        // CONTACT PAGE
                        $(".page-template-contact .header").removeClass("shrink");
                        $(".page-template-contact .nav.navbar-inverse.header").css("background-color", "rgba(0,0,0,0.6)");
                        // ERROR PAGE
                        $(".error404 .header").removeClass("shrink");
                        $(".error404 .nav.navbar-inverse.header").css("background-color", "rgba(0,0,0,0.6)");
                    }
                }
                else if(st + $(window).height() < $(document).height()) {
                    $('.header').removeClass('nav-up').addClass('nav-down').css("top", "0px");
                    $(".sticky-tablet").removeClass('second-nav-up').addClass("second-nav-down").css("background-color", "#222222");
                    // HOME PAGE                    
                    $(".page-template-homepage .header").css("background", "#222222", "!important");
                    $(".page-template-homepage .nav.navbar-inverse.header").css("background", "#222222");
                    // CONTACT PAGE                    
                    $(".page-template-contact .header").css("background", "#222222", "!important");
                    $(".page-template-contact .nav.navbar-inverse.header").css("background", "#222222");
                    // ERROR PAGE
                    $(".error404 .header").css("background", "#222222", "!important");
                    $(".error404 .nav.navbar-inverse.header").css("background", "#222222");
                }
            }
            lastScrollTop = st;

            if($("body").position().top == st){
                $(".header button").on("click", function() {
                    // ALL PAGES
                    $(".nav.navbar-inverse.header").css("background", "#222222");
                });

                if($(".navbar-collapse.collapse").hasClass("in")){
                    // ALL PAGES
                    $(".header button").on("click", function() {
                        $(".nav.navbar-inverse.header").css("background", "#222222");
                    });
                    // ALL PAGES
                    $(".header").removeClass("shrink");
                    $(".nav.navbar-inverse.header").css("background", "#222222");
                } else {
                    // ALL PAGES
                    $(".header").removeClass("shrink");
                    $(".page-template-homepage .nav.navbar-inverse.header").css("background-color", "rgba(0,0,0,0.6)");
                    $(".page-template-contact .nav.navbar-inverse.header").css("background-color", "rgba(0,0,0,0.6)");
                }
            }
        }
    }


});