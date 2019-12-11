/*===== SLIDER =====*/

$('.slider__list').slick({
    arrows: true,
    appendArrows: $('.slider__arrows'),
    prevArrow: $('.slider__link'),
    nextArrow: $('.slider__link')
    });


$('.review').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.review__list-bottom'
    });
    $('.review__list-bottom').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.review',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    });

/*===== YANDEX MAP =====*/

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.75, 37.62],
            zoom: 13
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark( [55.77, 37.57], {
            // hintContent: 'Собственный значок метки',
            // balloonContent: 'Это красивая метка'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/mark.png',
            iconImageSize: [60, 75],
            iconImageOffset: [0, 0]
        }),

        myPlacemark2 = new ymaps.Placemark([55.74, 37.62], {
            // hintContent: 'Собственный значок метки с контентом',
            // balloonContent: 'А эта — новогодняя',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/mark.png',
            iconImageSize: [60, 75],
            iconImageOffset: [0, 0],
        });

        myPlacemark3 = new ymaps.Placemark([55.75, 37.65], {
            // hintContent: 'Собственный значок метки с контентом',
            // balloonContent: 'А эта — новогодняя',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/mark.png',
            iconImageSize: [60, 75],
            iconImageOffset: [0, 0],
        });

        myPlacemark4 = new ymaps.Placemark([55.77, 37.62], {
            // hintContent: 'Собственный значок метки с контентом',
            // balloonContent: 'А эта — новогодняя',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/mark.png',
            iconImageSize: [60, 75],
            iconImageOffset: [0, 0],
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemark2)
        .add(myPlacemark3)
        .add(myPlacemark4);

    myMap.behaviors.disable('scrollZoom');    
});

/*===== BURGER-MENU =====*/

const navMobBtn = document.querySelector('.nav-mobile__btn');
    navMobBtn.addEventListener('click', function(){
        navMobBtn.classList.toggle('nav-mobile__btn--active');
    });

const navMobItem = document.querySelectorAll('.nav-mobile__item');
for (var i = 0; i < navMobItem.length; i++) {
    navMobItem[i].addEventListener('click', function() {
        navMobBtn.classList.remove('nav-mobile__btn--active');
    })
}

/*===== ACCORDEON =====*/

const accItem = document.querySelectorAll(".accordeon__item");
for (var i = 0; i < accItem.length; i++) {
    accItem[i].addEventListener('click', function(){
        event.preventDefault();
        for (var i = 0; i < accItem.length; i++) {
            accItem[i].classList.remove('accordeon__item--active');
            accItem[i].classList.add('accordeon__item--none');
        }
        this.classList.add('accordeon__item--active');
        this.classList.remove('accordeon__item--none');
    });    
}

for (var i = 0; i < accItem.length; i++) {
    if (accItem[i].classList.contains('accordeon__item--active')) {
        accItem[i].classList.add('accordeon__item--none');
    }
}

const accClose = document.querySelectorAll('.accordeon__close');
for (var i = 0; i < accClose.length; i++) {
    accClose[i].addEventListener('click', function(){
        event.preventDefault();
        event.stopPropagation();
        for (var i = 0; i < accItem.length; i++) {
        accItem[i].classList.remove('accordeon__item--active');
        accItem[i].classList.remove('accordeon__item--none');
        }
    })
}

/*===== TEAM =====*/

const teamName = document.querySelectorAll('.team__name');
for (var i = 0; i < teamName.length; i++) {
    teamName[i].addEventListener('click', function() {
        event.preventDefault();
        this.classList.toggle('team__name--active');
    });
}