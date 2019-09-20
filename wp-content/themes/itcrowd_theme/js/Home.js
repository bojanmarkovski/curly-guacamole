$(document).ready(function(){

  // MAIN SLIDER
  $('.one-time').slick({
//     dots: true,
//     infinite: true,
//     speed: 700,
//     slidesToShow: 1,
//     adaptiveHeight: true,
//     autoplay: true,
//     autoplaySpeed: 5000,
  });

  // ANIMATE TABLET AND MOBILE ON MAIN SLIDER
  if ($( window ).width() >= 768) {
    $(".z-index .slideInUpWatch").animate({top: '33%'},2400);
    $(".z-index .slideInUpMobile")
      .animate({
              top: '43%'
      },800)
      .animate({
              top: "58%"
      },700)
      .animate({
              top: "52%"
      },600)
  }
  
  // IF WINDOW > 1170 SNAKE IS IN THE MIDDLE
  if($( window ).width() > 1170){
    $(document).ready(function(){

      var screenWidth = $( window ).width();
      var rightSpace = screenWidth - 1170;

      if (screen.width > 992) {
        $(".work-process").css("margin-left", rightSpace / 2)

        $(window).on('resize', function() {
          var screenWidth = $( window ).width();
          var rightSpace = screenWidth - 1170;
          $(".work-process").css("margin-left", rightSpace / 2)
        });
      }
    });
  }

  // IF WINDOW <= 1170 ANIMATE SNAKE
  if($( window ).width() <= 1170){
    var flag = true;

    $(window).scroll(function(){
      if ($(".work-process").hasClass("newClass") && flag){
        var screenWidth = $( window ).width();
        var delay = (screenWidth / 220 ) * 1600 - 2000;
        var animationRight = 1170 - screenWidth;
        var widthWindow = $( window ).width();
        flag = false;
        $(".header").css("width", widthWindow);
        setTimeout( function() {
          $(".work-process-row-container").stop()
            .animate({
              right: animationRight + "px"
            }, (7600 - delay), function() {

            })
            .animate({
              right: 0
            }, function(){
              $(".work-process-row-container").css({"overflow-x" : "scroll"});
              $(".header").css("width", "100%");
            });
        }, delay)
      }
    });
  }
});



// ON SCROLL DOWN SHOW DIV
$(window).scroll( function(){
        
  /* Check the location of each desired element */
  $('.our-skills-process').each( function(i){
      var startingPositionOurSkills = $(this).position().top + ($(this).outerHeight() / 2) - 70;
      var bottomOfWindow = $(window).scrollTop() + $(window).height() - 70;
      if( bottomOfWindow > startingPositionOurSkills ){
          $(".wrapper-technologies").addClass("testimonies");
          $(".company-icons").css("visibility" , "visible");
      }
  });
  $('.work-process-row-container').each( function(i){
  
      var startingPositionOurSkills = $(this).position().top + ($(this).outerHeight() / 2) - 70;
      var bottomOfWindow = $(window).scrollTop() + $(window).height() - 70;
      if( bottomOfWindow > startingPositionOurSkills ){
          $(".work-process").css("display" , "block").addClass("newClass");
      }
  });
});

if($( window ).width() >= 1680){
  $(".iq-font-white.iq-pt-15 li:first-child").animate({left: '200px'},1200);
  $(".iq-font-white.iq-pt-15 li:nth-child(2)").animate({left: '250'},1600);
  $(".iq-font-white.iq-pt-15 li:nth-child(3)").animate({left: '310px'},2000);

  $(".iq-font-white.iq-pt-15 li:first-child").animate({left: '150px'},800);
  $(".iq-font-white.iq-pt-15 li:nth-child(2)").animate({left: '200px'},800);
  $(".iq-font-white.iq-pt-15 li:nth-child(3)").animate({left: '250px'},800);
} else if($( window ).width() <= 1680 && $( window ).width() >= 1380) {
  $(".iq-font-white.iq-pt-15 li:first-child").animate({left: '90px'},1200);
  $(".iq-font-white.iq-pt-15 li:nth-child(2)").animate({left: '190'},1600);
  $(".iq-font-white.iq-pt-15 li:nth-child(3)").animate({left: '300px'},2000);

  $(".iq-font-white.iq-pt-15 li:first-child").animate({left: '50px'},800);
  $(".iq-font-white.iq-pt-15 li:nth-child(2)").animate({left: '150px'},800);
  $(".iq-font-white.iq-pt-15 li:nth-child(3)").animate({left: '240px'},800);
} else if($( window ).width() <= 1380 && $( window ).width() >= 992){
  $(".iq-font-white.iq-pt-15 li:first-child").animate({left: '60px'},1200);
  $(".iq-font-white.iq-pt-15 li:nth-child(2)").animate({left: '140'},1600);
  $(".iq-font-white.iq-pt-15 li:nth-child(3)").animate({left: '180px'},2000);

  $(".iq-font-white.iq-pt-15 li:first-child").animate({left: '10px'},800);
  $(".iq-font-white.iq-pt-15 li:nth-child(2)").animate({left: '60px'},800);
  $(".iq-font-white.iq-pt-15 li:nth-child(3)").animate({left: '100px'},800);
}
