(function($) {

    /* Document ready */
    $(document).ready(function() {
        $('#maximage').maximage();
        
        $("#info-button").on("click", function() {
            $("nav").addClass("open-nav-overlay");
            $("#info-overlay").show();
            TweenMax.to($("#info-overlay"), .5, {alpha: 1, ease:Power0.easeIn});
        });
        
        $("#btn-close-info-overlay").on("click", function(){
            $("nav").removeClass("open-nav-overlay");
            TweenMax.to($("#info-overlay"), .5, {alpha: 0, ease:Power0.easeIn, onComplete:function() {
                $("#info-overlay").hide();
            }});
        });
    }); 
    
})(jQuery);