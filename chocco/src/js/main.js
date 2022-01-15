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

/*===== FULLPAGE =====*/

$(document).ready(function() {
	$('#fullpage').fullpage({
        menu: '#pagination__list',
        fitToSection: false
    });
});

/*===== YANDEX MAP =====*/

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.75, 37.62],
            zoom: 13
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark( [55.77, 37.57], {
            // hintContent: 'Собственный значок метки',
            // balloonContent: 'Это красивая метка'
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/mark.png',
            iconImageSize: [60, 75],
            iconImageOffset: [0, 0]
        }),

        myPlacemarkTwo = new ymaps.Placemark([55.74, 37.62], {
            // hintContent: 'Собственный значок метки с контентом',
            // balloonContent: 'А эта — новогодняя',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/mark.png',
            iconImageSize: [60, 75],
            iconImageOffset: [0, 0],
        }),

         myPlacemarkThree = new ymaps.Placemark([55.75, 37.65], {
               // hintContent: 'Собственный значок метки с контентом',
               // balloonContent: 'А эта — новогодняя',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/mark.png',
            iconImageSize: [60, 75],
            iconImageOffset: [0, 0],
        }),

         myPlacemarkFour = new ymaps.Placemark([55.77, 37.62], {
             // hintContent: 'Собственный значок метки с контентом',
             // balloonContent: 'А эта — новогодняя',
        }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/mark.png',
            iconImageSize: [60, 75],
            iconImageOffset: [0, 0],
        })

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkTwo)
        .add(myPlacemarkThree)
        .add(myPlacemarkFour);

    myMap.behaviors.disable('scrollZoom');
});

/*===== WINDOW SCROLL =====*/

function noScroll() {
    window.scrollTo(0, 0);
}

/*===== BURGER-MENU =====*/

var page = document.querySelector('#fullpage');
document.addEventListener('DOMContentLoaded', function(){
    const navMobBtn = document.querySelector('.nav-mobile__btn');
        navMobBtn.addEventListener('click', function(){
            if (navMobBtn.classList.contains('nav-mobile__btn--active')) {
                navMobBtn.classList.remove('nav-mobile__btn--active');
                $('#fullpage').fullpage({
                    menu: '#pagination__list',
                });
            } else {
                navMobBtn.classList.add('nav-mobile__btn--active');
                window.addEventListener('scroll', noScroll);
                fullpage_api.destroy('all');
            }

        });
    const navMobItem = document.querySelectorAll('.nav-mobile__item');
        for (var i = 0; i < navMobItem.length; i++) {
            navMobItem[i].addEventListener('click', function() {
                navMobBtn.classList.remove('nav-mobile__btn--active');
                $('#fullpage').fullpage({
                    menu: '#pagination__list',
                });
                window.removeEventListener('scroll', noScroll);
            })
        }
});

/*===== REMOVE FUNCTION =====*/

function removeClass (elem, classname) {
    for (var i = 0; i < elem.length; i++) {
        elem[i].classList.remove(classname);
    }
}

/*===== ACCORDEON =====*/

document.addEventListener('DOMContentLoaded', function() {
    const accItem = document.querySelectorAll(".accordeon__item");
    for (var i = 0; i < accItem.length; i++) {
        accItem[i].addEventListener('click', function(){
            event.preventDefault();
            removeClass(accItem, 'accordeon__item--active');
            this.classList.add('accordeon__item--active');
            this.parentNode.classList.add('accordeon__list--active');
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
            removeClass(teamName, 'team__name--active');
            this.classList.add('team__name--active');
        });
    }
});

/*===== FORM =====*/

document.addEventListener('DOMContentLoaded', function() {
    const loadButton = document.querySelector('#btn');
    const myForm = document.querySelector('#myform');
    const modalWindow = document.querySelector('.popup__content');

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
            xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
            xhr.send(formData);
            xhr.addEventListener('load', function() {
                if (xhr.response) {
                    popup.classList.add('popup-active');
                    modalWindow.innerText = 'Сообщение отправлено';
                    console.log(JSON.parse(xhr.response));
                } else {
                    popup.classList.add('popup-active');
                    modalWindow.innerText = 'Сообщение не отправлено';
                }
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
popup.addEventListener("click", function(e) {
    if (e.target === popup) {
      closeBtn.click();
    }
  });
});

/*===== REVIEWS =====*/

document.addEventListener('DOMContentLoaded', function() {
    const reviewLink = document.querySelectorAll('.review__photo-bottom');
    for (let i = 0; i < reviewLink.length; i++) {
        reviewLink[i].addEventListener('click', function() {
            removeClass(reviewLink, 'review__photo-bottom--active');
            this.classList.add('review__photo-bottom--active');
        });
    }
});

/*===== VIDEO PLAYER =====*/

let playBtn = document.querySelector('.player__start'),
video = document.querySelector('.player__video'),
player = document.querySelector('.player__wrapper'),
duration = document.querySelector('.player__duration-estimate'),
compleated = document.querySelector('.player__duration-completed'),
progress = document.querySelector('#progress'),
volumeControl = document.querySelector('#volume'),
volumeIcon = document.querySelector('.player__volume--icon');

playBtn.addEventListener('click', function () {
if (video.paused) {
    video.play();
    this.classList.add('paused');
    player.classList.add('active');

} else {
    video.pause();
    this.classList.remove('paused');
}
});

player.addEventListener('click', function () {
if (video.paused) {
    video.play();
    playBtn.classList.add('paused');
    this.classList.add('active');
} else {
    video.pause();
    playBtn.classList.remove('paused');
}
})

function progressVideo() {
video.currentTime = Math.floor((video.duration/100) * progress.value);
}
progress.addEventListener('input', progressVideo);

video.addEventListener("timeupdate", function() {
let percent = Math.floor((100 / video.duration) * video.currentTime);
progress.value = percent;
const compleatedSec = video.currentTime;
compleated.innerText = formatTime(compleatedSec);
});

video.addEventListener('canplay', function() {
let durationSec = video.duration;
duration.innerText = formatTime(durationSec);
});

function volumeVideoControl () {
    video.volume = volumeControl.value / 100;
}
volumeControl.addEventListener('input' , volumeVideoControl);
volumeControl.addEventListener('input', function(){
if (video.volume == 0) {
volumeIcon.classList.add('muted');
} if (video.volume > 0) {
    volumeIcon.classList.remove('muted');
}
})

volumeIcon.addEventListener('click', function() {
if (this.classList.contains('muted')) {
    video.volume = 1;
    volumeControl.value = 100;
    this.classList.remove('muted');
} else {
    this.classList.add('muted');
    video.volume = 0;
    volumeControl.value = 0;
};
})

function formatTime(timeSec) {
const roundTime = Math.round(timeSec);
const minutes = Math.floor(roundTime / 60);
const seconds = roundTime - minutes * 60;
const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;
return minutes + ' : ' + formattedSeconds ;
};

