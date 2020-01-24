document.addEventListener('DOMContentLoaded', function(){
    const input = document.querySelectorAll('.form__input');
    for (let i = 0; i < input.length; i++) {
      input[i].addEventListener("change", function(event){
        if (this.value.length) {
          this.classList.add('form__input--active');
        } else {
          this.classList.remove('form__input--active');
        }
      });
    }
}); 