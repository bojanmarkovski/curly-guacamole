$(document).ready(function(){
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

  if(navigator.userAgent.indexOf('Safari') !=-1 && navigator.userAgent.indexOf('Chrome') == -1){
    $(".waveWrapperInner").css("bottom", "0px");
    $(".waveWrapper").removeClass("waveAnimation");
  }
});