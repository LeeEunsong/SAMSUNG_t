jQuery(function($){
    $(".menu-toggle-btn").click(function(){
        $(".gnb").stop().slideToggle("fast");
    });
    
    var idx = 0;
    setInterval(function() {
        $('.slide>a').eq(idx).fadeOut(800);
        idx==2?idx=0:idx++;
        $('.slide>a').eq(idx).fadeIn(800);
    }, 3000);
});