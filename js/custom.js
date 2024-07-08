$(document).ready(function () {
    $(".responsive-menu").hide();
    $(".btn-menu a").click(function () {
        if ($(this).attr("data-change") === "close") {
            $(".responsive-menu").slideDown();
            $(this).attr("data-change", "open");
        } else {
            $(".responsive-menu").slideUp();
            $(this).attr("data-change", "close");
        }
    });


    //****************************************
    var container_image1 = $("#container_image1");
    var container_image2 = $("#container_image2");
    var container_image3 = $("#container_image3");

    $("#change_image1").click(function () {
        var x = $(this).attr("src");
        container_image1.attr("src", x);
    });
    $("#change_image2").click(function () {
        var x = $(this).attr("src");
        container_image1.attr("src", x);
    });

    $("#change_image3").click(function () {
        var x = $(this).attr("src");
        container_image2.attr("src", x);
    });
    $("#change_image4").click(function () {
        var x = $(this).attr("src");
        container_image2.attr("src", x);
    });

    $("#change_image5").click(function () {
        var x = $(this).attr("src");
        container_image3.attr("src", x);
    });
    $("#change_image6").click(function () {
        var x = $(this).attr("src");
        container_image3.attr("src", x);
    });
    //****************************************
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    $('.scrollToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
    // *****************************************
    var w = $(window).innerWidth();
    if (w > 1060) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 150) {
                $("nav").addClass("showing");
            } else {
                $("nav").removeClass("showing");
            }
        });
    }

});
