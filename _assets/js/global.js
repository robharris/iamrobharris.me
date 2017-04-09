(function($) {
    /* Functions */
    /*var backToTop = function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, 1000);
    };*/
     
    // Variables
    var loader = $('.loader');
    var pace = $('.pace');
    var logoOne = $(".nav-logo #logo-one");
    var logoTwo = $(".nav-logo #logo-two");

    // Document ready 
    $(document).ready(function() {
        
         $("#main-menu").on("click", function() {
                                          
            if(document.getElementById("home-outer")) {

                if($(".nav-links").is(":visible")) {
                    $("#main-menu .bar").removeClass("animate");
                    $(".nav-links").fadeOut(function() {
                       $(".icon").fadeIn(); 
                    });
                } else {
                    $("#main-menu .bar").addClass("animate");
                    $(".icon").fadeOut(function() {
                        $(".nav-links").show();
                        $(".nav-section").fadeIn();
                    });
                }

            } else {
                
                if($(".nav-section").is(":visible")) {

                    $(".nav-section").fadeOut(900, function() {
                        $(".nav-logo #logo-two").fadeOut(function() {
                            $("#main-menu .bar").removeClass("animate");
                            $(".nav-logo #logo-one").fadeIn();
                        });
                        $(".nav-links").velocity({
                            height: "0px"
                        }, 900); 
                    });
                } else {
                    
                    $("#main-menu .bar").addClass("animate");
                    $("#main-menu .bar").addClass("colour-animation");
                    
                    $(".nav-logo #logo-one").fadeOut(function() {
                        $(".nav-logo #logo-two").fadeIn();
                    });
                    
                    $(".nav-links").velocity({
                        height: "100%"
                    }, 1200, [500, 20], function() {
                        $(".nav-section").fadeIn(1000);
                    });
                }
            }  

        });
        
        $("#btn-gamer-tags").on("click", function() {
            $("#gamer-tags").show();
            TweenMax.to($("#gamer-tags"), 0.5, {
                alpha: 1,
                ease: Power0.easeIn
            })
        });
        $("#btn-close-gamer-tags").on("click", function() {
            TweenMax.to($("#gamer-tags"), 0.5, {
                alpha: 0,
                ease: Power0.easeIn,
                onComplete: function() {
                    $("#gamer-tags").hide()
                }
            })
        });
        $("#btn-timeline").on("click", function() {
            $("html").addClass("scroll");
            $("#timeline").show();
            $("#cd-timeline").fadeIn();
        });
        $("#btn-close-timeline").on("click", function() {
            $("html").removeClass("scroll");
            $("#timeline").fadeOut();
        });
        $(window).load(function() {
            window.setTimeout(function() {
                
                loader.velocity({
                    opacity: 0
                }, 1000, function() {
                    loader.hide();
                });
                
            }, 500);           
            
        });
        
    }); 
    
})(jQuery);