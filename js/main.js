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

document.addEventListener('DOMContentLoaded', function(){
    const navMobBtn = document.querySelector('.nav-mobile__btn');
        navMobBtn.addEventListener('click', function(){
            navMobBtn.classList.toggle('nav-mobile__btn--active');
            window.addEventListener('scroll', noScroll); 
        });
    const navMobItem = document.querySelectorAll('.nav-mobile__item');
    for (var i = 0; i < navMobItem.length; i++) {
        navMobItem[i].addEventListener('click', function() {
            navMobBtn.classList.remove('nav-mobile__btn--active');
            window.removeEventListener('scroll', noScroll);
        })
    }
});

/*===== WINDOW SCROLL =====*/

function noScroll() {
    window.scrollTo(0, 0);
}

/*===== ACCORDEON =====*/

document.addEventListener('DOMContentLoaded', function() {
    const accItem = document.querySelectorAll(".accordeon__item");
    const accList = document.querySelector(".accordeon__list");
    for (var i = 0; i < accItem.length; i++) {
        accItem[i].addEventListener('click', function(){
            event.preventDefault();
            for (var i = 0; i < accItem.length; i++) {
                accItem[i].classList.remove('accordeon__item--active');
            }
            this.classList.add('accordeon__item--active');
            accList.classList.add('accordeon__list--active');   
        });    
    }
    const accClose = document.querySelectorAll('.accordeon__close');
    for (var i = 0; i < accClose.length; i++) {
        accClose[i].addEventListener('click', function(){
            event.preventDefault();
            event.stopPropagation();
            event.target.closest('.accordeon__item').classList.remove('accordeon__item--active');
            event.target.closest('.accordeon__list').classList.remove('accordeon__list--active');     
        })
    }
});

/*===== TEAM =====*/

document.addEventListener('DOMContentLoaded', function() {
    const teamName = document.querySelectorAll('.team__name');
    for (var i = 0; i < teamName.length; i++) {
        teamName[i].addEventListener('click', function() {
            event.preventDefault();
            for (var i = 0; i < teamName.length; i++) {
                teamName[i].classList.remove('team__name--active');
            }
            this.classList.add('team__name--active')
        });
    }
});

/*===== FORM =====*/

document.addEventListener('DOMContentLoaded', function() {
    const loadButton = document.querySelector('#btn');
    const myForm = document.querySelector('#myform');

    function sendForm() {
        event.preventDefault();
        if(chechVal(myForm)) {
            //  const data = {
            //     name: myForm.elements.name.value,
            //     phone: myForm.elements.phone.value,
            //     comment: myForm.elements.comment.value,
            //     to: 'volkov.slava@hotmail.com'
            //  }
            var formData = new FormData(myForm);
            formData.append('to', 'emaill@mail.com');
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'json';
            xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail', true);
            xhr.send(JSON.stringify(formData));
            xhr.addEventListener('load', function() {
                if (xhr.response) {
                    popup.classList.add('popup-active');
                    
                }
                console.log(xhr.responseType);
                popup.classList.add('popup-active');
            });
        };
    }

    function chechVal(form) {
        let valid = true;
        if(!chechValFild(form.elements.name)) {
            valid = false;
        }
        if(!chechValFild(form.elements.phone)) {
            valid = false;
        }
        if(!chechValFild(form.elements.street)) {
            valid = false;
        }
        if(!chechValFild(form.elements.house)) {
            valid = false;
        }
        if(!chechValFild(form.elements.housing)) {
            valid = false;
        }
        if(!chechValFild(form.elements.apartment)) {
            valid = false;
        }
        return valid;
    }

    function chechValFild(field) {
        if(!field.checkValidity()) {
            field.parentNode.nextElementSibling.textContent = field.validationMessage;
            return false
        }
        else {
            field.parentNode.nextElementSibling.textContent = '';
            return true;
        }
    }      

    loadButton.addEventListener('click', sendForm);



/*====== POPUP =====*/

const popup = document.querySelector(".popup");
const closeBtn = popup.querySelector(".popup__close");
closeBtn.addEventListener("click", function(e) {
  e.preventDefault();
  popup.style.display = "none";
});

});
// overlayElement.addEventListener("click", function(e) {
//   if (e.target === overlayElement) {
//     closeElement.click();
//   }
// });




