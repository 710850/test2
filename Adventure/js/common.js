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


});


