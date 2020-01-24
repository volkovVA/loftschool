function noScroll() {
    window.scrollTo(0, 0);
};
  
document.addEventListener('DOMContentLoaded', function(){
    const navMobBtn = document.querySelector('.nav-mobile__btn');
        navMobBtn.addEventListener('click', function(){
            if (navMobBtn.classList.contains('nav-mobile__btn--active')) {
                navMobBtn.classList.remove('nav-mobile__btn--active');
            } else {
                navMobBtn.classList.add('nav-mobile__btn--active');
                window.addEventListener('scroll', noScroll); 
            }
        });
    const navMobItem = document.querySelectorAll('.nav-mobile__item');
        for (var i = 0; i < navMobItem.length; i++) {
            navMobItem[i].addEventListener('click', function() {
                navMobBtn.classList.remove('nav-mobile__btn--active');
                window.removeEventListener('scroll', noScroll);
            })
        }
});
