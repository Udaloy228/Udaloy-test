$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.section_navigation').addClass('fixed');
    } else {
        $('.section_navigation').removeClass('fixed');
    }
});