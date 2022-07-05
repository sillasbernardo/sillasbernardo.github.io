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


    // ------- Dev and Design Btns Start ----------
    var devSkillsBtn = '#dev-skills-header';
    var isDevClicked = false;
    $('.dev-skills').fadeOut(200);
    $(devSkillsBtn).click(() => {
        if (isDevClicked === false){
            isDevClicked = true;
        
            $('head').append(
                '<style>#dev-skills-header::before{width: 100%;}</style>'
            );
            $('.dev-skills').fadeIn(200);

        } else {
            isDevClicked = false;

            $('head').append(
                '<style>#dev-skills-header::before{width: 10px;}</style>'
            );
            $('.dev-skills').fadeOut(200);
        };
    });

    var designerSkillsBtn = '#designer-skills-header';
    var isDesignerClicked = false;
    $('.designer-skills').fadeOut(200);
    $(designerSkillsBtn).click(() => {
        if (isDesignerClicked === false){
            isDesignerClicked = true;
            $('head').append(
                '<style>#designer-skills-header::before{width: 100%; left: 0;}</style>'
            );
            $('.designer-skills').fadeIn(200);
        } else {
            isDesignerClicked = false;
            $('head').append(
                '<style>#designer-skills-header::before{width: 10px; left: 92%;}</style>'
            )
            $('.designer-skills').fadeOut(200);
        }
    });

    // ------- Dev and Design Btns End ----------


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