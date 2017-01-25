$(document).ready(function(){



    var closeBtn =  $(".main-header__menu-btn--close"),
        openBtn = $(".main-header__menu-btn--open"),
        menu =  $(".menu__navigation-list");

    openBtn.click(function mobileMenuOpenFunc () {
        menu.stop().slideToggle(500);
        openBtn.stop().toggle(150);
        closeBtn.stop().toggle(150);

    });

    closeBtn.click(function mobileMenuCloseFunc () {
        menu.stop().slideToggle(500);
        openBtn.stop().toggle(150);
        closeBtn.stop().toggle(150);
    });

    $('.main-header__logo-img-wrap').hover(function logosBackgroundHoverChange(){
        $('.main-header').css('background','#22539d');
    }, function(){
        $('.main-header').css('background','#282a2d');
    });

    $('.next').click(function sliderNextBtnAction(){
        var slider = $(this).parents('.slider');
        var content = $(slider).children('.slider__content');
        var current = $(content).children('.slider__item:visible');
        var firstSlide = $(content).children('.slider__item:eq(0)');
        var next = current.next().length ? current.next() : firstSlide;
        current.fadeOut(600);
        next.fadeIn(600);
    });

    $('.prev').click(function sliderPrevBtnAction(){
        var slider = $(this).parents('.slider');
        var content = $(slider).children('.slider__content');
        var current = $(content).children('.slider__item:visible');
        var lastSlide = $(content).children('.slider__item:eq(3)');
        var prev = current.prev().length ? current.prev() : lastSlide;
        current.fadeOut(600);
        prev.fadeIn(600);
    });


    window.onload = function filtersNameChange() {
        $(".ft-label").text('страна');
    };

});


