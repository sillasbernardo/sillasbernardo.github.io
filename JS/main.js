$(document).ready(() => {
    // ------- Button Up Start ----------
    // Fade in | Fade Out
    var scrollUp = '.scroll-up';
    $(scrollUp).fadeOut(1);
    $(window).scroll(() => {
        var windowPos = $(window).scrollTop();
        if (windowPos > 150){
            $(scrollUp).fadeIn(100);
        } else {
            $(scrollUp).fadeOut(1);
        }
    });

    // Scroll button up
    $(scrollUp).click(() => {
        var position = $('.header-navigation').position;
        scroll(0, position.top);
    })

    // ------- Button Up End ----------


    // ------- Go to about div ----------
    $('#about-nav').click(() => {
        var position = $('.about').position();
        position.top = position.top - 70;
        scroll(0, position.top);
    });


    // ------- Go to portfolio div ----------
    $('#portfolio-nav').click(() => {
        var position = $('.work').position();
        position.top = position.top + 20;
        scroll(0, position.top);
    });
});