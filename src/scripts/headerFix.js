export default function headerFix (headerName) {
    const header = document.querySelector(headerName);
    const activeClass = 'active'
    const startPoint = header.getBoundingClientRect().bottom;

    function toggleActiveClass() {
        if (startPoint < window.pageYOffset) {
            header.classList.add(activeClass);
        } else {
            header.classList.remove(activeClass);
        }
    }

    window.addEventListener('scroll', toggleActiveClass);
};