$(document).ready(function() {
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)); 
    }

    $(window).scroll(function() {
        $('.scroll-animations .animate__animated').each(function() {
            if (isScrolledIntoView(this) === true) {
                $(this).addClass('animate__fadeInLeft');
            }
        });
    });

    $('button').on("click", function() {
        if ($("name").val() === "") {
            $("#name")
            .addClass("form-error animate__animated animate__shakeX")
            .one (
                "webskitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                function() {
                    $(this).removeClass("animate__animated animate__shakeX")
                }
            );
        } else {
            $("#name").removeClass("form-error");
        }

        if ($("#email").val() === "") {
            $("#email")
            .addClass("form-error animate__animated animate__shakeX")
            .one (
                "webskitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                function() {
                    $(this).removeClass("animate__animated animate__shakeX")
                }
            );
        } else {
            $("#email").removeClass("form-error");
        }

        if ($("message").val() === "") {
            $("#messagee")
            .addClass("form-error animate__animated animate__shakeX")
            .one (
                "webskitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
                function() {
                    $(this).removeClass("animate__animated animate__shakeX")
                }
            );
        } else {
            $("#message").removeClass("form-error");
        }
    });
});