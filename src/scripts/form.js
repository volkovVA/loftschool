const loadButton = document.querySelector('.js-form-btn');
const myForm = document.querySelector('.js-form');
const modalWindow = document.querySelector('.popup__title');
const errors = document.querySelectorAll('.form__error');
const popup = document.querySelector(".popup");
const closeBtn = popup.querySelector(".popup__close");


function sendForm() {
    event.preventDefault();
    if(chechVal(myForm)) {
        const formData = new FormData(myForm);
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.send(formData);
        xhr.addEventListener('load', function() {
            if (xhr.response) {
                popup.classList.add('active');
                modalWindow.innerText = 'Сообщение отправлено';
                console.log(JSON.parse(xhr.response));
            } else {
                popup.classList.add('active');
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
    if(!chechValFild(form.elements.email)) {
        valid = false;
    }
    if(!chechValFild(form.elements.message)) {
        valid = false;
    }
    return valid;
}

function chechValFild(field) {
    errors.forEach((error) => {
        if(!field.checkValidity()) {
            error.textContent = field.validationMessage;
            error.classList.add('active');
            return false;
        } else {
            error.textContent = '';
            error.classList.remove('active');
            return true;
        }
    });   
}


closeBtn.addEventListener("click", function(e) {
  e.preventDefault();
  popup.style.display = "none";
});
popup.addEventListener("click", function(e) {
    if (e.target === popup) {
      closeBtn.click();
    }
});

loadButton.addEventListener('click', sendForm)

