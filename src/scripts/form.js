import closedPopup from "./closedPopup.js";

const myForm = document.querySelector('.js-form');
const loadButton = document.querySelector('.js-form-btn');
const errors = document.querySelectorAll('.js-form-error');
const popup = document.querySelector(".js-popup");
const popupTitle = document.querySelector('.js-popup-title');


function sendForm() {
    event.preventDefault();
    if(chechVal(myForm)) {
        let formData = new FormData(myForm);
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'form.txt');
        xhr.send(formData);
        xhr.addEventListener('load', function() {
            console.log(xhr.response);
            if (xhr.response) {
                popup.classList.add('active');
                popupTitle.innerText = 'Сообщение отправлено';
                console.log(JSON.parse(xhr.response));
            } else {
                popup.classList.add('active');
                popupTitle.innerText = 'Сообщение не отправлено';
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
    if(!field.checkValidity()) {
        errors.forEach((error) => {
            error.textContent = field.validationMessage;
            error.classList.add('active');
        });
            return false;
    } else {
        errors.forEach((error) => {
            error.textContent = '';
            error.classList.remove('active');
        });
            return true;
    }  
}

// function chechValFild(field) {
//     errors.forEach((error) => {
//         if(!field.checkValidity()) {
//             error.textContent = field.validationMessage;
//             error.classList.add('active');
//             return false;
//         } else {
//             error.textContent = '';
//             error.classList.remove('active');
//             return true;
//         }
//     });    
// }

closedPopup();

loadButton.addEventListener('click', sendForm)


