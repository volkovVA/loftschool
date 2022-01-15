export default function popupMenu () {
    const button = document.querySelector('.nav-mobile__btn');
    const links = document.querySelectorAll('.nav-mobile__item');
    const body = document.querySelector('body');
    
    button.addEventListener('click', () => {
        if (button.classList.contains('active')) {
            button.classList.remove('active');
            body.style.overflow = 'visible';
        } else {
            button.classList.add('active');
            body.style.overflow = 'hidden';
        }
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            button.classList.remove('active');
            body.style.overflow = 'visible';
        });
    });
}



