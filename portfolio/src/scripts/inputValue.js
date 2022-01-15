export default function inputValue () {
  const input = document.querySelectorAll('.form__input');

  input.forEach(item => {
    item.addEventListener('change', () => {
      if (item.value.length) {
        item.classList.add('active');
        item.previousElementSibling.classList.remove('active');
      } else {
        item.classList.remove('active');
      }
    });
  });
}
 