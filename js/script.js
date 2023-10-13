$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.qnavigation').addClass('fixed');
    } else {
        $('.qnavigation').removeClass('fixed');
    }
});