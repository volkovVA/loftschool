// document.addEventListener("DOMContentLoaded", ready);
const menuEnabled = document.querySelector('.hamburger-menu__btn');
const menuClose = document.querySelector('.hamburger-menu__btn-close');
const mobileMenu = document.querySelector('.hamburger__menu-active');
const mobileMenuLink = document.querySelectorAll('.hamburger-menu__link');
const sideMenuLink = document.querySelector('.side__link');
function closeMenu() {
    mobileMenu.style.display = 'none';
};
for (var i = 0; i < mobileMenuLink.length; i++) {
    mobileMenuLink[i].addEventListener('click', closeMenu)
};
// sideMenuLink.addEventListener('click', function(e) {
//     const items = document.querySelectorAll('.sideMenuLink')
//     const target = e.target
//     Array.from(items).forEach(item => {
//         item.classList.remove('side__link--active')
//     })
//     target.classList.add('side__link--active')
// })
menuEnabled.addEventListener('click', function() {
    mobileMenu.style.display = 'flex';
});
menuClose.addEventListener('click', function() {
    mobileMenu.style.display = 'none';
});
sideMenuLink.addEventListener('click', function() {
    sideMenuLink.classList.add("side__link--active");
});