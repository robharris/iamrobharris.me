if ($(".nav-links").is(":visible")) {
                $("nav").removeClass("open-nav-overlay");
                $(".nav-links").fadeOut(function(){
                    $(".icon").show();
                });
                /*TweenMax.to($(".nav-links"), 0.5, {
                    alpha: 0,
                    ease: Power0.easeIn,
                    onComplete: function() {
                        $(".nav-links").hide()
                    }
                });
                $(".column-sections .icon").show();
                TweenMax.to($(".column-sections .icon"), 0.5, {
                    alpha: 1,
                    ease: Power0.easeIn
                })*/
            } else {
                //$(".nav-links").show();
                $(".icon").fadeOut(function() {
                    $(".nav-links").fadeIn(function() {
                        typeit; 
                    });
                });
                
                $("nav").addClass("open-nav-overlay");
                /*TweenMax.to($(".nav-links"), 0.5, {
                    alpha: 1,
                    ease: Power0.easeIn
                });
                TweenMax.to($(".column-sections .icon"), 0.5, {
                    alpha: 0,
                    ease: Power0.easeIn,
                    onComplete: function() {
                        $(".column-sections .icon").hide()
                    }
                })*/
            }