$(window).scroll(function() {
    var height = $(window).scrollTop();
    if(height > 200){
    $('.stewardess').addClass('stewardess__anim');
    $('.news__item--1').addClass('news__item--slideTop1');
    $('.news__item--2').addClass('news__item--slideTop2');
    $('.news__item--3').addClass('news__item--slideTop3');
    } });

