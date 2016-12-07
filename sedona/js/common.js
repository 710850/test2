$(document).ready(function(){

    //Open/close menu in mobile screen resolution
    $(".main-container__menu").click(function(){
        $(".main-header__navigation-list").stop().slideToggle(500);
        $(".main-container__menu").toggle(50);
        $(".main-header__icon-cross").toggle(50);
    });

    $(".main-header__icon-cross").click(function(){
        $(".main-header__navigation-list").stop().slideToggle(500);
        $(".main-header__icon-cross").toggle(50);
        $(".main-container__menu").toggle(50);
    });

    $('input.popup-window__input-date').datepick({
        yearRange: 'c-0:c+5'
    });






});
