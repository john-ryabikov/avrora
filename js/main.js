'use srtict';
$(document).ready(function(){
    
    const preload = $('.preload');
    const catalog_main = $('.catalog');
    const catalog = $('.catalog__list-sliders');
    const menu = $('.menu');
    const btnsForMenu = $('.header__btn-menu, .menu__close, .nav-list__text');
    const html = $('html');
    const body = $('body');
    const underfooter = $('.catalog__underfooter');
    const slider = new Swiper(".position__slider", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });
    
    $(function(){
        $("a[href^='#']").on('click', function(){
          var _href = $(this).attr("href");
          $("html, body").animate({scrollTop: $(_href).offset().top + "px"});
          return false;
        });
    });

    body.bind('touchstart', function() {});

    $(window).on('beforeunload', function(){
        $(this).scrollTop(0);
    });
    
    btnsForMenu.click(function() {
        menu.toggleClass('active');
        html.toggleClass('stop-scroll');
    });

    setTimeout(function() {
        preload.fadeOut(100);
        catalog.css({"display":"flex"});
        underfooter.css({"display":"flex"});
        catalog_main.css({"height":"auto"});
    }, 1500);

    new WOW().init();

})
