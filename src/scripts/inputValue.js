export default function inputValue () {
  const input = document.querySelectorAll('.form__input');
  const active = 'form__input--active';

  input.forEach(item => {
    item.addEventListener('change', () => {
      if (item.value.length) {
        item.classList.add(active);
      } else {
        item.classList.remove(active);
      }
    });
  });
}
 