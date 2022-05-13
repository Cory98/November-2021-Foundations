$(document).ready(function() {
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemtop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)); 
    }

    $(window).scroll(function() {
        $('.scroll-animations .animate__animated').each(function() {
            if (isScrolledIntoView(this) === true) {
                $(this).addClass('animate__fadeInLeft');
            }
        });
    });
});