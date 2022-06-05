$(document).ready(() => {
    $('.scroll-up').fadeOut(1);
    $(window).scroll(() => {
        var windowPos = $(window).scrollTop();
        if (windowPos > 150){
            $('.scroll-up').fadeIn(100);
        } else {
            $('.scroll-up').fadeOut(1);
        }
    });

    $('.scroll-up').click(() => {
        var position = $('.header-navigation').position;
        scroll(0, position.top);
    })

    $('#about-nav').click(() => {
        var position = $('.about').position();
        position.top = position.top - 70;
        scroll(0, position.top);
    });

    $('#portfolio-nav').click(() => {
        var position = $('.work').position();
        position.top = position.top + 20;
        scroll(0, position.top);
    });
});