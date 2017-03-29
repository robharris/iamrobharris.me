(function($) {

    /* Document ready */
    $(document).ready(function() {
        
        $(".btn-info-i").on("click", function() {
            var clickID = $(this).attr("id");
            //console.log(clickID);
        
            var split = clickID.substring(clickID.indexOf("-")+1);
            //console.log(split);
            
            $("nav").addClass("open-nav-overlay, white-logo");
            $("#info-overlay").show();
            $("#info-overlay").addClass("white-colour");
            TweenMax.to($("#info-overlay"), .5, {alpha: 1, ease:Power0.easeIn});
            $("#" + split).show();
            
            if ($(document).height() > $(window).height()) {
                var b = ($("html").scrollTop()) ? $("html").scrollTop() : $("body").scrollTop();
                $("html").addClass("noscroll").css("top", -b);
            }
        });
        
        $("#btn-close-info-overlay").on("click", function(){
            $("nav").removeClass("open-nav-overlay, white-logo");
            TweenMax.to($("#info-overlay"), .5, {alpha: 0, ease:Power0.easeIn, onComplete:function() {
                $("#info-overlay").hide();
                $(".info-content").hide();
                $("#info-overlay").removeClass("white-colour");
            }});
            
            var b = parseInt($("html").css("top"));
            $("html").removeClass("noscroll");
            $("html,body").scrollTop(-b);
        });
    }); 
    
})(jQuery);

