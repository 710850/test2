$(document).ready(function(){

    //работа кнопок отображения/скрытия меню в мобильной версии

    var closeBtn =  $(".main-header__menu-btn--close"),
        openBtn = $(".main-header__menu-btn--open"),
        menu =  $(".menu__navigation-list");

    openBtn.click(function () {
        menu.stop().slideToggle(500);
        openBtn.stop().toggle(150);
        closeBtn.stop().toggle(150);

    });

    closeBtn.click(function () {
        menu.stop().slideToggle(500);
        openBtn.stop().toggle(150);
        closeBtn.stop().toggle(150);
    });


    //изменение цвета фона header'a при наведении мыши на логотип

    $('.main-header__logo-img-wrap').hover(function(){
        $('.main-header').css('background','#22539d');
    }, function(){
        $('.main-header').css('background','#282a2d');
    });


    //работа слайдера



    $('.next').click(function(){
        var slider = $(this).parents('.slider');
        var content = $(slider).children('.slider__content');
        var current = $(content).children('.slider__item:visible');
        var firstSlide = $(content).children('.slider__item:eq(0)');
        var next = current.next().length ? current.next() : firstSlide;
        current.fadeOut(600);
        next.fadeIn(600);
    });

    $('.prev').click(function(){
        var slider = $(this).parents('.slider');
        var content = $(slider).children('.slider__content');
        var current = $(content).children('.slider__item:visible');
        var lastSlide = $(content).children('.slider__item:eq(3)');
        var prev = current.prev().length ? current.prev() : lastSlide;
        current.fadeOut(600);
        prev.fadeIn(600);
    });



    //переименование фильтра

    window.onload = function() {
        $(".ft-label").text('страна');
    };


    //раскрытие фильтра на малом экране
    function checkPosition() {
        if (window.matchMedia('(max-width: 767px)').matches) {
            console.log('josdijflajf');
        } else {
            console.log('big screen')
        }
    }
});


