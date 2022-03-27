$(function () {
    'use strict';
    //Adjust Slider Height
    var windowHeight = $(window).height(),
        upperHeight = $('.upper-bar').innerHeight(),
        navHeight = $('.navbar').innerHeight();
    $('.slider,.carousel-item').height(windowHeight -(upperHeight + navHeight));

    //Featured Work Shuffle
    $('.featured-work ul li').on('click',function () {
        $(this).addClass('active').siblings().removeClass('active');
        // console.log($(this).data('class'));
        if($(this).data('class')==='all'){
            $('.shuffle-imgs .col-sm').css('opacity',1);
        } else {
            $('.shuffle-imgs .col-sm').css('opacity',.08);
            $($(this).data('class')).parent().css('opacity',1);
        }

    });

    //Counter
    // $('.counter').counterUp({
    //     delay: 10,
    //     time: 1000
    // });

    //counter just on time
    $('.counter').each(function () {
        $(this).prop('counter',1).animate({
            Counter: $(this).text()
        }, {
            duration: 1500,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    ////////////
});