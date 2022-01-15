export default function hoverScroll() {
    const header = document.querySelector('.js-header');
    const navLink = document.querySelectorAll('.js-link');
    const section = document.querySelectorAll('.js-section');
    const coordHeader = header.getBoundingClientRect().bottom;

    window.addEventListener('scroll', () => {
        for (let i = 0; i < section.length; i++) {
            if ((coordHeader > section[i].getBoundingClientRect().top) && (coordHeader < section[i].getBoundingClientRect().bottom)) {
                navLink[i].classList.add('active');     
            } else {
                navLink[i].classList.remove('active'); 
            }  
        }     
    });
}