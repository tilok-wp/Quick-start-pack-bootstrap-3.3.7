(function($) {
    
    "use strict";

    //Hide Preloader
	$(window).on('load', function() {
		$('.preloader-area').delay(200).fadeOut(500);
	});

     // Scroll Top Icon Show & Hide
    $(function() {
        var myWindowScroll = 800;
        $(window).scroll(function() {    
            if ($(window).scrollTop() > myWindowScroll) {
                $("a.to-top").fadeIn("slow");
            } else {
                $("a.to-top").fadeOut("slow");
            }
        });
    });



})(jQuery);