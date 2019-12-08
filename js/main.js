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
});